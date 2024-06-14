import React, { PropsWithChildren } from 'react';

import classes from './HeaderLanguageSelector.module.scss';
import { LanguageOption, useActiveLanguage, useAvailableLanguages, useSetLanguage } from '../../LanguageContext';
import classNames from '../../../../utils/classNames';
import { withDefaultPrevented } from '../../../../utils/useCallback';
import { HeaderActionBarItem } from '../headerActionBarItem';
import { HeaderActionBarSubItem } from '../headerActionBarSubItem';
import { IconGlobe } from '../../../../icons';
import { useHeaderContext } from '../../HeaderContext';
import { getComponentFromChildren } from '../../../../utils/getChildren';

/* eslint-disable react/no-unused-prop-types */
type LanguageSelectorComponentProps = {
  /**
   * Aria-label attribute for the dropdown button.
   */
  ariaLabel?: string;
  /**
   * Heading for the list of languages inside the dropdown
   */
  languageHeading?: string;
  /**
   * Function for sorting language options into primary and secondary.
   */
  sortLanguageOptions?: (options: LanguageOption[], selectedLanguage: string) => [LanguageOption[], LanguageOption[]];
};
/* eslint-enable react/no-unused-prop-types */

export type LanguageSelectorProps = PropsWithChildren<LanguageSelectorComponentProps>;

type LanguageSelectorConsumerProps = LanguageSelectorProps & {
  /**
   * Mobile mode.
   * @internal
   */
  // eslint-disable-next-line react/no-unused-prop-types
  fullWidthForMobile?: boolean;
};

export const LanguageButton = ({ value, label }: LanguageOption) => {
  const activeLanguage = useActiveLanguage();
  const setLanguage = useSetLanguage();
  const className = classNames(classes.item, { [classes.activeItem]: activeLanguage === value });
  const selectLanguage = withDefaultPrevented(() => setLanguage(value));

  return (
    <button
      key={value}
      lang={value}
      onClick={selectLanguage}
      type="button"
      className={className}
      aria-current={activeLanguage === value}
    >
      <span>{label}</span>
    </button>
  );
};

const renderLanguageNode = (language: LanguageOption, primary: boolean) => {
  const Label = <LanguageButton key={language.value} value={language.value} label={language.label} />;
  return primary ? Label : <HeaderActionBarSubItem label={Label} />;
};

export const SimpleLanguageOptions = ({ languages }: { languages: LanguageOption[] }) => {
  return (
    <div className={classNames(classes.languageNodes, classes.simpleLanguageNodes)}>
      {languages.map((node) => renderLanguageNode(node, true))}
    </div>
  );
};

const defaultLanguageSorter: LanguageSelectorProps['sortLanguageOptions'] = (options, selectedLanguage) => {
  const hasPrimaryLanguages = options.some((option) => typeof option.isPrimary !== 'undefined');
  const selectedOption = options.find((option) => option.value === selectedLanguage);
  if (hasPrimaryLanguages && selectedOption.isPrimary !== true) {
    return [[selectedOption], options.filter((option) => option.value !== selectedOption.value)];
  }
  return hasPrimaryLanguages
    ? [options.filter((option) => !!option.isPrimary), options.filter((option) => !option.isPrimary)]
    : [options, []];
};

export function HeaderLanguageSelector(props: LanguageSelectorProps) {
  // This is a dummy component used for passing language selector props and children.
  // Those are extracted in <HeaderActionBar /> and rendered with <HeaderLanguageSelectorConsumer />

  // use props in some way to avoid ts-error
  return props ? null : null;
}

HeaderLanguageSelector.componentName = 'HeaderLanguageSelector';

export const HeaderLanguageSelectorConsumer = ({
  children,
  ariaLabel,
  languageHeading,
  sortLanguageOptions = defaultLanguageSorter,
  fullWidthForMobile = false,
}: LanguageSelectorConsumerProps) => {
  const { isNotLargeScreen, mobileMenuOpen } = useHeaderContext();
  const languages = useAvailableLanguages();
  const activeLanguage = useActiveLanguage();

  const [primaryLanguages, secondaryLanguages] = sortLanguageOptions(languages, activeLanguage);
  const primaryLanguageNodes = primaryLanguages.map((node) => renderLanguageNode(node, true));
  // when its not large screen fullWidthForMobile -version can be used
  const show =
    (isNotLargeScreen && fullWidthForMobile && !mobileMenuOpen) || (!isNotLargeScreen && !fullWidthForMobile);

  if (!show) {
    return null;
  }
  const hasChildren = children && Array.isArray(children) && children.length > 0;
  const hasSecondaryLanguages = secondaryLanguages.length > 0;
  return (
    <div className={classNames(classes.languageSelector, { [classes.fullWidthForMobile]: fullWidthForMobile })}>
      <div className={classNames(classes.languageNodes)}>{primaryLanguageNodes}</div>
      {(hasChildren || hasSecondaryLanguages) && (
        <HeaderActionBarItem
          id="language-selection-more"
          className={classes.languageSelectorActionBarItem}
          iconClassName={classes.languageSelectorDropdownIcon}
          dropdownClassName={classes.languageSelectorDropdown}
          icon={<IconGlobe aria-hidden />}
          closeIcon={<IconGlobe aria-hidden />}
          fullWidth={isNotLargeScreen}
          ariaLabel={ariaLabel}
          labelOnRight
        >
          {hasSecondaryLanguages && languageHeading && <HeaderActionBarSubItem label={languageHeading} heading />}
          {secondaryLanguages.map((node) => renderLanguageNode(node, false))}
          {children}
        </HeaderActionBarItem>
      )}
    </div>
  );
};

const getLanguageSelectorComponent = (childList?: React.ReactNode): React.ReactNode | undefined => {
  const component = getComponentFromChildren(childList, HeaderLanguageSelector.componentName);
  return component[0] && component[0][0];
};

export const getLanguageSelectorComponentProps = (
  childList?: React.ReactNode,
): { props?: LanguageSelectorComponentProps; children?: React.ReactNode; componentExists: boolean } => {
  const component = getLanguageSelectorComponent(childList) as React.ReactElement<LanguageSelectorProps>;
  const { children, ...props } = (component && component.props) || {};
  return {
    children,
    props,
    componentExists: !!component,
  };
};

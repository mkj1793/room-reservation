import React, { cloneElement, Fragment } from 'react';

// import base styles
import '../../../../styles/base.css';

import styles from './FooterBase.module.scss';
import { Logo, LogoLanguage } from '../../../logo';
import { IconArrowUp } from '../../../../icons';
import getKeyboardFocusableElements from '../../../../utils/getKeyboardFocusableElements';
import { FooterNavigationLink } from '../footerNavigationLink/FooterNavigationLink';
import { getChildrenAsArray } from '../../../../utils/getChildren';

export type FooterBaseProps = React.PropsWithChildren<{
  /**
   * Description of the base section for screen readers.
   */
  ariaLabel?: string;
  /**
   * Label for the "Back to top" button
   */
  backToTopLabel?: string | React.ReactNode;
  /**
   * Text to be displayed next to the copyright symbol
   */
  copyrightHolder?: React.ReactNode;
  /**
   * Text to be displayed after the copyright holder text
   */
  copyrightText?: React.ReactNode;
  /**
   * Link for the logo. Should direct to the main page.
   */
  logoHref?: string;
  /**
   * The language of the Helsinki-logo
   * @default 'fi'
   */
  logoLanguage?: LogoLanguage;
  /**
   * Callback fired when the "Back to top" button is clicked
   */
  onBackToTopClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Whether the "Back to top" button should be shown
   */
  showBackToTopButton?: boolean;
  /**
   * Set the year for copyright text. This can be useful in automated tests when a static year is set so the tests don't fail after a new year.
   */
  year?: number;
}>;

/**
 * Scrolls to the top of the page and puts the focus on the first focusable element in the DOM
 */
const handleBackToTop = (): void => {
  // eslint-disable-next-line no-unused-expressions
  window?.scrollTo({ top: 0 });
  // eslint-disable-next-line no-unused-expressions
  getKeyboardFocusableElements()[0]?.focus();
};

export const FooterBase = ({
  ariaLabel,
  backToTopLabel,
  children,
  copyrightHolder,
  copyrightText,
  logoHref,
  logoLanguage = 'fi',
  onBackToTopClick,
  showBackToTopButton = true,
  year = new Date().getFullYear(),
}: FooterBaseProps) => {
  const childElements = getChildrenAsArray(children);
  return (
    <div className={styles.base} aria-label={ariaLabel}>
      <hr className={styles.divider} aria-hidden />
      <div className={styles.logoWrapper}>
        <FooterNavigationLink
          tabIndex={0}
          icon={<Logo size="medium" language={logoLanguage} aria-hidden />}
          href={logoHref}
        />
      </div>
      {(copyrightHolder || copyrightText) && (
        <div className={styles.copyright}>
          <span className={styles.copyrightHolder}>
            © {copyrightHolder} {year}
          </span>
          {copyrightText && (
            <>
              <span className={styles.copyrightDot}>•</span>
              <span className={styles.copyrightText}>{copyrightText}</span>
            </>
          )}
        </div>
      )}
      <div className={styles.baseActions}>
        {children && (
          <div className={styles.links}>
            {childElements.map((child, index) => {
              if (React.isValidElement(child)) {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <Fragment key={index}>
                    <span className={styles.separator}>|</span>
                    {cloneElement(child)}
                  </Fragment>
                );
              }
              return null;
            })}
          </div>
        )}
        {showBackToTopButton && (
          <button
            type="button"
            role="link"
            className={styles.backToTopButton}
            onClick={(e) => (typeof onBackToTopClick === 'function' ? onBackToTopClick(e) : handleBackToTop())}
          >
            {backToTopLabel}
            <IconArrowUp aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};
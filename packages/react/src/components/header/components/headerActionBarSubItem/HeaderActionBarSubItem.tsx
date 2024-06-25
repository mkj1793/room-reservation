import React, {
  cloneElement,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useCallback,
} from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';

import classes from './HeaderActionBarSubItem.module.scss';
import classNames from '../../../../utils/classNames';
import { IconLinkExternal } from '../../../../icons';
import actionBarItemClasses from '../headerActionBarItem/HeaderActionBarItem.module.scss';

export interface HeaderActionBarSubItemProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  /**
   * Aria-label attribute for the action bar item.
   */
  'aria-label'?: React.ComponentProps<'button'>['aria-label'];
  /**
   * Icon element (on the left side of the label) for the action bar item.
   */
  iconLeft?: ReactNode;
  /**
   * Icon element (on the right side of the label) for the action bar item.
   */
  iconRight?: ReactNode;
  /**
   * Content for the right aligned red notification bubble
   */
  notificationBubbleContent?: string;
  /**
   * Aria label for notification bubble.
   */
  notificationBubbleAriaLabel?: string;
  /**
   * Label for the action bar item.
   */
  label?: string | JSX.Element;
  /**
   * If heading style is used
   */
  isHeading?: boolean;
  /**
   * If bold
   */
  bold?: boolean;
  /**
   * Hypertext Reference of the link.
   */
  href?: string;
  /**
   * If external link
   */
  external?: boolean;
  /**
   * The aria-label for opening link in an external domain
   */
  openInExternalDomainAriaLabel?: string;
}

export const HeaderActionBarSubItem = forwardRef<HTMLButtonElement | HTMLAnchorElement, HeaderActionBarSubItemProps>(
  (
    {
      'aria-label': ariaLabel,
      iconLeft,
      iconRight,
      notificationBubbleContent,
      notificationBubbleAriaLabel,
      label,
      isHeading,
      href,
      onClick,
      className,
      bold,
      external,
      openInExternalDomainAriaLabel,
      ...rest
    },
    ref,
  ) => {
    const itemClassName = classNames({
      [classes.actionBarSubItem]: true,
      ...(className && { [className]: true }),
      [classes.bold]: bold,
    });

    const composeAriaLabel = () => {
      let linkText = ariaLabel || String(label);
      const externalText = external ? openInExternalDomainAriaLabel || 'Siirtyy toiseen sivustoon.' : '';

      if (linkText && linkText.slice(-1) !== '.') {
        linkText = `${linkText}.`;
      }

      return [linkText, externalText].filter((text) => text).join(' ');
    };

    const Icon = ({ element, elementClassName }: { element: ReactNode; elementClassName?: string }) => {
      if (!element && !React.isValidElement(element)) {
        return null;
      }
      return (
        <span className={elementClassName}>{cloneElement(element as React.ReactElement, { 'aria-hidden': true })}</span>
      );
    };

    const Label = ({ text }: { text: HeaderActionBarSubItemProps['label'] }) => {
      if (!text) {
        return null;
      }
      return <span className={classNames(classes.actionBarSubItemLabel)}>{text}</span>;
    };

    const Content = () => (
      <>
        <Icon
          element={iconLeft}
          elementClassName={classNames(classes.actionBarSubItemIcon, classes.actionBarSubItemIconLeft)}
        />
        <Label text={label} />
        {external ? (
          <IconLinkExternal className={classNames(classes.actionBarSubItemIcon)} />
        ) : (
          <Icon element={iconRight} elementClassName={classNames(classes.actionBarSubItemIcon)} />
        )}
        {notificationBubbleContent !== undefined && (
          <>
            <span className={classNames(classes.grow)} />
            <span className={classNames(classes.notificationBubble)}>
              {notificationBubbleAriaLabel && <VisuallyHidden>{`${notificationBubbleAriaLabel} `}</VisuallyHidden>}
              {notificationBubbleContent}
            </span>
          </>
        )}
      </>
    );

    const isLink = href && href !== '';
    const linkAttr = {
      ...((external || ariaLabel) && { 'aria-label': composeAriaLabel() }),
      ...(isLink && { href }),
      ...(onClick && { onClick }),
      ...rest,
    };

    const Wrapper = useCallback(
      ({ children }: PropsWithChildren<unknown>) => {
        return (
          <li className={actionBarItemClasses.dropdownItem}>
            {isHeading ? <h4 className={itemClassName}>{children}</h4> : children}
          </li>
        );
      },
      [isHeading, itemClassName],
    );

    if (isLink) {
      return (
        <Wrapper>
          <a
            className={itemClassName}
            {...(linkAttr as unknown as HTMLAttributes<HTMLAnchorElement>)}
            ref={ref as ForwardedRef<HTMLAnchorElement>}
          >
            <Content />
          </a>
        </Wrapper>
      );
    }

    if (linkAttr.onClick) {
      return (
        <Wrapper>
          <button type="button" className={itemClassName} ref={ref as ForwardedRef<HTMLButtonElement>} {...linkAttr}>
            <Content />
          </button>
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <Content />
      </Wrapper>
    );
  },
);

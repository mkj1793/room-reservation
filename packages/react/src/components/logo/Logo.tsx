import React from 'react';

import styles from './Logo.module.css';
import classNames from '../../utils/classNames';

export type LogoLanguage = 'fi' | 'sv';
export type LogoSize = 'full' | 'small' | 'medium' | 'large';

export type LogoProps = React.ComponentPropsWithoutRef<'svg'> & {
  /**
   * Additional class names to apply to the logo
   */
  className?: string;
  /**
   * Adds a data-testid attribute to the root element with the given value
   */
  dataTestId?: string;
  /**
   * The language of the Helsinki-logo
   * @default 'fi'
   */
  language?: LogoLanguage;
  /**
   * The size of the logo
   * @default 'full'
   */
  size?: LogoSize;
  /**
   * Override or extend the styles applied to the component
   */
  style?: React.CSSProperties;
};

const LogoFI = (props): React.ReactElement => (
  <svg viewBox="0 0 78 36" role="img" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M75.753 2.251v20.7c0 3.95-3.275 7.178-7.31 7.178h-22.26c-2.674 0-5.205.96-7.183 2.739a10.749 10.749 0 00-7.183-2.74H9.509c-4.003 0-7.247-3.21-7.247-7.177V2.25h73.491zM40.187 34.835a8.47 8.47 0 016.012-2.471h22.245c5.268 0 9.556-4.219 9.556-9.413V0H0v22.935c0 5.194 4.256 9.413 9.509 9.413h22.308c2.263 0 4.398.882 6.012 2.471L39.016 36l1.17-1.165z"
      fill="currentColor"
    />
    <path
      d="M67.522 11.676c0 .681-.556 1.177-1.255 1.177-.7 0-1.255-.496-1.255-1.177 0-.682.556-1.178 1.255-1.178.7-.03 1.255.465 1.255 1.178zm-2.352 9.622h2.178v-7.546H65.17v7.546zm-3.909-4.556l2.845 4.556h-2.368l-1.907-3.022-1.033 1.271v1.75h-2.161V10.453h2.16v5.004c0 .93-.11 1.86-.11 1.86h.047s.509-.821.938-1.41l1.653-2.154h2.542l-2.606 2.99zm-6.817-.278c0-1.875-.938-2.898-2.432-2.898-1.271 0-1.939.728-2.32 1.426h-.048l.112-1.24h-2.162v7.546h2.162V16.82c0-.868.524-1.472 1.335-1.472.81 0 1.16.527 1.16 1.534v4.416h2.177l.016-4.834zm-8.931-4.788c0 .681-.557 1.177-1.256 1.177-.7 0-1.255-.496-1.255-1.177 0-.682.556-1.178 1.255-1.178.715-.03 1.256.465 1.256 1.178zm-2.352 9.622h2.177v-7.546H43.16v7.546zm-3.75-2.107c0-.605-.859-.729-1.86-1.008-1.16-.294-2.622-.867-2.622-2.308 0-1.426 1.398-2.324 3.051-2.324 1.541 0 2.956.712 3.544 1.72l-1.86 1.022c-.19-.666-.762-1.193-1.62-1.193-.557 0-1.018.232-1.018.682 0 .573 1.018.635 2.162.991 1.208.372 2.32.915 2.32 2.294 0 1.518-1.446 2.417-3.115 2.417-1.811 0-3.242-.744-3.877-1.952l1.89-1.039c.24.822.922 1.441 1.955 1.441.62 0 1.05-.248 1.05-.743zm-6.882-8.677h-2.177v8.692c0 .775.175 1.348.509 1.705.35.356.89.526 1.636.526.255 0 .525-.03.78-.077.27-.062.476-.14.65-.233l.191-1.425a2.07 2.07 0 01-.46.124c-.128.03-.287.03-.461.03-.286 0-.414-.077-.509-.216-.111-.14-.159-.387-.159-.744v-8.382zm-7.246 4.57c-.795 0-1.446.558-1.621 1.581h3.05c.017-.899-.587-1.58-1.43-1.58zm3.353 3.007H23.63c.095 1.224.794 1.828 1.7 1.828.81 0 1.367-.527 1.494-1.24l1.828 1.007c-.54.961-1.7 1.798-3.322 1.798-2.16 0-3.75-1.472-3.75-3.951 0-2.464 1.62-3.951 3.703-3.951 2.081 0 3.464 1.44 3.464 3.486-.016.604-.111 1.023-.111 1.023zm-11.077 3.207h2.257V10.916h-2.257v4.107h-4.243v-4.091H11.06v10.366h2.256v-4.292h4.243v4.292z"
      fill="currentColor"
    />
  </svg>
);

const LogoSV = (props): React.ReactElement => (
  <svg viewBox="0 0 104 36" role="img" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M103.105 0v22.935c0 5.179-4.266 9.397-9.524 9.397l-34.867.032a8.46 8.46 0 00-5.981 2.471L51.553 36l-1.181-1.165a8.405 8.405 0 00-5.982-2.471H9.476C4.25 32.364 0 28.145 0 22.966V0h103.105zm-2.236 2.235H2.251v20.731c0 3.951 3.243 7.163 7.225 7.163H44.39c2.676 0 5.195.96 7.162 2.739 1.968-1.78 4.486-2.74 7.162-2.74l34.867-.03c4.014 0 7.288-3.212 7.288-7.163v-20.7zM62.02 12.09l2 1.15c-.032 1.007-.489 1.479-1.354 1.479-.205 0-.473-.047-.614-.094v.062c.425.331.944.882.944 1.763 0 1.512-1.464 2.472-3.274 2.472-.834 0-1.558.267-1.558.677 0 .315.267.456.913.456.645 0 1.369-.126 2.203-.126 1.653 0 2.755.661 2.755 2.157 0 1.794-2.015 2.503-4.282 2.503-2.109 0-4.03-.598-4.03-1.952 0-.819.85-1.307 1.622-1.448v-.048c-.582-.173-1.102-.55-1.102-1.212 0-.865.882-1.338 1.779-1.527v-.047c-.834-.33-1.543-1.007-1.543-2.188 0-1.511 1.322-2.55 3.133-2.55.692 0 1.086.142 1.605.142.646 0 .882-.362.882-.945 0-.267-.047-.535-.079-.724zm-1.731 9.54c-.93 0-2.724.078-2.724.786 0 .536.898.787 2.157.803 1.417 0 2.235-.267 2.235-.913 0-.504-.755-.677-1.668-.677zm28.995-8.013c1.527 0 2.928.724 3.526 1.747l-1.842 1.04a1.624 1.624 0 00-1.606-1.213c-.55 0-1.007.236-1.007.677 0 .582 1.007.645 2.157 1.008 1.196.377 2.298.928 2.298 2.33 0 1.542-1.433 2.455-3.101 2.455-1.795 0-3.211-.771-3.841-1.984l1.873-1.054c.252.834.913 1.464 1.936 1.464.598 0 1.023-.268 1.023-.74 0-.614-.85-.756-1.841-1.023-1.165-.315-2.613-.882-2.613-2.346 0-1.448 1.385-2.36 3.038-2.36zm-14.655 0c2.078 0 3.699 1.527 3.699 4.014s-1.606 4.014-3.7 4.014c-2.109 0-3.714-1.527-3.714-4.014s1.605-4.014 3.715-4.014zm-49.68 0c2.063 0 3.432 1.464 3.432 3.542.016.614-.094 1.039-.094 1.039h-4.974c.094 1.243.787 1.857 1.684 1.857.803 0 1.354-.535 1.48-1.26l1.81 1.024c-.535.976-1.684 1.826-3.29 1.826-2.14 0-3.715-1.495-3.715-4.014 0-2.487 1.606-4.014 3.668-4.014zm13.066-.016c1.527 0 2.928.724 3.526 1.748l-1.842 1.039c-.189-.677-.755-1.213-1.605-1.213-.551 0-1.008.237-1.008.677 0 .583 1.008.646 2.14 1.008 1.197.378 2.3.928 2.3 2.33 0 1.542-1.433 2.44-3.086 2.44-1.795 0-3.211-.756-3.841-1.984l1.873-1.055c.236.835.913 1.464 1.936 1.464.583.016 1.008-.236 1.008-.724 0-.614-.85-.74-1.842-1.023-1.165-.3-2.597-.882-2.597-2.345 0-1.449 1.385-2.362 3.038-2.362zM32.3 10.53v8.501c0 .362.047.614.157.756.095.157.22.22.504.22.173 0 .33 0 .456-.031a2.01 2.01 0 00.457-.126l-.189 1.448a2.532 2.532 0 01-.645.236c-.252.047-.52.079-.772.079-.74 0-1.275-.174-1.621-.536-.33-.362-.504-.944-.504-1.731V10.53h2.157zm19.818 3.086c1.48 0 2.408 1.023 2.408 2.928v4.911h-2.156V16.97c0-1.007-.362-1.543-1.165-1.543s-1.322.614-1.322 1.496v4.549h-2.141v-7.666h2.14l-.11 1.26h.048c.378-.71 1.039-1.449 2.298-1.449zm16.733-3.337a3.27 3.27 0 012.739 1.4l-1.858 1.134c-.031-.456-.252-.928-.771-.928-.535 0-.787.409-.787 1.086v.834h1.684v1.637h-1.684v6.029h-2.14v-6.029h-1.181v-1.637h1.18v-.819c0-1.794 1.18-2.707 2.818-2.707zm14.812 3.384c1.086 0 1.684.913 1.684 2.03 0 .505-.078.898-.078.898l-1.936 1.118c.031-.22.126-.74.126-1.26 0-.503-.19-.975-.725-.975-.676 0-.944.63-.944 1.62v4.377h-2.157v-7.65h2.157l-.11 1.259h.047c.378-.74.96-1.417 1.936-1.417zm-70.52-2.723v4.171h4.203v-4.17h2.235v10.514h-2.235v-4.36h-4.203v4.36h-2.235V10.94h2.235zm32.332 2.85v7.665H43.32V13.79h2.156zm29.153 1.463c-1.07 0-1.543 1.008-1.543 2.377 0 1.37.472 2.377 1.543 2.377 1.054 0 1.527-1.007 1.527-2.377 0-1.37-.473-2.377-1.527-2.377zm-14.891-.189c-.724 0-1.307.473-1.307 1.197 0 .74.583 1.212 1.307 1.196.724 0 1.306-.472 1.306-1.196s-.582-1.197-1.306-1.197zm-34.773.095c-.787 0-1.432.566-1.605 1.605h3.038c0-.913-.598-1.605-1.433-1.605zm19.44-4.675c.693 0 1.244.503 1.244 1.196s-.55 1.196-1.243 1.196c-.709 0-1.244-.503-1.244-1.196s.551-1.196 1.244-1.196z"
      fill="currentColor"
    />
  </svg>
);

export const Logo = ({ className, dataTestId, language = 'fi', size = 'full', style, ...rest }: LogoProps) => {
  const props = {
    className: classNames(styles.logo, size !== 'full' && styles[size], className),
    style,
    'data-testid': dataTestId,
    ...rest,
  };

  if (language === 'sv') {
    return <LogoSV {...props} />;
  }

  return <LogoFI {...props} />;
};

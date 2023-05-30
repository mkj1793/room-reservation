import React from 'react';

import styles from './Icon.module.css';

interface IconProps {
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaHidden?: boolean;
  className?: string;
  color?: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  style?: React.CSSProperties;
}

export const IconCogwheels = ({
  ariaLabel = 'cogwheels',
  ariaLabelledby,
  ariaHidden = true,
  className = '',
  color,
  size = 's',
  style = {},
}: React.SVGProps<SVGSVGElement> & IconProps) => (
  <svg
    className={[styles.icon, styles[size], className].filter((e) => e).join(' ')}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledby}
    aria-hidden={ariaHidden}
    color={color}
    style={style}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.02792 2.6583C7.37877 1.78057 8.62123 1.78057 8.97208 2.6583C9.21484 3.26561 9.94884 3.5041 10.5022 3.15547C11.302 2.65159 12.3071 3.38189 12.0751 4.29822C11.9145 4.93223 12.3681 5.55661 13.0207 5.59982C13.9639 5.66226 14.3479 6.84391 13.6215 7.44882C13.1189 7.86737 13.1189 8.63914 13.6215 9.05769C14.3479 9.6626 13.9639 10.8443 13.0207 10.9067C12.3681 10.9499 11.9145 11.5743 12.0751 12.2083C12.3071 13.1246 11.302 13.8549 10.5022 13.351C9.94884 13.0024 9.21484 13.2409 8.97208 13.8482C8.62123 14.7259 7.37877 14.7259 7.02792 13.8482C6.78516 13.2409 6.05116 13.0024 5.4978 13.351C4.69804 13.8549 3.69286 13.1246 3.92494 12.2083C4.08551 11.5743 3.63188 10.9499 2.97927 10.9067C2.03608 10.8443 1.65214 9.6626 2.37849 9.05769C2.88107 8.63914 2.88107 7.86737 2.37849 7.44882C1.65214 6.84391 2.03608 5.66226 2.97927 5.59982C3.63188 5.55661 4.08551 4.93223 3.92494 4.29822C3.69286 3.38189 4.69804 2.65159 5.4978 3.15547C6.05116 3.5041 6.78516 3.26561 7.02792 2.6583ZM9.97303 8.22638C9.97303 9.33095 9.0776 10.2264 7.97303 10.2264C6.86846 10.2264 5.97303 9.33095 5.97303 8.22638C5.97303 7.12181 6.86846 6.22638 7.97303 6.22638C9.0776 6.22638 9.97303 7.12181 9.97303 8.22638Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.1899 11.5486C16.4823 10.8171 17.5177 10.8171 17.8101 11.5486C18.0124 12.0547 18.624 12.2534 19.0852 11.9629C19.7516 11.543 20.5893 12.1516 20.3959 12.9152C20.2621 13.4435 20.6401 13.9638 21.1839 13.9998C21.9699 14.0519 22.2899 15.0366 21.6846 15.5407C21.2658 15.8895 21.2658 16.5326 21.6846 16.8814C22.2899 17.3855 21.9699 18.3702 21.1839 18.4222C20.6401 18.4583 20.2621 18.9786 20.3959 19.5069C20.5893 20.2705 19.7516 20.8791 19.0852 20.4592C18.624 20.1687 18.0124 20.3674 17.8101 20.8735C17.5177 21.605 16.4823 21.605 16.1899 20.8735C15.9876 20.3674 15.376 20.1687 14.9148 20.4592C14.2484 20.8791 13.4107 20.2705 13.6041 19.5069C13.7379 18.9786 13.3599 18.4583 12.8161 18.4222C12.0301 18.3702 11.7101 17.3855 12.3154 16.8814C12.7342 16.5326 12.7342 15.8895 12.3154 15.5407C11.7101 15.0366 12.0301 14.0519 12.8161 13.9998C13.3599 13.9638 13.7379 13.4435 13.6041 12.9152C13.4107 12.1516 14.2484 11.543 14.9148 11.9629C15.376 12.2534 15.9876 12.0547 16.1899 11.5486ZM18.6721 16.211C18.6721 17.1346 17.9234 17.8833 16.9999 17.8833C16.0763 17.8833 15.3276 17.1346 15.3276 16.211C15.3276 15.2875 16.0763 14.5388 16.9999 14.5388C17.9234 14.5388 18.6721 15.2875 18.6721 16.211Z"
      fill="currentColor"
    />
  </svg>
);

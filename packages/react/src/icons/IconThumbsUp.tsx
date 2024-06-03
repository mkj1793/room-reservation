import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconThumbsUp = ({
  ariaLabel = 'thumbs-up',
  ariaLabelledby,
  ariaHidden = true,
  className = '',
  color,
  size = IconSize.Small,
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
      d="M3 9H7C7.55228 9 8 9.44772 8 10V17C8 17.5523 7.55228 18 7 18H3V9ZM20.9998 10.9639C20.9998 9.64632 19.9753 8.57378 18.7167 8.57378H15.3125C15.6374 7.68159 15.818 6.91013 15.818 6.45654C15.818 5.24934 14.9249 4 13.4297 4C11.8408 4 11.4061 5.15862 11.0567 6.08938C9.97739 8.96451 9.00002 8.46056 9.00002 9.42774C9.00002 9.88633 9.3532 10.2846 9.81887 10.2846C9.99805 10.2846 10.1785 10.2231 10.3292 10.0967C12.946 7.90482 12.3054 5.71436 13.4297 5.71436C13.9779 5.71436 14.1817 6.16974 14.1817 6.4569C14.1817 6.72134 13.9228 7.86946 13.3107 9.0138C13.241 9.14402 13.2062 9.28831 13.2062 9.43239C13.2062 9.92955 13.5958 10.2574 14.0244 10.2574H18.7152C19.0737 10.2889 19.3634 10.5924 19.3634 10.9639C19.3634 11.3142 19.0987 11.6078 18.761 11.6321C18.3295 11.6628 17.9988 12.0393 17.9988 12.4872C17.9988 13.0397 18.3871 13.0568 18.3871 13.5197C18.3871 14.4258 17.1929 13.9604 17.1929 15.0251C17.1929 15.4259 17.4108 15.4905 17.4108 15.8198C17.4108 16.6291 16.3959 16.3113 16.3959 17.2713C16.3959 17.4326 16.4338 17.4842 16.4338 17.609C16.4338 17.9823 16.1435 18.2859 15.7871 18.2859H13.9963C13.123 18.2859 12.2571 17.9835 11.5589 17.4355L10.3092 16.4529C10.1621 16.337 9.98973 16.2811 9.81894 16.2811C9.34679 16.2811 8.99975 16.6875 8.99975 17.1397C8.99975 17.4 9.11266 17.6547 9.32688 17.8229L10.577 18.8058C11.5568 19.575 12.7704 20 13.9976 20H15.7884C16.9928 20 17.9824 19.0182 18.0656 17.7785C18.6714 17.3417 19.0484 16.6173 19.0484 15.8202C19.0484 15.7114 19.041 15.6021 19.0266 15.4944C19.6348 15.0604 20.0247 14.3307 20.0247 13.52C20.0247 13.3303 20.0029 13.1435 19.9608 12.9614C20.5873 12.5032 20.9998 11.7925 20.9998 10.9639Z"
      fill="currentColor"
    />
  </svg>
);

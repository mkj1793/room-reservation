import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconWifi = ({
  ariaLabel = 'wifi',
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
      d="M12 17.5338C12.8284 17.5338 13.5 18.2054 13.5 19.0338C13.5 19.8623 12.8284 20.5338 12 20.5338C11.1716 20.5338 10.5 19.8623 10.5 19.0338C10.5 18.2054 11.1716 17.5338 12 17.5338ZM16.1404 15.5229L16.2517 15.6315L14.8375 17.0457C13.209 15.4172 10.6706 15.3288 9.11001 16.7933L9.02274 16.8778L7.60852 15.4636C9.92086 13.1513 13.7088 13.2034 16.1404 15.5229ZM19.2659 12.3713L19.3899 12.4933L17.9757 13.9075C14.728 10.6599 9.48052 10.6266 6.17967 13.8055L6.06399 13.9191L4.64977 12.5048C8.68192 8.4727 15.1894 8.42636 19.2659 12.3713ZM22.3528 9.18261L22.5281 9.35507L21.1139 10.7693C16.1385 5.79383 8.10258 5.74407 3.06592 10.62L2.91421 10.7693L1.5 9.35507C7.24869 3.60638 16.5334 3.54889 22.3528 9.18261Z"
      fill="currentColor"
    />
  </svg>
);

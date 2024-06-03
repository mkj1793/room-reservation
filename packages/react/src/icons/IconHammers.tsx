import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconHammers = ({
  ariaLabel = 'hammers',
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
      d="M7.70276 2L2.71284 6.98991L2 10.5541L3.42569 11.9798L6.13993 9.26559L17.4589 20.5846L19.5975 18.4461L8.27846 7.12705L10.5541 4.85138L7.70276 2Z"
      fill="currentColor"
    />
    <path
      d="M21.2872 6.98993L16.2972 2.00002L13.4459 4.8514L15.8952 7.30076L12.8949 10.3011L15.0334 12.4396L18.0338 9.43929L20.5743 11.9798L22 10.5542L21.2872 6.98993Z"
      fill="currentColor"
    />
    <path d="M11.4692 16.0039L9.33065 13.8653L4.57621 18.6198L6.71474 20.7583L11.4692 16.0039Z" fill="currentColor" />
  </svg>
);

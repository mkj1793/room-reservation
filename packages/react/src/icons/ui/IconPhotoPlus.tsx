import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconPhotoPlus = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M12 2v2H6l.001 9.44c.502.243.928.59 1.51 1.159l.196.194C8.661 15.747 9.083 16 10 16c.86 0 1.284-.222 2.12-1.036l.173-.171C13.589 13.497 14.417 13 16 13c.81 0 1.422.13 2 .43V11h2v11H4V2h8zm4 13c-.86 0-1.284.222-2.12 1.036l-.173.171C12.411 17.503 11.583 18 10 18c-1.5 0-2.322-.446-3.506-1.595L6 15.92V20h12v-4.078l-.042-.04C17.226 15.193 16.803 15 16 15zm-6-9a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2zm9-7v3h3v2h-3v3h-2V6h-3V4h3V1h2z"
        fill="currentColor"
      />
    </g>
  </svg>
);

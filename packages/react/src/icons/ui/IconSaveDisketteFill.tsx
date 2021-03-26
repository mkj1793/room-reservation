import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconSaveDisketteFill = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <rect width="24" height="24" />
      <path
        fill="currentColor"
        d="M19,2 L22,5 L22,21 C22,21.5522847 21.5522847,22 21,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,3 C2,2.44771525 2.44771525,2 3,2 L19,2 Z M19,12 L5,12 L5,20 L19,20 L19,12 Z M17,3 L7,3 L7,10 L17,10 L17,3 Z M15,5 L15,8 L13,8 L13,5 L15,5 Z"
      />
    </g>
  </svg>
);

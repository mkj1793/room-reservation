import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconPersonMale = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
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
        d="M11 16v6h2v-6h2v8H9v-8h2zm3.5-9a3.5 3.5 0 013.498 3.38l.002.12V16h-2v-5.5a1.5 1.5 0 00-1.412-1.497L14.5 9h-5a1.5 1.5 0 00-1.497 1.412L8 10.5V16H6v-5.5a3.5 3.5 0 013.38-3.498L9.5 7h5zM12 0a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z"
        fill="currentColor"
      />
    </g>
  </svg>
);

import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconBell = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
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
        d="M18 17l-.002-.244c-.015-.842-.11-1.334-.333-1.756H6.335c-.223.422-.318.914-.333 1.756L6 17h12zm-5 2h-2a1 1 0 001.993.117L13 19zM12 4a4 4 0 00-3.995 3.8L8 8v3c0 .848-.096 1.464-.314 2.001h8.628c-.194-.478-.291-1.017-.31-1.727L16 11V8a4 4 0 00-4-4zm-6.893 9.26l.235-.279c.486-.564.638-.885.656-1.78L6 11V8a6 6 0 0111.996-.225L18 8l.002 3.2c.017.827.147 1.164.55 1.655l.341.405c.732.906 1.067 1.805 1.104 3.427L20 17v2h-5a3 3 0 01-5.995.176L9 19H4v-2c0-1.822.33-2.778 1.107-3.74z"
        fill="currentColor"
      />
    </g>
  </svg>
);

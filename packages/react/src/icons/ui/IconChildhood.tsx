import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconChildhood = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    {...rest}
    role="img"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="m15.9 12v6h6v-6zm-6.88527-4c1.65687 0 2.99997-1.34315 2.99997-3s-1.3431-3-2.99997-3c-1.65685 0-3 1.34315-3 3s1.34315 3 3 3zm-3.15463 8.75-3.03 5.25h6.07zm8.1546-11.75c0 2.76142-2.2385 5-4.99997 5-2.76142 0-5-2.23858-5-5s2.23858-5 5-5c2.76147 0 4.99997 2.23858 4.99997 5zm-.1147 6c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1v8c0 .5523-.4477 1-1 1h-8c-.5523 0-1-.4477-1-1zm-7.1699 3.25c-.3849-.6667-1.3451-.6667-1.73 0l-4.76 8.25c-.384901.6667.090317 1.5.86012 1.5h9.52978c.7698 0 1.2449-.8333.86-1.5z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
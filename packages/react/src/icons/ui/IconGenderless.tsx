import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconGenderless = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    {...rest}
    role="img"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
      <path d="m11.0195 18v4h2v-4h2v6h-5.99997v-6zm2.0477-11c1.9236 0 3.1256 1.17451 3.5885 3.0048l1.3443 5.9952h-2l-1.2833-5.5048c-.2472-.97762-.7094-1.4576-1.5472-1.49307l-.1023-.00213h-2.0953c-.9028 0-1.39246.47848-1.64955 1.4952l-1.32235 5.5048h-2l1.38338-5.9952c.45127-1.78453 1.60521-2.94566 3.44562-3.00261l.1429-.00219zm-1.0477-7c1.6569 0 3 1.34315 3 3s-1.3431 3-3 3c-1.6568 0-2.99997-1.34315-2.99997-3s1.34317-3 2.99997-3zm0 2c-.5523 0-1 .44772-1 1s.4477 1 1 1 1-.44772 1-1-.4477-1-1-1z" />
      <path d="m11 16v6h2v-6h2v8h-5.99995v-8zm3.5-9c1.8928 0 3.4346 1.50239 3.498 3.3797l.002.1203-.002 6.5h-1.998v-6.5c0-.79884-.6244-1.45183-1.4118-1.49745l-.0882-.00255h-4.99995c-.79884 0-1.45183.62446-1.49746 1.4119l-.00254.0881v6.5h-2v-6.5c0-1.89273 1.50239-3.43455 3.37967-3.49797l.12033-.00203zm-2.5-7c1.6569 0 3 1.34315 3 3s-1.3431 3-3 3c-1.6568 0-2.99995-1.34315-2.99995-3s1.34315-3 2.99995-3zm0 2c-.5522 0-1 .44772-1 1s.4478 1 1 1c.5523 0 1-.44772 1-1s-.4477-1-1-1z" />
    </g>
  </svg>
);
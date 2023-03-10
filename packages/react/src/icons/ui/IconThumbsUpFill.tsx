import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconThumbsUpFill = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
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
        d="M13.4296946,4 C14.9248873,4 15.8180492,5.24934085 15.8180492,6.45653721 C15.8180492,6.8688937 15.6687291,7.5439536 15.3974929,8.33359424 L15.3124919,8.57377573 L18.716733,8.57377573 C19.9753411,8.57377573 20.9997492,9.64632252 20.9997492,10.9638819 C20.9997492,11.7924903 20.5872584,12.5032366 19.9608314,12.9613979 C20.0029124,13.1435491 20.0247504,13.3303076 20.0247504,13.5199948 C20.0247504,14.3307447 19.6347592,15.060421 19.0265914,15.4943687 C19.0409742,15.6020526 19.0484293,15.7113791 19.0484293,15.8201693 C19.0484293,16.6173481 18.6713926,17.3416661 18.0656113,17.7784717 C17.9860478,18.9642708 17.0771376,19.9141361 15.9442124,19.9944915 L15.7883909,20 L13.9976363,20 C12.8580519,20 11.7302249,19.6335297 10.7904225,18.9653581 L10.5769629,18.8058385 L9.32687785,17.8229378 C9.14325876,17.678748 9.03407582,17.4709771 9.00662803,17.2506604 L9,17.1798859 L9,9.48721313 L9.00274918,9.486 L9,9.4277415 C9,9.15545465 9.07748504,8.99976466 9.21287628,8.8524505 L9.31150483,8.75429431 L9.62472908,8.47299918 C9.672215,8.42860981 9.72181136,8.38047742 9.77330381,8.3274144 L9.93325507,8.15224584 C10.2361416,7.79963045 10.5899004,7.2619383 10.9588681,6.3415806 L11.1937974,5.73237236 L11.2958342,5.49052345 C11.6373077,4.72615106 12.1717829,4 13.4296946,4 Z M7,9 C7.55228475,9 8,9.44771525 8,10 L8,17 C8,17.5522847 7.55228475,18 7,18 L3,18 L3,9 L7,9 Z"
      />
    </g>
  </svg>
);
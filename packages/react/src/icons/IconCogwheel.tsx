import React from 'react';
import styles from '../../templates/Icon.module.css';

interface IconProps {
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaHidden?: boolean;
  className?: string,
  color?: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  style?: React.CSSProperties;
}

export const IconCogwheel = ({
  ariaLabel = 'cogwheel',
  ariaLabelledby,
  ariaHidden = true,
  className = '',
  color,
  size = 's',
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
    <path fillRule="evenodd" clipRule="evenodd" d="M11.7266 2C12.6913 2 13.5095 2.5019 13.8733 3.33527L13.9327 3.48574L14.3045 4.4876C14.346 4.6546 14.468 4.77746 14.634 4.8192C14.8176 4.86543 14.976 4.8651 15.1395 4.80647L15.2384 4.76421L16.065 4.46872C16.8962 4.05041 17.8272 4.08789 18.4732 4.60849C19.3374 5.22981 19.6565 6.285 19.3292 7.28679L19.2721 7.44445L18.8443 8.36691C18.7531 8.55053 18.7531 8.72335 18.8443 8.90697C18.9143 9.04778 19.0064 9.13872 19.1639 9.23135L19.2667 9.28755L20.3601 9.65443C21.1858 9.93145 21.8306 10.6186 21.9615 11.4098C22.1514 12.4293 21.6246 13.4098 20.6828 13.8564L20.5454 13.9165L19.3116 14.3502C19.1457 14.392 19.0236 14.5148 18.9821 14.6818C18.9362 14.8667 18.9365 15.0262 18.9889 15.1768L19.0266 15.2662L19.4518 16.1223C19.8414 16.9066 19.8331 17.7793 19.4043 18.4211L19.313 18.5463C18.6755 19.4445 17.6065 19.7885 16.653 19.4179L16.5109 19.3569L15.5183 18.981C15.3358 18.8892 15.1642 18.8892 14.9817 18.981C14.8112 19.0668 14.6942 19.1784 14.6347 19.3142L14.6059 19.3987L14.2966 20.4548C13.985 21.2703 13.2955 21.8517 12.4319 21.9758L12.268 21.9936L12.0911 22C11.2055 22 10.3797 21.4615 10.0067 20.6586L9.9457 20.5143L9.57393 19.5124C9.53245 19.3454 9.4104 19.2225 9.24449 19.1808C9.06079 19.1346 8.90239 19.1349 8.74613 19.1907L7.81344 19.5924C6.98225 20.0107 6.05123 19.9733 5.40523 19.4527C4.54104 18.8313 4.22191 17.7761 4.54742 16.7785L4.60419 16.6215L5.0341 15.6331C5.12531 15.4495 5.12531 15.2766 5.0341 15.093C4.96416 14.9522 4.87207 14.8613 4.71451 14.7687L4.61177 14.7125L3.70054 14.4067C2.87795 14.1307 2.23441 13.446 2.038 12.588C1.85054 11.5187 2.36945 10.5322 3.31247 10.0843L3.45004 10.024L4.44538 9.64978C4.61129 9.60803 4.73334 9.48517 4.77482 9.31818C4.82074 9.13328 4.82041 8.97384 4.76217 8.80933L4.72018 8.70978L4.43018 7.88459C4.01099 7.11104 4.04841 6.16936 4.56548 5.45374C5.20292 4.55547 6.27192 4.21146 7.23467 4.58588L8.36017 5.08019C8.54259 5.172 8.71429 5.172 8.89671 5.08019C9.06729 4.99434 9.18428 4.88278 9.24376 4.7469L9.27251 4.66246L9.58004 3.61124C9.89314 2.72881 10.623 2.13982 11.5385 2.01784L11.7266 2ZM11.7289 3.75C11.4993 3.75 11.2855 3.87978 11.1834 4.11109L11.1505 4.20253L10.8471 5.24142C10.6445 5.85366 10.1755 6.38055 9.56762 6.65163C9.04679 6.82651 8.47556 6.84595 7.92391 6.70173L7.7181 6.63997L6.78225 6.16619C6.47757 6.06388 6.19907 6.15587 6.10211 6.26454L6.07673 6.30114L6.01392 6.37695C5.85166 6.49954 5.78563 6.72591 5.86103 6.98237L5.89602 7.0798L6.38205 8.05951C6.66227 8.69464 6.69683 9.3562 6.44229 9.93313C6.20375 10.4738 5.80169 10.9061 5.28141 11.1812L5.12182 11.259L4.19764 11.6302C3.92495 11.7087 3.75 11.9934 3.75 12.2731C3.75 12.4712 3.85393 12.6931 4.10015 12.815L4.19923 12.8557L5.23053 13.1614C5.8383 13.3655 6.36134 13.8379 6.623 14.431C6.86434 14.9779 6.88627 15.5816 6.68571 16.1455L6.61887 16.3134L6.14224 17.2728C6.02379 17.5512 6.09826 17.8263 6.27772 18.0071C6.45312 18.1838 6.65198 18.2596 6.90782 18.1367L6.99525 18.0882L7.97522 17.5954C8.30859 17.4611 8.63736 17.398 9.01825 17.398C9.24252 17.398 9.4143 17.4305 9.80857 17.5304C10.3337 17.7067 10.7786 18.1405 11.07 18.713L11.1456 18.8724L11.5097 19.8508C11.5707 20.0353 11.6716 20.1408 11.8097 20.1977C11.9103 20.2392 12.0032 20.25 12.1506 20.25C12.3802 20.25 12.594 20.1202 12.6961 19.8889L12.729 19.7975L13.0325 18.7586C13.2351 18.1463 13.704 17.6194 14.2927 17.3559C14.8357 17.1128 15.435 17.0907 15.9873 17.2892L16.1515 17.3554L17.1252 17.7848C17.3214 17.8836 17.4921 17.8569 17.6875 17.7388L17.8427 17.6359L17.8861 17.5745C18.0199 17.3631 18.0567 17.1663 17.9687 16.9524L17.4372 15.8798C17.1825 15.3024 17.1308 14.7032 17.3091 14.1801L17.3696 14.0255C17.5446 13.4966 17.9752 13.0483 18.5444 12.7545L18.7029 12.6782L19.8372 12.2576C20.1345 12.1292 20.25 11.9388 20.25 11.6663C20.25 11.474 20.157 11.2652 19.9429 11.1722L18.7092 10.7779C18.1015 10.5738 17.5784 10.1014 17.3168 9.50837C17.0754 8.96138 17.0535 8.35774 17.2506 7.8013L17.3163 7.6359L17.7373 6.66649C17.8557 6.38807 17.7813 6.113 17.6018 5.93223C17.4264 5.75553 17.2275 5.67975 16.9717 5.80266L16.8843 5.85112L15.9117 6.34073C15.3385 6.59735 14.7437 6.64945 14.2244 6.46979L14.071 6.40891C13.5459 6.23259 13.1009 5.7988 12.8108 5.22971L12.7356 5.07123L12.3814 4.17732C12.2335 3.87935 11.951 3.75 11.7289 3.75ZM12 8C14.2005 8 16 9.79949 16 12C16 14.2005 14.2005 16 12 16C9.79949 16 8 14.2005 8 12C8 9.79949 9.79949 8 12 8ZM12 9.75C10.763 9.75 9.75 10.763 9.75 12C9.75 13.237 10.763 14.25 12 14.25C13.237 14.25 14.25 13.237 14.25 12C14.25 10.763 13.237 9.75 12 9.75Z" fill="currentColor"></path>
  </svg>
);
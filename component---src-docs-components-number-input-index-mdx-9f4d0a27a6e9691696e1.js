(self.webpackChunksite=self.webpackChunksite||[]).push([[4929,198],{74833:function(e,t,n){var a=n(56127),r=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(r,""):e}},56127:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},66726:function(e,t,n){var a=n(11611),r=n(57708),i=n(91936),l=Math.max,o=Math.min;e.exports=function(e,t,n){var s,u,c,p,d,h,_=0,m=!1,b=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function x(t){var n=s,a=u;return s=u=void 0,_=t,p=e.apply(a,n)}function f(e){var n=e-h;return void 0===h||n>=t||n<0||b&&e-_>=c}function g(){var e=r();if(f(e))return y(e);d=setTimeout(g,function(e){var n=t-(e-h);return b?o(n,c-(e-_)):n}(e))}function y(e){return d=void 0,v&&s?x(e):(s=u=void 0,p)}function E(){var e=r(),n=f(e);if(s=arguments,u=this,h=e,n){if(void 0===d)return function(e){return _=e,d=setTimeout(g,t),m?x(e):p}(h);if(b)return clearTimeout(d),d=setTimeout(g,t),x(h)}return void 0===d&&(d=setTimeout(g,t)),p}return t=i(t)||0,a(n)&&(m=!!n.leading,c=(b="maxWait"in n)?l(i(n.maxWait)||0,t):c,v="trailing"in n?!!n.trailing:v),E.cancel=function(){void 0!==d&&clearTimeout(d),_=0,s=h=u=d=void 0},E.flush=function(){return void 0===d?p:y(r())},E}},57708:function(e,t,n){var a=n(77400);e.exports=function(){return a.Date.now()}},19783:function(e,t,n){var a=n(66726),r=n(11611);e.exports=function(e,t,n){var i=!0,l=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return r(n)&&(i="leading"in n?!!n.leading:i,l="trailing"in n?!!n.trailing:l),a(e,t,{leading:i,maxWait:t,trailing:l})}},91936:function(e,t,n){var a=n(74833),r=n(11611),i=n(55193),l=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=o.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):l.test(e)?NaN:+e}},92771:function(e,t,n){"use strict";n.d(t,{I:function(){return i}});var a=n(67294),r=n(32719),i=function(e){var t=e.ariaLabel,n=void 0===t?"minus":t,i=e.ariaLabelledby,l=e.ariaHidden,o=void 0===l||l,s=e.className,u=void 0===s?"":s,c=e.color,p=e.size,d=void 0===p?"s":p,h=e.style,_=void 0===h?{}:h;return a.createElement("svg",{className:[r.s.icon,r.s[d],u].filter((function(e){return e})).join(" "),role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-label":n,"aria-labelledby":i,"aria-hidden":o,color:c,style:_},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 11H18V13H6V11Z",fill:"currentColor"}))}},50776:function(e,t,n){"use strict";n.d(t,{I:function(){return i}});var a=n(67294),r=n(32719),i=function(e){var t=e.ariaLabel,n=void 0===t?"plus":t,i=e.ariaLabelledby,l=e.ariaHidden,o=void 0===l||l,s=e.className,u=void 0===s?"":s,c=e.color,p=e.size,d=void 0===p?"s":p,h=e.style,_=void 0===h?{}:h;return a.createElement("svg",{className:[r.s.icon,r.s[d],u].filter((function(e){return e})).join(" "),role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-label":n,"aria-labelledby":i,"aria-hidden":o,color:c,style:_},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 6V11H18V13H13V18H11V13H6V11H11V6H13Z",fill:"currentColor"}))}},27196:function(e,t,n){"use strict";n.d(t,{I:function(){return u},t:function(){return s}});var a=n(77897),r=n(67294),i=n(7444),l=n(61655),o=n(40774),s={root:"TextInput-module_root__2CMNr text-input_hds-text-input__2LODq",inputWrapper:"TextInput-module_inputWrapper__3Rvel text-input_hds-text-input__input-wrapper__1OqYG",input:"TextInput-module_input__1BlHi text-input_hds-text-input__input__GJm5C",hasButton:"TextInput-module_hasButton__2KCM1",hasClearButton:"TextInput-module_hasClearButton__3-tBe text-input_hds-text-input__input-clear__17qr1",clearButton:"TextInput-module_clearButton__bfCLI text-input_hds-text-input__button-clear__2ED7z",errorText:"TextInput-module_errorText__3pizm text-input_hds-text-input__error-text__1GLYk",helperText:"TextInput-module_helperText__2dLR6 text-input_hds-text-input__helper-text__3V2KM",invalidText:"TextInput-module_invalidText__1w4sm text-input_hds-text-input__helper-text__3V2KM",successText:"TextInput-module_successText__2NMCP text-input_hds-text-input__success-text__3EOiy",infoText:"TextInput-module_infoText__zHOGs text-input_hds-text-input__info-text__3bqzy",invalid:"TextInput-module_invalid__2iYo2 text-input_hds-text-input--invalid__1UfKC",success:"TextInput-module_success__1kDOm text-input_hds-text-input--success__3dm2J",readOnly:"TextInput-module_readOnly__j615N undefined",buttonWrapper:"TextInput-module_buttonWrapper___filA text-input_hds-text-input__buttons__1RMzT",button:"TextInput-module_button__1ySMX text-input_hds-text-input__button__1Fh0I"};(0,i.s)("@keyframes text-input_fadeIn__2IDZ8{0%{opacity:0}to{opacity:1}}.text-input_hds-text-input__2LODq{--border-width:2px;--outline-width:3px;--outline-offset-readonly:4px;--input-height:56px;--textarea-height:149px;--icon-size:var(--spacing-m);--helper-background-color-invalid:var(--color-error-light);--helper-background-color-success:var(--color-success-light);--helper-background-color-info:var(--color-info-light);--helper-color-default:var(--color-black-60);--helper-color-invalid:var(--color-black);--helper-color-success:var(--color-black);--helper-color-info:var(--color-black);--helper-color-info-icon:var(--color-coat-of-arms);--icon-color-invalid:var(--color-error);--icon-color-info:var(--color-info);--icon-color-success:var(--color-success);--input-background-default:var(--color-white);--input-background-disabled:var(--color-black-10);--input-border-color-default:var(--color-black-50);--input-border-color-hover:var(--color-black-90);--input-border-color-focus:var(--color-black-90);--input-border-color-invalid:var(--color-error);--input-border-color-disabled:var(--color-black-10);--input-border-color-success:var(--color-success);--input-color-default:var(--color-black-90);--input-color-disabled:var(--color-black-40);--label-color-default:var(--color-black-90);--label-color-invalid:var(--color-black-90);--placeholder-color:var(--color-black-60)}.text-input_hds-text-input__2LODq .text-input_hds-text-input__input__GJm5C{-webkit-appearance:none;background-color:var(--input-background-default);border:var(--border-width) solid var(--input-border-color-default);border-radius:0;box-sizing:border-box;color:var(--input-color-default);font-family:inherit;font-size:1.125em;height:var(--input-height);line-height:normal;margin:0;padding:0 var(--spacing-s);width:100%;will-change:transform,box-shadow}.text-input_hds-text-input__2LODq:not([data-hds-textinput-filled]) .text-input_hds-text-input__button-clear__2ED7z,.text-input_hds-text-input__input-clear__17qr1::-webkit-search-cancel-button{display:none}.text-input_hds-text-input__2LODq .text-input_hds-text-input__button-clear__2ED7z>*{pointer-events:none}.text-input_hds-text-input__2LODq .text-input_hds-text-input__input__GJm5C:hover{border-color:var(--input-border-color-hover);transition:border-color 85ms ease-out}.text-input_hds-text-input__input-wrapper__1OqYG:focus-within .text-input_hds-text-input__input__GJm5C{border-color:var(--input-border-color-focus);outline:none}.text-input_hds-text-input__2LODq.text-input_hds-text-input--invalid__1UfKC .text-input_hds-text-input__input__GJm5C{border-color:var(--input-border-color-invalid)}.text-input_hds-text-input__2LODq.text-input_hds-text-input--success__3dm2J .text-input_hds-text-input__input__GJm5C{border-color:var(--input-border-color-success)}.text-input_hds-text-input__input-wrapper__1OqYG:focus-within .text-input_hds-text-input__input__GJm5C:not([readonly]){box-shadow:0 0 0 var(--outline-width) var(--color-focus-outline);transform:translateZ(0);transition:85ms ease-out;transition-property:box-shadow,transform}.text-input_hds-text-input__label__15F2V{color:var(--label-color-default);display:block;font-size:var(--fontsize-body-m);font-weight:500;margin-bottom:var(--spacing-3-xs)}.text-input_hds-text-input--invalid__1UfKC .text-input_hds-text-input__label__15F2V{color:var(--label-color-invalid);transition:color 85ms linear}.text-input_hds-text-input__required__z3Hm0{color:var(--color-black-90);display:inline-block;font-size:var(--fontsize-body-xl);line-height:1;margin-left:var(--spacing-2-xs);transform:translateY(var(--spacing-3-xs))}.text-input_hds-text-input__input-wrapper__1OqYG{display:flex;position:relative}.text-input_hds-text-input__2LODq textarea.text-input_hds-text-input__input__GJm5C{font-family:inherit;height:var(--textarea-height);margin:0;min-height:var(--input-height);overflow:auto;padding:var(--spacing-s);resize:vertical}.text-input_hds-text-input__2LODq .text-input_hds-text-input__input__GJm5C::-ms-reveal{display:none}.text-input_hds-text-input__2LODq .text-input_hds-text-input__input__GJm5C::-moz-placeholder{color:var(--placeholder-color);opacity:1}.text-input_hds-text-input__2LODq .text-input_hds-text-input__input__GJm5C::placeholder{color:var(--placeholder-color);opacity:1}.text-input_hds-text-input__helper-text__3V2KM{color:var(--helper-color-default);display:block;font-size:var(--fontsize-body-m);line-height:var(--lineheight-l);margin-top:var(--spacing-3-xs);white-space:pre-line}.text-input_hds-text-input__error-text__1GLYk{background-color:var(--helper-background-color-invalid);border-left:8px solid var(--color-error);color:var(--helper-color-invalid);display:flex;font-size:var(--fontsize-body-m);line-height:var(--lineheight-l);margin-top:var(--spacing-2-xs);padding:var(--spacing-2-xs);white-space:pre-line}.text-input_hds-text-input__error-text__1GLYk:not(:last-child){margin-bottom:var(--spacing-2-xs)}.text-input_hds-text-input__error-text__1GLYk:before{animation:text-input_fadeIn__2IDZ8 85ms ease-out;background:var(--color-error);content:\"\";display:inline-block;flex-shrink:0;height:var(--icon-size);margin-right:var(--spacing-2-xs);-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.175 3.456c.349-.586 1.223-.607 1.61-.063l.04.063 9.052 15.21c.343.577-.072 1.285-.753 1.332l-.072.002H2.948c-.7 0-1.15-.689-.858-1.273l.033-.06 9.052-15.21zM13 16v2h-2v-2h2zm0-7.5v6h-2v-6h2z' fill='currentColor'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.175 3.456c.349-.586 1.223-.607 1.61-.063l.04.063 9.052 15.21c.343.577-.072 1.285-.753 1.332l-.072.002H2.948c-.7 0-1.15-.689-.858-1.273l.033-.06 9.052-15.21zM13 16v2h-2v-2h2zm0-7.5v6h-2v-6h2z' fill='currentColor'/%3E%3C/svg%3E\");pointer-events:none;width:var(--icon-size)}.text-input_hds-text-input__success-text__3EOiy{background-color:var(--helper-background-color-success);border-left:8px solid var(--color-success);color:var(--helper-color-success);display:flex;font-size:var(--fontsize-body-m);line-height:var(--lineheight-l);margin-top:var(--spacing-2-xs);padding:var(--spacing-2-xs);position:relative;white-space:pre-wrap}.text-input_hds-text-input__success-text__3EOiy:not(:last-child){margin-bottom:var(--spacing-2-xs)}.text-input_hds-text-input__success-text__3EOiy:before{animation:text-input_fadeIn__2IDZ8 85ms ease-out;background:var(--color-success);content:\"\";display:inline-block;flex-shrink:0;height:var(--icon-size);margin-right:var(--spacing-2-xs);-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='currentColor' d='M12 3a9 9 0 100 18 9 9 0 000-18zm4.5 5L18 9.5 10.5 17 6 12.5 7.5 11l3 3 6-6z'/%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='currentColor' d='M12 3a9 9 0 100 18 9 9 0 000-18zm4.5 5L18 9.5 10.5 17 6 12.5 7.5 11l3 3 6-6z'/%3E%3C/g%3E%3C/svg%3E\");pointer-events:none;width:var(--icon-size)}.text-input_hds-text-input__info-text__3bqzy{background-color:var(--helper-background-color-info);border-left:8px solid var(--color-info);color:var(--helper-color-info);display:flex;font-size:var(--fontsize-body-m);line-height:var(--lineheight-l);margin-top:var(--spacing-2-xs);padding:var(--spacing-2-xs);position:relative}.text-input_hds-text-input__info-text__3bqzy:not(:last-child){margin-bottom:var(--spacing-2-xs)}.text-input_hds-text-input__info-text__3bqzy:before{animation:text-input_fadeIn__2IDZ8 85ms ease-out;background:var(--color-info);content:\"\";display:inline-block;flex-shrink:0;height:var(--icon-size);margin-right:var(--spacing-2-xs);-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='currentColor' d='M12 3a9 9 0 110 18 9 9 0 010-18zm1 13v2h-2v-2h2zm0-10v8h-2V6h2z'/%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='currentColor' d='M12 3a9 9 0 110 18 9 9 0 010-18zm1 13v2h-2v-2h2zm0-10v8h-2V6h2z'/%3E%3C/g%3E%3C/svg%3E\");pointer-events:none;width:var(--icon-size)}.text-input_hds-text-input__2LODq .text-input_hds-text-input__input__GJm5C[disabled]{background-color:var(--input-background-disabled);border-color:var(--input-border-color-disabled);color:var(--input-color-disabled);cursor:not-allowed}.text-input_hds-text-input__2LODq .text-input_hds-text-input__input__GJm5C[readonly]{background-color:transparent;border:0;color:var(--input-color-default);outline-offset:var(--outline-offset-readonly);padding:0;-webkit-text-fill-color:var(--input-color-default);transform:translateZ(0);transition:85ms ease-out;transition-property:outline,transform}.text-input_hds-text-input__input-wrapper__1OqYG:focus-within input.text-input_hds-text-input__input__GJm5C[readonly]{height:calc(var(--input-height) - 2 * var(--outline-offset-readonly));margin:var(--outline-offset-readonly) 0;outline:var(--color-focus-outline) solid var(--outline-width)}.text-input_hds-text-input__input-wrapper__1OqYG:focus-within textarea.text-input_hds-text-input__input__GJm5C[readonly]{outline:var(--color-focus-outline) solid var(--outline-width)}.text-input_hds-text-input__buttons__1RMzT{align-items:center;bottom:0;display:flex;font-size:1rem;justify-content:center;margin-right:calc(var(--spacing-s) - var(--spacing-xs) / 2);position:absolute;right:0;top:0}.text-input_hds-text-input__button__1Fh0I{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;cursor:pointer;display:flex;font:inherit;outline:none;padding:var(--spacing-xs) calc(var(--spacing-xs) / 2)}.text-input_hds-text-input__button__1Fh0I:focus{outline:var(--outline-width) solid var(--color-focus-outline)}.TextInput-module_root__2CMNr{position:relative}.TextInput-module_input__1BlHi.TextInput-module_hasButton__2KCM1,.TextInput-module_input__1BlHi.TextInput-module_hasClearButton__3-tBe{padding-right:calc(2 * var(--spacing-s) + 1.5rem)}.TextInput-module_input__1BlHi.TextInput-module_hasButton__2KCM1.TextInput-module_hasClearButton__3-tBe{padding-right:calc(4 * var(--spacing-s) + 1.5rem)}.TextInput-module_button__1ySMX:disabled{cursor:not-allowed}.TextInput-module_button__1ySMX:focus{outline:var(--outline-width) solid var(--color-focus-outline)}");var u=r.forwardRef((function(e,t){var n=e.children,i=e.className,u=void 0===i?"":i,c=e.errorText,p=e.helperText,d=e.hideLabel,h=void 0!==d&&d,_=e.id,m=e.invalid,b=void 0!==m&&m,v=e.isAriaLabelledBy,x=void 0!==v&&v,f=e.label,g=e.labelId,y=e.onBlur,E=e.required,w=void 0!==E&&E,T=e.style,k=e.successText,I=e.infoText,L=e.tooltipLabel,N=e.tooltipText,C=e.tooltipButtonLabel,z=(0,a._)(e,["children","className","errorText","helperText","hideLabel","id","invalid","isAriaLabelledBy","label","labelId","onBlur","required","style","successText","infoText","tooltipLabel","tooltipText","tooltipButtonLabel"]),B={className:(0,l.c)(s.root,b&&s.invalid,k&&s.success,u),onBlur:y,style:T};return r.createElement("div",Object.assign({},B,z,{ref:t}),f&&r.createElement(o.F,{id:g,inputId:_,isAriaLabelledBy:x,hidden:h,label:f,required:w,tooltipLabel:L,tooltipButtonLabel:C,tooltipText:N}),r.createElement("div",{className:(0,l.c)(s.inputWrapper)},n),c&&r.createElement("div",{className:s.errorText,id:"".concat(_,"-error")},c),k&&r.createElement("div",{className:s.successText,id:"".concat(_,"-success")},k),I&&r.createElement("div",{className:s.infoText,id:"".concat(_,"-info")},I),p&&r.createElement("div",{className:s.helperText,id:"".concat(_,"-helper")},p))}))},41031:function(e,t,n){"use strict";n.d(t,{N:function(){return v}});var a=n(19783),r=n.n(a),i=n(70885),l=n(77897),o=n(67294),s=n(39440),u=(n(7568),n(7444)),c=n(27196),p=n(61655),d=n(88597),h=n(91809),_=n(92771),m=n(50776),b="NumberInput-module_button__2Shu7";(0,u.s)(".NumberInput-module_numberInputContainer__hKNPp{width:100%}.NumberInput-module_numberInputContainer__hKNPp input::-webkit-inner-spin-button,.NumberInput-module_numberInputContainer__hKNPp input::-webkit-outer-spin-button{appearance:none!important;height:auto;margin:0!important}.NumberInput-module_numberInputContainer__hKNPp input[type=number]{appearance:textfield!important}.NumberInput-module_numberInputWithSteps__3q7N7{padding-left:68px!important;padding-right:68px!important;text-align:center}.NumberInput-module_minusButtonWrapper__3PHN9{border-right:1px solid #ccc}.NumberInput-module_minusButtonWrapper__3PHN9,.NumberInput-module_minusButtonWrapperWithoutBorder__2g42V{align-items:center;bottom:0;display:flex;font-size:1rem;justify-content:center;margin:2px;position:absolute;top:0;width:52px;z-index:1;left:0}.NumberInput-module_plusButtonWrapper__Wwq5t{border-left:1px solid #ccc}.NumberInput-module_plusButtonWrapper__Wwq5t,.NumberInput-module_plusButtonWrapperWithoutBorder__2xb6t{align-items:center;bottom:0;display:flex;font-size:1rem;justify-content:center;margin:2px;position:absolute;top:0;width:52px;z-index:1;right:0}.NumberInput-module_button__2Shu7{align-items:center;appearance:none;background:transparent;border:0;cursor:pointer;display:flex;font-size:1rem;height:100%;justify-content:center;overflow:hidden;padding:0;width:100%}.NumberInput-module_button__2Shu7:disabled{cursor:not-allowed}.NumberInput-module_button__2Shu7:focus{outline:3px solid var(--color-focus-outline);outline-offset:-5px}");var v=o.forwardRef((function(e,t){var n,a,u=e.className,v=void 0===u?"":u,x=e.disabled,f=void 0!==x&&x,g=e.defaultValue,y=e.errorText,E=e.helperText,w=e.hideLabel,T=e.invalid,k=e.id,I=e.label,L=e.max,N=e.min,C=e.minusStepButtonAriaLabel,z=e.onChange,B=void 0===z?function(){return null}:z,S=e.plusStepButtonAriaLabel,O=e.required,q=e.step,H=e.style,D=e.successText,M=e.infoText,W=e.tooltipLabel,P=e.tooltipText,V=e.tooltipButtonLabel,A=e.type,Z=void 0===A?"number":A,G=e.unit,j=(0,l._)(e,["className","disabled","defaultValue","errorText","helperText","hideLabel","invalid","id","label","max","min","minusStepButtonAriaLabel","onChange","plusStepButtonAriaLabel","required","step","style","successText","infoText","tooltipLabel","tooltipText","tooltipButtonLabel","type","unit"]),J={className:v,errorText:y,helperText:E,hideLabel:w,id:k,invalid:T,label:(n=I,a=G,!n&&a?"(".concat(a,")"):n&&a?"".concat(n," (").concat(a,")"):n),required:O,style:H,successText:D,infoText:M,tooltipLabel:W,tooltipText:P,tooltipButtonLabel:V,labelId:q?"".concat(k,"-label"):void 0},Y=(0,o.useRef)(null),K=(0,o.useState)(null),R=(0,i.Z)(K,2),U=R[0],F=R[1],X=function(){F(String(Y.current.value))};!function(e){var t=!1,n=r()((function(){t=!1}),arguments.length>1&&void 0!==arguments[1]?arguments[1]:200);(0,o.useEffect)((function(){var a=function(e){t&&e.preventDefault(),t=!0,n()};return e.current&&e.current.addEventListener("wheel",a,{passive:!1}),function(){e.current&&e.current.removeEventListener("wheel",a)}}),[e])}(Y),(0,o.useEffect)((function(){t&&(0,h.m)(t,Y)}),[Y,t]);var $=function(){Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set.call(Y.current,Y.current.value);var e=new Event("input",{bubbles:!0});Y.current.dispatchEvent(e)},Q=q?function(e){null!==U&&F(null),B(e)}:B,ee=(0,d.c)(k,E,y,D,M);return o.createElement(c.I,Object.assign({},J),o.createElement("div",Object.assign({className:"NumberInput-module_numberInputContainer__hKNPp"},q&&{role:"group","aria-labelledby":J.labelId}),o.createElement("input",Object.assign({className:(0,p.c)(c.t.input,q?"NumberInput-module_numberInputWithSteps__3q7N7":""),defaultValue:g,disabled:f,id:k,max:L,min:N,step:q,onChange:Q,ref:Y,required:O,type:Z,"aria-describedby":ee},j)),q&&o.createElement(o.Fragment,null,o.createElement("div",{className:f?"NumberInput-module_minusButtonWrapperWithoutBorder__2g42V":"NumberInput-module_minusButtonWrapper__3PHN9"},o.createElement("button",{className:b,disabled:f,type:"button",onClick:function(e){e.preventDefault(),Y.current.stepDown(),$(),X()},"aria-label":C||"Decrease by one"},o.createElement(_.I,{"aria-hidden":"true"}))),o.createElement("div",{className:f?"NumberInput-module_plusButtonWrapperWithoutBorder__2xb6t":"NumberInput-module_plusButtonWrapper__Wwq5t"},o.createElement("button",{className:b,disabled:f,type:"button",onClick:function(e){e.preventDefault(),Y.current.stepUp(),$(),X()},"aria-label":S||"Increase by one"},o.createElement(m.I,{"aria-hidden":"true"}))),null!==U&&o.createElement(s.T,null,o.createElement("span",{"aria-live":"assertive"},U)))))}))},40008:function(e,t,n){"use strict";n.d(t,{S:function(){return u}});var a=n(77897),r=n(67294),i=(n(7568),n(7444)),l=n(61655),o={statusLabel:"StatusLabel-module_statusLabel__3R2J2 status-label_hds-status-label__1L8YI",statusLabelWithIcon:"StatusLabel-module_statusLabelWithIcon__5lKVk status-label_hds-status-label--with-icon__3bHf6",statusLabelIcon:"StatusLabel-module_statusLabelIcon__2SAou status-label_hds-status-label-icon__3K58a",info:"StatusLabel-module_info__3YrAe status-label_hds-status-label--info__J28-H",success:"StatusLabel-module_success__2BfdX status-label_hds-status-label--success__3jiST",alert:"StatusLabel-module_alert__2VR8r status-label_hds-status-label--alert__1ecsX",error:"StatusLabel-module_error__zNgn8 status-label_hds-status-label--error__2EYi4"};(0,i.s)(".status-label_hds-status-label__1L8YI{--status-label-background:var(--color-black-10);--status-label-color:var(--color-black-90);--status-label-height:32px;background-color:var(--status-label-background);border-radius:20px;color:var(--status-label-color);display:inline-block;font-size:var(--fontsize-body-s);line-height:var(--status-label-height);min-height:var(--status-label-height);padding:0 var(--spacing-2-xs);vertical-align:middle}.status-label_hds-status-label--with-icon__3bHf6{align-items:center;display:inline-flex;padding-left:var(--spacing-3-xs)}.status-label_hds-status-label-icon__3K58a{height:var(--spacing-m);margin-right:var(--spacing-3-xs);width:var(--spacing-m)}.status-label_hds-status-label--info__J28-H{--status-label-background:var(--color-info);--status-label-color:var(--color-white)}.status-label_hds-status-label--success__3jiST{--status-label-background:var(--color-success);--status-label-color:var(--color-white)}.status-label_hds-status-label--alert__1ecsX{--status-label-background:var(--color-alert)}.status-label_hds-status-label--error__2EYi4{--status-label-background:var(--color-error);--status-label-color:var(--color-white)}");var s=function(e){var t=e.icon;return r.createElement("span",{className:o.statusLabelIcon,"aria-hidden":"true"},t)},u=function(e){var t=e.children,n=e.className,i=e.dataTestId,u=e.type,c=void 0===u?"neutral":u,p=e.iconLeft,d=(0,a._)(e,["children","className","dataTestId","type","iconLeft"]);return r.createElement("span",Object.assign({className:(0,l.c)(o.statusLabel,o[c],p&&o.statusLabelWithIcon,n),"data-testid":i},d),p&&r.createElement(s,{icon:p}),t)}},88597:function(e,t,n){"use strict";n.d(t,{c:function(){return a}});var a=function(e,t,n,a,r){var i=[t&&"".concat(e,"-helper"),n&&"".concat(e,"-error"),a&&"".concat(e,"-success"),r&&"".concat(e,"-info")].filter((function(e){return e}));return i.length?i.join(" "):null}},91809:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var a=n(28338),r=n.n(a),i=function(e,t){r()(e)?e(t.current):e.current=t.current}},55297:function(e,t,n){"use strict";n.r(t);var a=n(11151),r=n(67294),i=n(41031),l=n(11757);const o=e=>{let{children:t,pageContext:n}=e;return r.createElement(l.default,{pageContext:n},t)};function s(e){const t=Object.assign({h2:"h2",a:"a",span:"span",h3:"h3",ul:"ul",li:"li",strong:"strong",h4:"h4",p:"p",code:"code"},(0,a.ah)(),e.components),{PlaygroundPreview:n,ExternalLink:l}=t;return l||u("ExternalLink",!0),n||u("PlaygroundPreview",!0),r.createElement(r.Fragment,null,r.createElement(t.h2,{id:"usage",style:{position:"relative"}},"Usage",r.createElement(t.a,{href:"#usage","aria-label":"usage permalink",className:"header-anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",r.createElement(t.h3,{id:"example",style:{position:"relative"}},"Example",r.createElement(t.a,{href:"#example","aria-label":"example permalink",className:"header-anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",r.createElement(n,null,r.createElement(i.N,{id:"example",helperText:"Assistive text",label:"Total compensation",unit:"€",defaultValue:1e3,style:{maxWidth:"320px"}})),"\n",r.createElement(t.h3,{id:"principles",style:{position:"relative"}},"Principles",r.createElement(t.a,{href:"#principles","aria-label":"principles permalink",className:"header-anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.strong,null,"A label should always be provided with a number input."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Make sure that the label is clear and concise. The user should immediately understand what number they are supposed to input."),"\n"),"\n"),"\n",r.createElement(t.li,null,"HDS Number input also supports displaying an unit for the number. Displaying the unit is not mandatory. Only use it when you think it will help the user.","\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Display the unit for ",r.createElement(l,{href:"https://en.wikipedia.org/wiki/International_System_of_Units"},"SI units")," (such as meters) and currencies."),"\n",r.createElement(t.li,null,'The unit does not need to be displayed when it is self-evident for the user, such as in "Number of people"'),"\n"),"\n"),"\n",r.createElement(t.li,null,"It is recommended to give the number input a default value. Placeholders should be avoided in number inputs."),"\n",r.createElement(t.li,null,"HDS Number input supports visual steppers that can be set to increase and decrease the number value by a set amount.","\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Steppers can be used when changes to the value are small or when they are intuitive to the user (e.g. from 0 to 100 with steps of 10)."),"\n",r.createElement(t.li,null,"You should not use steppers when large value changes are expected."),"\n"),"\n"),"\n"),"\n",r.createElement(t.h3,{id:"variations",style:{position:"relative"}},"Variations",r.createElement(t.a,{href:"#variations","aria-label":"variations permalink",className:"header-anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",r.createElement(t.h4,{id:"default",style:{position:"relative"}},"Default",r.createElement(t.a,{href:"#default","aria-label":"default permalink",className:"header-anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",r.createElement(t.p,null,"Default HDS Number input comes without stepper. The number is always inputted manually. Using this over a text input is still helpful since it has a ",r.createElement(t.code,null,"type=number")," to aid screen readers and mobile keyboards."),"\n",r.createElement(t.p,null,"When applicable, a unit can be set for the input by using the ",r.createElement(t.code,null,"unit")," prop."),"\n",r.createElement(n,null,r.createElement(i.N,{id:"default",helperText:"Assistive text",label:"Total compensation",unit:"€",defaultValue:1e3,style:{maxWidth:"320px"}})),"\n",r.createElement(t.h4,{id:"with-steppers",style:{position:"relative"}},"With steppers",r.createElement(t.a,{href:"#with-steppers","aria-label":"with steppers permalink",className:"header-anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",r.createElement(t.p,null,"Steppers can be enabled via providing a ",r.createElement(t.code,null,"step")," property. Use this variant when value changes are small and you can determine logical amounts for an increase and a decrease step."),"\n",r.createElement(n,null,r.createElement(i.N,{id:"stepper",helperText:"Assistive text",label:"Number of attendees",minusStepButtonAriaLabel:"Decrease by one",plusStepButtonAriaLabel:"Increase by one",step:1,defaultValue:5,style:{maxWidth:"320px"}})),"\n",r.createElement(t.h4,{id:"with-min-and-max-values",style:{position:"relative"}},"With min and max values",r.createElement(t.a,{href:"#with-min-and-max-values","aria-label":"with min and max values permalink",className:"header-anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",r.createElement(t.p,null,"Steppers can be enabled by providing a ",r.createElement(t.code,null,"step")," property. Use this variant when value changes are small and you can determine logical amounts for an increase and a decrease step."),"\n",r.createElement(t.p,null,"If your input has special requirements, it is a good practice to describe them in the assistive text."),"\n",r.createElement(n,null,r.createElement(i.N,{id:"stepper-minmax",helperText:"At least 3 attendees are required",label:"Number of attendees",min:3,max:99,minusStepButtonAriaLabel:"Decrease by one",plusStepButtonAriaLabel:"Increase by one",step:1,defaultValue:3,style:{maxWidth:"320px"}})))}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e){return void 0===e&&(e={}),r.createElement(o,e,r.createElement(s,e))}},11757:function(e,t,n){"use strict";n.r(t);var a=n(11151),r=n(67294),i=n(57674),l=n(89482),o=(n(18607),n(26127)),s=n(55725);function u(e){const t=Object.assign({h1:"h1",a:"a",span:"span"},(0,a.ah)(),e.components);return o.Z||c("PageTabs",!1),o.Z.Tab||c("PageTabs.Tab",!0),o.Z.TabList||c("PageTabs.TabList",!0),o.Z.TabPanel||c("PageTabs.TabPanel",!0),r.createElement(r.Fragment,null,r.createElement(t.h1,{id:"numberinput",style:{position:"relative"}},"NumberInput",r.createElement(t.a,{href:"#numberinput","aria-label":"numberinput permalink",className:"header-anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",r.createElement("div",{class:"status-label-description"},r.createElement(s.Z,{type:"info"},"Stable"),r.createElement(s.Z,{type:"success",style:{marginLeft:"var(--spacing-xs)"}},"Accessible"),r.createElement(i.Z)),"\n",r.createElement(l.Z,null,"  A number input allows the user to enter numeric values. It also features optional steppers for increasing or decreasing the value by a set amount."),"\n",r.createElement(o.Z,{pageContext:e.pageContext},r.createElement(o.Z.TabList,null,r.createElement(o.Z.Tab,{href:"/"},"Usage"),r.createElement(o.Z.Tab,{href:"/code"},"Code"),r.createElement(o.Z.Tab,{href:"/accessibility"},"Accessibility")),r.createElement(o.Z.TabPanel,null,e.children)))}function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(u,e)):u(e)}},89482:function(e,t,n){"use strict";var a=n(67294),r=n(42972);t.Z=e=>{let{color:t="var(--color-black-90)",size:n="var(--fontsize-body-xl)",style:i={},children:l}=e;return a.createElement("p",{style:{fontSize:n,color:t,maxWidth:600,...i}},(0,r.g)(l))}},26127:function(e,t,n){"use strict";var a=n(67294),r=n(14160),i=n(17014),l=n(42972);const o="PageTabList",s="PageTabPanel",u="PageTab",c=e=>{var t;let{pageContext:n,children:c}=e;const p=n.frontmatter.slug,d=Array.isArray(c)?c:[c],h=d.find((e=>(0,a.isValidElement)(e)&&e.type.componentName===o)),_=d.find((e=>(0,a.isValidElement)(e)&&e.type.componentName===s)),m=null===(t=h.props)||void 0===t?void 0:t.children.filter((e=>e.type.componentName===u)),b=m.findIndex((e=>p.endsWith(e.props.href))),v=-1===b?0:b,x=0===v?p:(e=>`/${e.trim().split("/").filter((e=>!!e)).slice(0,-1).join("/")}`)(p);return a.createElement(i.a,{initiallyActiveTab:v},a.createElement(i.a.TabList,{className:"page-tabs-list"},m.map((e=>a.createElement(i.a.Tab,{key:e.props.href,onClick:()=>(0,r.navigate)(`${"/"===e.props.href?x:x+e.props.href}`)},(0,l.g)(e.props.children))))),m.map(((e,t)=>a.createElement(i.a.TabPanel,{key:e.props.href},v===t?_.props.children:a.createElement("div",null)))))},p=e=>{let{children:t}=e;return a.createElement(i.a.TabList,null,t)};p.componentName=o;const d=e=>{let{href:t,slug:n,children:r}=e;return a.createElement(i.a.Tab,null," ",r)};d.componentName=u;const h=e=>{let{children:t}=e;return a.createElement(i.a.TabPanel,null,t)};h.componentName=s,c.TabList=p,c.Tab=d,c.TabPanel=h,t.Z=c},55725:function(e,t,n){"use strict";var a=n(67294),r=n(40008),i=n(42972);t.Z=e=>{let{children:t,...n}=e;return a.createElement(r.S,n,(0,i.g)(t))}},57674:function(e,t,n){"use strict";var a=n(67294),r=n(12367);t.Z=()=>{const e={Draft:"The component is work in progress",Beta:"The component is being tested",Stable:"The component has been tested and defects have been fixed",Accessible:"The component has been reviewed for accessibility",Deprecated:"The component will be removed"};return a.createElement(r.T,{placement:"right-end",className:"status-label-tooltip",boxShadow:!0},a.createElement("ul",{className:"status-label-definitions"},Object.keys(e).map((t=>a.createElement("li",{key:t},a.createElement("span",{className:"status-name"},t),a.createElement("span",null,e[t]))))))}}}]);
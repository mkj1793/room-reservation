import { css } from "lit";

// TODO: Use rollup plugin for css file imports so we can have this as an actual CSS file
export default css`:host {
  display: block;
  --background-color: var(--color-white);
  --border-color: var(--color-black-60);
  --header-font-color: var(--color-black-90);
  --header-focus-outline-color: var(--color-coat-of-arms);
  --content-font-color: var(--color-black-90);
  --content-font-size: var(--fontsize-body-m);
  --content-line-height: var(--lineheight-l);
  border-bottom: 1px solid var(--border-color, currentColor);
}

:host(:not(.card)) {
  border-bottom: 1px solid var(--border-color, currentColor);
}

:host(.card) {
  background-color: var(--background-color);
  padding-left: var(--padding-horizontal);
  padding-right: var(--padding-horizontal);
}

:host(.border) {
  border: 2px solid var(--border-color);
}

:host(.s) {
  --header-font-size: var(--fontsize-heading-s);
  --padding-vertical: var(--spacing-s);
  --header-font-weight: 700;
  --header-letter-spacing: 0.2px;
  --header-line-height: 1.4;
  --button-size: 28px;
  --padding-horizontal: var(--spacing-2-xs);
}

:host(.s) .closeButton div {
  margin-right: var(--spacing-4-xs);
}

:host(.m) {
  --header-font-size: var(--fontsize-heading-m);
  --padding-vertical: var(--spacing-m);
  --header-font-weight: 500;
  --header-letter-spacing: -0.2px;
  --header-line-height: 32px;
  --button-size: 36px;
  --padding-horizontal: var(--spacing-m);
}

:host(.m) .closeButton div {
  margin-right: 6px;
}

:host(.l) {
  --header-font-size: var(--fontsize-heading-l);
  --padding-vertical: var(--spacing-l);
  --header-font-weight: 400;
  --header-letter-spacing: -0.4px;
  --header-line-height: var(--lineheight-s);
  --button-size: 52px;
  --padding-horizontal: var(--spacing-l);
}

:host(.l) .closeButton div {
  margin-right: var(--spacing-xs);
}

:host(:not(.isOpen)) .headingContainer svg {
  transform: rotate(180deg);
}

.accordionHeader {
  position: relative;
  color: var(--header-font-color);
  font-size: var(--header-font-size);
  letter-spacing: var(--header-letter-spacing);
  font-weight: var(--header-font-weight);
  line-height: var(--header-line-height);
  padding-top: var(--padding-vertical);
  padding-bottom: var(--padding-vertical);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordionHeader > div {
  flex: 1 1 auto;
}

.accordionContent {
  position: relative;
  font-size: var(--content-font-size);
  line-height: var(--content-line-height);
  padding-bottom: var(--spacing-m);
  color: var(--content-font-color);
}

.accordionContent .closeButton {
  color: var(--content-font-color);
  position: absolute;
  bottom: 0;
  right: 0;
}

.contentWithCloseButton {
  padding-bottom: 44px;
}

.headingContainer {
  cursor: pointer;
  width: 100%;
  display: grid;
  grid-template-columns: auto calc(var(--button-size));
  box-sizing: border-box;
  align-items: center;
}

.headingContainer:focus {
  outline: 2px solid var(--header-focus-outline-color, transparent);
}

.accordionButtonIcon {
  box-sizing: border-box;
  border: 2px solid transparent;
  width: var(--button-size) !important;
  height: var(--button-size) !important;
  margin: auto;
}
`
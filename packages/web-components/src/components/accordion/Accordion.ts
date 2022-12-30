import { LitElement, html, PropertyValueMap } from 'lit';
// eslint-disable-next-line import/extensions
import { customElement } from 'lit/decorators.js';
import { toString, uniqueId } from 'lodash';

import { AccordionCustomTheme, Language } from './AccordionProps';
import style from './accordionStyles';

// import core base styles
import 'hds-core';

const booleanConverter = {
  fromAttribute: (value) => value === 'true',
  toAttribute: (value) => toString(value),
};

// FIXME: Remove and import from a common utility file or such
const classNames = (...args) => args.filter(Boolean).join(' ');

const getCloseMessage = (language: Language): string =>
  ({
    en: `Close`,
    fi: `Sulje`,
    sv: `Stäng`,
  }[language]);

@customElement('hds-accordion')
export default class AccordionHTMLElement extends LitElement {
  id: string;
  card: boolean = false;
  border: boolean = false;
  children: HTMLCollection;
  language: Language = 'fi';
  heading: string;
  headingLevel: number = 2;
  isOpen: boolean = false;
  closeButton: boolean = true;
  closeButtonClassName: string;
  size: string; // SizeType = 'm';
  theme?: AccordionCustomTheme;
  // TODO style

  static get properties() {
    return {
      id: { type: String },
      card: { type: Boolean, converter: booleanConverter },
      border: { type: Boolean, converter: booleanConverter },
      children: { type: HTMLCollection },
      language: { type: String },
      heading: { type: String },
      headingLevel: { type: Number },
      isOpen: { type: Boolean, converter: booleanConverter },
      closeButton: { type: Boolean, converter: booleanConverter },
      closeButtonClassName: { type: String },
      size: { type: String },
    };
  }

  identifierPrefix: string;

  private get identifiers() {
    if (!this.identifierPrefix) this.identifierPrefix = this.id || uniqueId('accordion-');
    const heading = `${this.identifierPrefix}-heading`;
    const content = `${this.identifierPrefix}-content`;
    const closeButton = `${this.identifierPrefix}-closeButton`;

    return { heading, content, closeButton };
  }

  toggleOpen = () => {
    this.isOpen = !this.isOpen;
  };

  hasCloseButton = () => !!this.closeButton;

  protected willUpdate(_changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>): void {
    // TODO: Figure out how this side-effect-ish className would be better handled
    //       e.g. best practices for non-ortogonal stuff in lit library.
    const card = this.card && 'card';
    const border = this.card && this.border && 'border';
    const isOpen = this.isOpen && 'isOpen';

    this.className = classNames('accordion', card, border, isOpen, this.size);
    return super.willUpdate(_changedProperties);
  }

  render() {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        this.toggleOpen(); // FIXME
      }
    };

    return html`
      <div class='accordionHeader'>
        <div
          id=${this.identifiers.heading}
          aria-level=${this.headingLevel}
          role="heading">

          <div
            role='button'
            class='headingContainer'
            tabIndex=0
            aria-labelledby=${this.identifiers.heading}
            aria-expanded=${this.isOpen}
            @keypress=${handleKeyPress}
            @click=${this.toggleOpen}>

            <span class='label'>${this.heading}</span>
            ${this.renderIcon()}
          </div>

        </div>
      </div>

      <div
        id=${this.identifiers.content}
        style="display: ${this.isOpen ? 'block' : 'none'}"
        role="region"
        class='accordionContent'
        aria-labelledby=${this.identifiers.heading}>
        <slot></slot>
        ${this.renderCloseButton()}
      </div>
    </div>
    `;
  }

  private renderIcon() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img">
      <g fill="none" fillRule="evenodd">
        <path d="M0 24h24V0H0z" />
        <path fill="currentColor" d="M12 11.5l5 5 1.5-1.5L12 8.5 5.5 15 7 16.5z" />
      </g>
    </svg>`;
  }

  private renderCloseButton() {
    if (!this.hasCloseButton) return '';

    const closeMessage = getCloseMessage(this.language);
    const closeLabel = classNames(closeMessage, this.heading);
    const className = classNames(
      'hds-button',
      'hds-button--supplementary',
      'hds-button--theme-black',
      'hds-button--small',
      this.closeButtonClassName,
    );

    // TODO: .iconRight={<IconAngleUp aria-hidden size="xs" className={styles.accordionButtonIcon} />}

    const handleKeyPress = (e) => {
      if (e.key === ' ') {
        this.toggleOpen(); // FIXME
      }
    };

    return html`
      <button class=${className} aria-label=${closeLabel} @keypress=${handleKeyPress} @click=${this.toggleOpen}>
        ${closeMessage}
      </button>
    `;
  }

  static readonly styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'hds-accordion': AccordionHTMLElement;
  }
}
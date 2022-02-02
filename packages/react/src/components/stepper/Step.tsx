import React from 'react';

import { IconCheck, IconError, IconPlaybackPause } from '../../icons';
// import core base styles
import 'hds-core';
import styles from './Stepper.module.scss';
import classNames from '../../utils/classNames';

export enum State {
  available,
  completed,
  disabled,
  attention,
  paused,
}

export type StepProps = React.ComponentPropsWithoutRef<'button'> & {
  /**
   * Data test id of step
   */
  dataTestId?: string;
  /**
   * The label of the step
   */
  label: string;
  /**
   * The language of the step
   */
  language?: Language;
  /**
   * The number of the step
   */
  number: number;
  /**
   * A callback function for custom action on step click
   */
  onStepClick?: (event, number: number) => void;
  /**
   * A function for rendering a custom aria label for step's state
   */
  renderCustomStateAriaLabel?: (step, state) => string;
  /**
   * A function for rendering a custom step count label
   */
  renderCustomStepCountLabel?: (step, totalNumberOfSteps) => string;
  /**
   * A boolean indicating whether step is in selected state
   */
  selected?: boolean;
  /**
   * A boolean indicating whether small variant is used
   */
  small?: boolean;
  /**
   * The state of the step
   */
  state: State;
  /**
   * The total number of steps
   */
  stepsTotal: number;
};

type Language = 'en' | 'fi' | 'sv' | string;

const getStepCountLabel = (language: Language, step: number, totalNumberOfSteps: number) => {
  return {
    en: `Step ${step}/${totalNumberOfSteps}.`,
    fi: `Vaihe ${step}/${totalNumberOfSteps}.`,
    sv: `Steg ${step}/${totalNumberOfSteps}.`,
  }[language];
};

const states = {
  available: {
    fi: 'Valittavissa.',
    en: 'Available.',
    sv: 'Valbar.',
  },
  completed: {
    fi: 'Valmis.',
    en: 'Completed.',
    sv: 'Komplett.',
  },
  attention: {
    fi: 'Vaatii huomiota.',
    en: 'Needs attention.',
    sv: 'Behöver uppmärksamhet.',
  },
  paused: {
    fi: 'Keskeytetty.',
    en: 'Paused.',
    sv: 'Pausad.',
  },
};

const getStepState = (language: Language, state: StepProps['state']) => {
  if (state === State.disabled) {
    // Button has disabled attribute, which is enough for a11y
    return '';
  }
  return states[State[state]][language];
};

export const Step = React.forwardRef<HTMLButtonElement, StepProps>(
  (
    {
      label,
      language = 'fi',
      number,
      renderCustomStepCountLabel,
      small = false,
      state,
      selected,
      stepsTotal,
      renderCustomStateAriaLabel,
      onStepClick,
      dataTestId,
      ...rest
    }: StepProps,
    ref?: React.RefObject<HTMLButtonElement>,
  ) => {
    const composeAriaLabel = () => {
      const stepCountLabel = renderCustomStepCountLabel
        ? renderCustomStepCountLabel(number, stepsTotal)
        : getStepCountLabel(language, number, stepsTotal);

      let stateAriaLabel = renderCustomStateAriaLabel
        ? renderCustomStateAriaLabel(number, state)
        : getStepState(language, state);

      if (selected && state === State.available) {
        stateAriaLabel = '';
      }

      let labelWithPeriod = label;

      if (labelWithPeriod.slice(-1) !== '.') {
        labelWithPeriod += '.';
      }

      return [labelWithPeriod, stepCountLabel, stateAriaLabel].filter((lbl) => lbl).join(' ');
    };

    return (
      <div className={styles.stepContainer}>
        <button
          ref={ref}
          type="button"
          disabled={state === State.disabled}
          className={classNames(styles.step, selected && styles.selected, state === State.disabled && styles.disabled)}
          aria-current={selected ? 'step' : false}
          aria-label={composeAriaLabel()}
          onClick={(e) => onStepClick && onStepClick(e, number)}
          data-testid={dataTestId}
          {...rest}
        >
          <div className={styles.circleContainer}>
            {state === State.completed && !selected ? (
              <div className={styles.completedContainer}>
                <IconCheck className={styles.completedIcon} aria-hidden />
              </div>
            ) : (
              <div className={classNames(styles.circle)}>
                {state === State.attention && <IconError size="xs" aria-hidden />}
                {state === State.paused && <IconPlaybackPause size="xs" aria-hidden />}
                {(state === State.available || state === State.disabled || (state === State.completed && selected)) && (
                  <span className={styles.number}>{number}</span>
                )}
              </div>
            )}
          </div>
          {!small && <p className={styles.label}>{label}</p>}
        </button>
      </div>
    );
  },
);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, boolean, object } from '@storybook/addon-knobs';
// Application
import './scss/app.component.scss';
import Wizard from '../src/components/wizard.component';

/* eslint-disable no-alert */
/* eslint-disable no-console */
const stories = storiesOf('@opuscapita/react-wizard', module);
const saveCallback = () => alert('Saved');
const cancelCallback = () => alert('Canceled');

stories.add('React Wizard', () => {
  const localizations = { save: 'Save', cancel: 'Cancel', saved: 'Saved' };
  const steps = [{
    id: '1',
    name: text('1st step name', 'First step'),
    hasRequiredProps: boolean('1st step contains required fields', false),
    hasRequiredPropsErrors: boolean('1st step contains required field errors', false),
    component: <div>{text('1st step content', 'Some example content (propType node)')}</div>,
  }, {
    id: '2',
    name: text('2nd step name', 'Second step'),
    hasRequiredProps: boolean('2nd step contains required fields', false),
    hasRequiredPropsErrors: boolean('2nd step contains required field errors', false),
    component: <div>{text('2nd step content', 'Some example content (propType node)')}</div>,
  }];

  const onStepChange = () => {
    console.log('Step changed (callback)');
  };

  const otherKnobs = {
    showSaveSuccess: boolean('Show save success message', false),
    disableCancel: boolean('Cancel disabled', false),
    disableSave: boolean('Save disabled', false),
    showPageIndicator: boolean('Show page indicator', true),
    showHeaderTabs: boolean('Show header tabs', true),
    activeStep: number('Active step #', 0),
    localizationTexts: object('Localization texts', localizations),
  };

  return (
    <div className="demo-container">
      <Wizard
        id="demo"
        save={saveCallback}
        cancel={cancelCallback}
        steps={steps}
        onStepChange={onStepChange}
        {...otherKnobs}
      />
    </div>
  );
});

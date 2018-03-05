/* eslint-disable no-console  */

import React from 'react';
import Wizard from '../../src';

export default class ExampleWizard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.steps = [{
      id: '1',
      name: 'Page 1',
      component: <div>My wizard page 1</div>,
    }, {
      id: '2',
      name: 'Page 2',
      component: <div>My wizard page 2</div>,
    }, {
      id: '3',
      name: 'Page 3',
      component: <div>My wizard page 3</div>,
    }];
  }

  saveWizard = () => {
    console.log('Pressed Save button');
  }

  cancelWizard = () => {
    console.log('Pressed Cancel button');
  }

  render() {
    return (
      <Wizard
        save={this.saveWizard}
        cancel={this.cancelWizard}
        steps={this.steps}
        localizationTexts={{ save: 'Save', cancel: 'Cancel', saved: 'Saved successfully' }}
      />
    );
  }
}

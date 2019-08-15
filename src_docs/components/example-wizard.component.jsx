/* eslint-disable no-console  */

import React from 'react';
import Wizard from '../../src';

import './example-wizard.scss';

export default class ExampleWizard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showSaved: false,
      showPageIndicator: true,
    };

    this.steps = [{
      id: '1',
      name: 'Page 1',
      component: this.getFirstPage(),
    }, {
      id: '2',
      name: 'Page 2',
      component: <h3>My wizard page 2</h3>,
    }, {
      id: '3',
      name: 'Page 3',
      component: <h3>My wizard page 3</h3>,
    }];
  }

  getFirstPage = () => (
    <div id="wizard-page-1">
      <h3>My wizard page 1</h3>
      <div className="input-row">
        <label htmlFor="show-save-successfully">
          <input id="show-save-successfully" type="checkbox" onChange={this.changeHandlerForShowSaved} />
          <span>Show element: Saved successfully</span>
        </label>
      </div>
      <div className="input-row">
        <label htmlFor="show-page-indicator">
          <input id="show-page-indicator" type="checkbox" defaultChecked onChange={this.changeHandlerForPageIndicator} />
          <span>Show page indicator</span>
        </label>
      </div>
      <h3>My wizard page 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget urna et turpis pellentesque laoreet sit amet eget velit. Aliquam in nulla eget enim congue ornare sit amet tincidunt est. Nullam suscipit neque a leo vulputate, a elementum justo viverra. Fusce ultrices sollicitudin eros et convallis. Donec ornare porta lobortis. Sed mollis magna ac aliquet vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Aenean venenatis justo augue, sit amet accumsan felis varius id. Suspendisse id pulvinar felis, a gravida ante. Nam eu nisi vitae enim congue tempor. Aliquam consectetur feugiat leo. Praesent nisl purus, ullamcorper vel lacus at, consequat consequat lacus. Pellentesque mollis sit amet magna vel mollis. Cras orci leo, malesuada in sapien id, ornare lacinia lorem.</p>
    </div>
  );

  changeHandlerForPageIndicator = (e) => {
    this.setState({
      showPageIndicator: e.target.checked,
    });
  }

  changeHandlerForShowSaved = (e) => {
    this.setState({
      showSaved: e.target.checked,
    });
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
        showSaveSuccess={this.state.showSaved}
        showPageIndicator={this.state.showPageIndicator}
      />
    );
  }
}

import React from 'react';
import ExampleWizard from '../components/example-wizard.component';
import GithubLogo from '../images/logo-github.svg';

import './example.scss';

export default () => (
  <div className="example-container oc-flex-column">
    <div className="example-header oc-flex-row">
      <h3>React Wizard</h3>
      <a
        className="example-git-logo"
        href="https://github.com/OpusCapita/react-wizard"
      >
        <span><GithubLogo /></span>
      </a>
    </div>
    <div className="example-content oc-flex-column">
      <h4>Example of Wizard component:</h4>
      <div className="example-view-wrapper">
        <ExampleWizard />
      </div>
    </div>
  </div>
);

import React from 'react';
import PropTypes from 'prop-types';

import WizardHeader from './wizard-header.component';
import WizardFooter from './wizard-footer.component';

import './wizard.component.scss';

export default class Wizard extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      currentStep: 0,
    };
  }

  componentDidMount() {
    const stepIndex = this.getStepByUrlParam() ? this.getStepByUrlParam() : this.props.activeStep;
    this.selectPage(null, stepIndex);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeStep !== this.props.activeStep) {
      this.selectPage(undefined, nextProps.activeStep);
    }
  }

  getStepByUrlParam() {
    const { steps } = this.props;
    let index = null;
    let param = /initialStep=([^&]+)/.exec(this.getLocation());
    param = param ? param[1] : null;
    if (param && steps && steps.length > 0) {
      index = steps.findIndex(step => step.id === param);
    }
    return index;
  }

  getLocation = () => window.location.href;

  selectPage = (event, index) => {
    if (event) {
      event.preventDefault();
    }
    if (index < 0 || index > this.props.steps.length - 1) return;

    if (this.props.onStepChange && (this.state.currentStep !== index)) {
      const previousStepId = this.props.steps[this.state.currentStep].id;
      const currentStepId = this.props.steps[index].id;
      this.props.onStepChange(previousStepId, currentStepId);
    }

    this.setState({
      currentStep: index,
    });
  };

  render() {
    return (
      <div id="wizard-pages">
        <WizardHeader
          steps={this.props.steps}
          showHeaderTabs={this.props.showHeaderTabs}
          currentStep={this.state.currentStep}
          selectPage={this.selectPage}
        />
        <div id="wizard-content">
          {this.props.steps[this.state.currentStep].component}
        </div>
        <WizardFooter
          steps={this.props.steps}
          currentStep={this.state.currentStep}
          selectPage={this.selectPage}
          save={this.props.save}
          cancel={this.props.cancel}
          disableSave={this.props.disableSave}
          disableCancel={this.props.disableCancel}
          localizationTexts={this.props.localizationTexts}
          showPageIndicator={this.props.showPageIndicator}
          showSaveSuccess={this.props.showSaveSuccess}
        />
      </div>
    );
  }
}

Wizard.defaultProps = {
  activeStep: 0,
  showPageIndicator: true,
  showHeaderTabs: true,
  localizationTexts: {
    save: 'Save',
    cancel: 'Close',
    saved: 'Saved',
  },
  disableSave: false,
  disableCancel: false,
  showSaveSuccess: false,
  onStepChange: null,
};

Wizard.propTypes = {
  save: PropTypes.func.isRequired,
  disableSave: PropTypes.bool,
  cancel: PropTypes.func.isRequired,
  disableCancel: PropTypes.bool,
  steps: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.node.isRequired,
    hasRequiredProps: PropTypes.bool,
    hasRequiredPropsErrors: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  })).isRequired,
  localizationTexts: PropTypes.shape({
    save: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    cancel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    saved: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
  activeStep: PropTypes.number,
  showPageIndicator: PropTypes.bool,
  showHeaderTabs: PropTypes.bool,
  showSaveSuccess: PropTypes.bool,
  onStepChange: PropTypes.func,
};

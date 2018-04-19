function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

import WizardHeader from './wizard-header.component';
import WizardFooter from './wizard-footer.component';

import './wizard.component.scss';

var Wizard = function (_React$PureComponent) {
  _inherits(Wizard, _React$PureComponent);

  function Wizard() {
    _classCallCheck(this, Wizard);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this));

    _this.getLocation = function () {
      return window.location.href;
    };

    _this.selectPage = function (event, index) {
      if (event) {
        event.preventDefault();
      }
      if (index < 0 || index > _this.props.steps.length - 1) return;

      if (_this.props.onStepChange && _this.state.currentStep !== index) {
        var previousStepId = _this.props.steps[_this.state.currentStep].id;
        var currentStepId = _this.props.steps[index].id;
        _this.props.onStepChange(previousStepId, currentStepId);
      }

      _this.setState({
        currentStep: index
      });
    };

    _this.state = {
      currentStep: 0
    };
    return _this;
  }

  Wizard.prototype.componentDidMount = function componentDidMount() {
    var stepIndex = this.getStepByUrlParam() ? this.getStepByUrlParam() : this.props.activeStep;
    this.selectPage(null, stepIndex);
  };

  Wizard.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.activeStep !== this.props.activeStep) {
      this.selectPage(undefined, nextProps.activeStep);
    }
  };

  Wizard.prototype.getStepByUrlParam = function getStepByUrlParam() {
    var steps = this.props.steps;

    var index = null;
    var param = /initialStep=([^&]+)/.exec(this.getLocation());
    param = param ? param[1] : null;
    if (param && steps && steps.length > 0) {
      index = steps.findIndex(function (step) {
        return step.id === param;
      });
    }
    return index;
  };

  Wizard.prototype.render = function render() {
    return React.createElement(
      'div',
      { id: 'wizard-pages' },
      React.createElement(WizardHeader, {
        steps: this.props.steps,
        showHeaderTabs: this.props.showHeaderTabs,
        currentStep: this.state.currentStep,
        selectPage: this.selectPage
      }),
      React.createElement(
        'div',
        { id: 'wizard-content' },
        this.props.steps[this.state.currentStep].component
      ),
      React.createElement(WizardFooter, {
        steps: this.props.steps,
        currentStep: this.state.currentStep,
        selectPage: this.selectPage,
        save: this.props.save,
        cancel: this.props.cancel,
        disableSave: this.props.disableSave,
        disableCancel: this.props.disableCancel,
        localizationTexts: this.props.localizationTexts,
        showPageIndicator: this.props.showPageIndicator,
        showSaveSuccess: this.props.showSaveSuccess
      })
    );
  };

  return Wizard;
}(React.PureComponent);

export { Wizard as default };


Wizard.defaultProps = {
  activeStep: 0,
  showPageIndicator: true,
  showHeaderTabs: true,
  localizationTexts: {
    save: 'Save',
    cancel: 'Close',
    saved: 'Saved'
  },
  disableSave: false,
  disableCancel: false,
  showSaveSuccess: false,
  onStepChange: null
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
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  })).isRequired,
  localizationTexts: PropTypes.shape({
    save: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    cancel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    saved: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }),
  activeStep: PropTypes.number,
  showPageIndicator: PropTypes.bool,
  showHeaderTabs: PropTypes.bool,
  showSaveSuccess: PropTypes.bool,
  onStepChange: PropTypes.func
};
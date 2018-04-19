'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _wizardHeader = require('./wizard-header.component');

var _wizardHeader2 = _interopRequireDefault(_wizardHeader);

var _wizardFooter = require('./wizard-footer.component');

var _wizardFooter2 = _interopRequireDefault(_wizardFooter);

require('./wizard.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    return _react2.default.createElement(
      'div',
      { id: 'wizard-pages' },
      _react2.default.createElement(_wizardHeader2.default, {
        steps: this.props.steps,
        showHeaderTabs: this.props.showHeaderTabs,
        currentStep: this.state.currentStep,
        selectPage: this.selectPage
      }),
      _react2.default.createElement(
        'div',
        { id: 'wizard-content' },
        this.props.steps[this.state.currentStep].component
      ),
      _react2.default.createElement(_wizardFooter2.default, {
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
}(_react2.default.PureComponent);

exports.default = Wizard;


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
  save: _propTypes2.default.func.isRequired,
  disableSave: _propTypes2.default.bool,
  cancel: _propTypes2.default.func.isRequired,
  disableCancel: _propTypes2.default.bool,
  steps: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    component: _propTypes2.default.node.isRequired,
    hasRequiredProps: _propTypes2.default.bool,
    hasRequiredPropsErrors: _propTypes2.default.bool,
    id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
    name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
  })).isRequired,
  localizationTexts: _propTypes2.default.shape({
    save: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    cancel: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    saved: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
  }),
  activeStep: _propTypes2.default.number,
  showPageIndicator: _propTypes2.default.bool,
  showHeaderTabs: _propTypes2.default.bool,
  showSaveSuccess: _propTypes2.default.bool,
  onStepChange: _propTypes2.default.func
};
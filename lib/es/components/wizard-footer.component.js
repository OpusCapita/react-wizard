var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import FaCaretLeft from 'react-icons/lib/fa/caret-left';
import FaCaretRight from 'react-icons/lib/fa/caret-right';
import FaCheck from 'react-icons/lib/fa/check';

import './wizard-footer.component.scss';

var WizardFooter = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(WizardFooter, _React$PureComponent);

  function WizardFooter() {
    var _temp, _this, _ret;

    _classCallCheck(this, WizardFooter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.getIndicators = function () {
      return _this.props.steps.length > 1 && _this.props.steps.map(function (step, i) {
        if (i === _this.props.currentStep) {
          return React.createElement('span', { key: step.id, className: 'tab-indicator tab-highlight' });
        }
        return React.createElement('span', { key: step.id, className: 'tab-indicator' });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  WizardFooter.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        currentStep = _props.currentStep,
        localizationTexts = _props.localizationTexts,
        showPageIndicator = _props.showPageIndicator,
        showSaveSuccess = _props.showSaveSuccess,
        steps = _props.steps;

    return React.createElement(
      'div',
      { id: 'wizard-footer' },
      React.createElement('section', { className: 'left column' }),
      React.createElement(
        'section',
        { className: 'center column' },
        showPageIndicator && React.createElement(
          'div',
          { id: 'bottom-indicators' },
          this.getIndicators()
        ),
        React.createElement(
          'div',
          { id: 'bottom-buttons' },
          React.createElement(
            'section',
            null,
            steps.length > 1 && React.createElement(
              Button,
              {
                disabled: currentStep === 0,
                id: 'previous-step',
                onClick: function onClick(event) {
                  return _this2.props.selectPage(event, currentStep - 1);
                }
              },
              React.createElement(FaCaretLeft, null)
            )
          ),
          React.createElement(
            'section',
            null,
            React.createElement(
              Button,
              {
                id: 'save-button',
                onClick: this.props.save,
                disabled: this.props.disableSave
              },
              localizationTexts.save
            ),
            React.createElement(
              Button,
              {
                id: 'cancel-button',
                onClick: this.props.cancel,
                disabled: this.props.disableCancel
              },
              localizationTexts.cancel
            )
          ),
          React.createElement(
            'section',
            null,
            steps.length > 1 && React.createElement(
              Button,
              {
                disabled: currentStep === steps.length - 1,
                id: 'next-step',
                onClick: function onClick(event) {
                  return _this2.props.selectPage(event, currentStep + 1);
                }
              },
              React.createElement(FaCaretRight, null)
            )
          )
        )
      ),
      React.createElement(
        'section',
        { className: 'right column' },
        showSaveSuccess && React.createElement(
          'div',
          { className: 'save-success-container' },
          React.createElement(FaCheck, { className: 'save-success-indicator' }),
          localizationTexts.saved
        )
      )
    );
  };

  return WizardFooter;
}(React.PureComponent), _class.propTypes = {
  save: PropTypes.func.isRequired,
  disableSave: PropTypes.bool,
  cancel: PropTypes.func.isRequired,
  disableCancel: PropTypes.bool,
  localizationTexts: PropTypes.shape({
    save: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    cancel: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }).isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    component: PropTypes.node.isRequired
  })).isRequired,
  selectPage: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  showPageIndicator: PropTypes.bool,
  showSaveSuccess: PropTypes.bool
}, _class.defaultProps = {
  showPageIndicator: true,
  disableSave: false,
  disableCancel: false,
  showSaveSuccess: false
}, _temp2);
export { WizardFooter as default };
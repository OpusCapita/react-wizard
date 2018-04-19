'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _caretLeft = require('react-icons/lib/fa/caret-left');

var _caretLeft2 = _interopRequireDefault(_caretLeft);

var _caretRight = require('react-icons/lib/fa/caret-right');

var _caretRight2 = _interopRequireDefault(_caretRight);

var _check = require('react-icons/lib/fa/check');

var _check2 = _interopRequireDefault(_check);

require('./wizard-footer.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          return _react2.default.createElement('span', { key: step.id, className: 'tab-indicator tab-highlight' });
        }
        return _react2.default.createElement('span', { key: step.id, className: 'tab-indicator' });
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

    return _react2.default.createElement(
      'div',
      { id: 'wizard-footer' },
      _react2.default.createElement('section', { className: 'left column' }),
      _react2.default.createElement(
        'section',
        { className: 'center column' },
        showPageIndicator && _react2.default.createElement(
          'div',
          { id: 'bottom-indicators' },
          this.getIndicators()
        ),
        _react2.default.createElement(
          'div',
          { id: 'bottom-buttons' },
          _react2.default.createElement(
            'section',
            null,
            steps.length > 1 && _react2.default.createElement(
              _reactBootstrap.Button,
              {
                disabled: currentStep === 0,
                id: 'previous-step',
                onClick: function onClick(event) {
                  return _this2.props.selectPage(event, currentStep - 1);
                }
              },
              _react2.default.createElement(_caretLeft2.default, null)
            )
          ),
          _react2.default.createElement(
            'section',
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                id: 'save-button',
                onClick: this.props.save,
                disabled: this.props.disableSave
              },
              localizationTexts.save
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                id: 'cancel-button',
                onClick: this.props.cancel,
                disabled: this.props.disableCancel
              },
              localizationTexts.cancel
            )
          ),
          _react2.default.createElement(
            'section',
            null,
            steps.length > 1 && _react2.default.createElement(
              _reactBootstrap.Button,
              {
                disabled: currentStep === steps.length - 1,
                id: 'next-step',
                onClick: function onClick(event) {
                  return _this2.props.selectPage(event, currentStep + 1);
                }
              },
              _react2.default.createElement(_caretRight2.default, null)
            )
          )
        )
      ),
      _react2.default.createElement(
        'section',
        { className: 'right column' },
        showSaveSuccess && _react2.default.createElement(
          'div',
          { className: 'save-success-container' },
          _react2.default.createElement(_check2.default, { className: 'save-success-indicator' }),
          localizationTexts.saved
        )
      )
    );
  };

  return WizardFooter;
}(_react2.default.PureComponent), _class.propTypes = {
  save: _propTypes2.default.func.isRequired,
  disableSave: _propTypes2.default.bool,
  cancel: _propTypes2.default.func.isRequired,
  disableCancel: _propTypes2.default.bool,
  localizationTexts: _propTypes2.default.shape({
    save: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    cancel: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
  }).isRequired,
  steps: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    component: _propTypes2.default.node.isRequired
  })).isRequired,
  selectPage: _propTypes2.default.func.isRequired,
  currentStep: _propTypes2.default.number.isRequired,
  showPageIndicator: _propTypes2.default.bool,
  showSaveSuccess: _propTypes2.default.bool
}, _class.defaultProps = {
  showPageIndicator: true,
  disableSave: false,
  disableCancel: false,
  showSaveSuccess: false
}, _temp2);
exports.default = WizardFooter;
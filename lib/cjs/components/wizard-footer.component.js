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
}(_react2.default.PureComponent), _class.defaultProps = {
  showPageIndicator: true,
  disableSave: false,
  disableCancel: false,
  showSaveSuccess: false
}, _temp2);
exports.default = WizardFooter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC1mb290ZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJXaXphcmRGb290ZXIiLCJnZXRJbmRpY2F0b3JzIiwicHJvcHMiLCJzdGVwcyIsImxlbmd0aCIsIm1hcCIsInN0ZXAiLCJpIiwiY3VycmVudFN0ZXAiLCJpZCIsInJlbmRlciIsImxvY2FsaXphdGlvblRleHRzIiwic2hvd1BhZ2VJbmRpY2F0b3IiLCJzaG93U2F2ZVN1Y2Nlc3MiLCJzZWxlY3RQYWdlIiwiZXZlbnQiLCJzYXZlIiwiZGlzYWJsZVNhdmUiLCJjYW5jZWwiLCJkaXNhYmxlQ2FuY2VsIiwic2F2ZWQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7SUFHcUJBLFk7Ozs7Ozs7Ozs7OztnS0EyQm5CQyxhLEdBQWdCO0FBQUEsYUFDZCxNQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLE1BQWpCLEdBQTBCLENBQTFCLElBQStCLE1BQUtGLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkUsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDL0QsWUFBSUEsTUFBTSxNQUFLTCxLQUFMLENBQVdNLFdBQXJCLEVBQWtDO0FBQ2hDLGlCQUFPLHdDQUFNLEtBQUtGLEtBQUtHLEVBQWhCLEVBQW9CLFdBQVUsNkJBQTlCLEdBQVA7QUFDRDtBQUNELGVBQU8sd0NBQU0sS0FBS0gsS0FBS0csRUFBaEIsRUFBb0IsV0FBVSxlQUE5QixHQUFQO0FBQ0QsT0FMOEIsQ0FEakI7QUFBQSxLOzs7eUJBU2hCQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBSUgsS0FBS1IsS0FKRjtBQUFBLFFBRUxNLFdBRkssVUFFTEEsV0FGSztBQUFBLFFBRVFHLGlCQUZSLFVBRVFBLGlCQUZSO0FBQUEsUUFFMkJDLGlCQUYzQixVQUUyQkEsaUJBRjNCO0FBQUEsUUFFOENDLGVBRjlDLFVBRThDQSxlQUY5QztBQUFBLFFBR0xWLEtBSEssVUFHTEEsS0FISzs7QUFLUCxXQUNFO0FBQUE7QUFBQSxRQUFLLElBQUcsZUFBUjtBQUNFLGlEQUFTLFdBQVUsYUFBbkIsR0FERjtBQUVFO0FBQUE7QUFBQSxVQUFTLFdBQVUsZUFBbkI7QUFDR1MsNkJBQ0Q7QUFBQTtBQUFBLFlBQUssSUFBRyxtQkFBUjtBQUNHLGVBQUtYLGFBQUw7QUFESCxTQUZGO0FBTUU7QUFBQTtBQUFBLFlBQUssSUFBRyxnQkFBUjtBQUNFO0FBQUE7QUFBQTtBQUNHRSxrQkFBTUMsTUFBTixHQUFlLENBQWYsSUFDRDtBQUFDLG9DQUFEO0FBQUE7QUFDRSwwQkFBVUksZ0JBQWdCLENBRDVCO0FBRUUsb0JBQUcsZUFGTDtBQUdFLHlCQUFTO0FBQUEseUJBQVMsT0FBS04sS0FBTCxDQUFXWSxVQUFYLENBQXNCQyxLQUF0QixFQUE2QlAsY0FBYyxDQUEzQyxDQUFUO0FBQUE7QUFIWDtBQUtFLDRDQUFDLG1CQUFEO0FBTEY7QUFGRixXQURGO0FBV0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxvQ0FBRDtBQUFBO0FBQ0Usb0JBQUcsYUFETDtBQUVFLHlCQUFTLEtBQUtOLEtBQUwsQ0FBV2MsSUFGdEI7QUFHRSwwQkFBVSxLQUFLZCxLQUFMLENBQVdlO0FBSHZCO0FBS0dOLGdDQUFrQks7QUFMckIsYUFERjtBQVNFO0FBQUMsb0NBQUQ7QUFBQTtBQUNFLG9CQUFHLGVBREw7QUFFRSx5QkFBUyxLQUFLZCxLQUFMLENBQVdnQixNQUZ0QjtBQUdFLDBCQUFVLEtBQUtoQixLQUFMLENBQVdpQjtBQUh2QjtBQUtHUixnQ0FBa0JPO0FBTHJCO0FBVEYsV0FYRjtBQTRCRTtBQUFBO0FBQUE7QUFDR2Ysa0JBQU1DLE1BQU4sR0FBZSxDQUFmLElBQ0Q7QUFBQyxvQ0FBRDtBQUFBO0FBQ0UsMEJBQVVJLGdCQUFnQkwsTUFBTUMsTUFBTixHQUFlLENBRDNDO0FBRUUsb0JBQUcsV0FGTDtBQUdFLHlCQUFTO0FBQUEseUJBQVMsT0FBS0YsS0FBTCxDQUFXWSxVQUFYLENBQXNCQyxLQUF0QixFQUE2QlAsY0FBYyxDQUEzQyxDQUFUO0FBQUE7QUFIWDtBQUtFLDRDQUFDLG9CQUFEO0FBTEY7QUFGRjtBQTVCRjtBQU5GLE9BRkY7QUFnREU7QUFBQTtBQUFBLFVBQVMsV0FBVSxjQUFuQjtBQUNHSywyQkFDRDtBQUFBO0FBQUEsWUFBSyxXQUFVLHdCQUFmO0FBQ0Usd0NBQUMsZUFBRCxJQUFTLFdBQVUsd0JBQW5CLEdBREY7QUFFR0YsNEJBQWtCUztBQUZyQjtBQUZGO0FBaERGLEtBREY7QUEwREQsRzs7O0VBbkd1Q0MsZ0JBQU1DLGEsVUFvQnZDQyxZLEdBQWU7QUFDcEJYLHFCQUFtQixJQURDO0FBRXBCSyxlQUFhLEtBRk87QUFHcEJFLGlCQUFlLEtBSEs7QUFJcEJOLG1CQUFpQjtBQUpHLEM7a0JBcEJIYixZIiwiZmlsZSI6IndpemFyZC1mb290ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgRmFDYXJldExlZnQgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NhcmV0LWxlZnQnO1xuaW1wb3J0IEZhQ2FyZXRSaWdodCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2FyZXQtcmlnaHQnO1xuaW1wb3J0IEZhQ2hlY2sgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZWNrJztcblxuaW1wb3J0ICcuL3dpemFyZC1mb290ZXIuY29tcG9uZW50LnNjc3MnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpemFyZEZvb3RlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNhdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGlzYWJsZVNhdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIGNhbmNlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkaXNhYmxlQ2FuY2VsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2NhbGl6YXRpb25UZXh0czogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHNhdmU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgICBjYW5jZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgfSkpLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0UGFnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjdXJyZW50U3RlcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHNob3dQYWdlSW5kaWNhdG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93U2F2ZVN1Y2Nlc3M6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2hvd1BhZ2VJbmRpY2F0b3I6IHRydWUsXG4gICAgZGlzYWJsZVNhdmU6IGZhbHNlLFxuICAgIGRpc2FibGVDYW5jZWw6IGZhbHNlLFxuICAgIHNob3dTYXZlU3VjY2VzczogZmFsc2UsXG4gIH07XG5cbiAgZ2V0SW5kaWNhdG9ycyA9ICgpID0+IChcbiAgICB0aGlzLnByb3BzLnN0ZXBzLmxlbmd0aCA+IDEgJiYgdGhpcy5wcm9wcy5zdGVwcy5tYXAoKHN0ZXAsIGkpID0+IHtcbiAgICAgIGlmIChpID09PSB0aGlzLnByb3BzLmN1cnJlbnRTdGVwKSB7XG4gICAgICAgIHJldHVybiA8c3BhbiBrZXk9e3N0ZXAuaWR9IGNsYXNzTmFtZT1cInRhYi1pbmRpY2F0b3IgdGFiLWhpZ2hsaWdodFwiIC8+O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDxzcGFuIGtleT17c3RlcC5pZH0gY2xhc3NOYW1lPVwidGFiLWluZGljYXRvclwiIC8+O1xuICAgIH0pXG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGN1cnJlbnRTdGVwLCBsb2NhbGl6YXRpb25UZXh0cywgc2hvd1BhZ2VJbmRpY2F0b3IsIHNob3dTYXZlU3VjY2VzcyxcbiAgICAgIHN0ZXBzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwid2l6YXJkLWZvb3RlclwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsZWZ0IGNvbHVtblwiIC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNlbnRlciBjb2x1bW5cIj5cbiAgICAgICAgICB7c2hvd1BhZ2VJbmRpY2F0b3IgJiZcbiAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tLWluZGljYXRvcnNcIj5cbiAgICAgICAgICAgIHt0aGlzLmdldEluZGljYXRvcnMoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBpZD1cImJvdHRvbS1idXR0b25zXCI+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAge3N0ZXBzLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50U3RlcCA9PT0gMH1cbiAgICAgICAgICAgICAgICBpZD1cInByZXZpb3VzLXN0ZXBcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMucHJvcHMuc2VsZWN0UGFnZShldmVudCwgY3VycmVudFN0ZXAgLSAxKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGYUNhcmV0TGVmdCAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPVwic2F2ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2F2ZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlU2F2ZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsb2NhbGl6YXRpb25UZXh0cy5zYXZlfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNhbmNlbH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlQ2FuY2VsfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xvY2FsaXphdGlvblRleHRzLmNhbmNlbH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAge3N0ZXBzLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50U3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMX1cbiAgICAgICAgICAgICAgICBpZD1cIm5leHQtc3RlcFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gdGhpcy5wcm9wcy5zZWxlY3RQYWdlKGV2ZW50LCBjdXJyZW50U3RlcCArIDEpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhQ2FyZXRSaWdodCAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmlnaHQgY29sdW1uXCI+XG4gICAgICAgICAge3Nob3dTYXZlU3VjY2VzcyAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2F2ZS1zdWNjZXNzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEZhQ2hlY2sgY2xhc3NOYW1lPVwic2F2ZS1zdWNjZXNzLWluZGljYXRvclwiIC8+XG4gICAgICAgICAgICB7bG9jYWxpemF0aW9uVGV4dHMuc2F2ZWR9XG4gICAgICAgICAgPC9kaXY+fVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=
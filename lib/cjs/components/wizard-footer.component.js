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
      return _this.props.steps.map(function (step, i) {
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
            _react2.default.createElement(
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
            _react2.default.createElement(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC1mb290ZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJXaXphcmRGb290ZXIiLCJnZXRJbmRpY2F0b3JzIiwicHJvcHMiLCJzdGVwcyIsIm1hcCIsInN0ZXAiLCJpIiwiY3VycmVudFN0ZXAiLCJpZCIsInJlbmRlciIsImxvY2FsaXphdGlvblRleHRzIiwic2hvd1BhZ2VJbmRpY2F0b3IiLCJzaG93U2F2ZVN1Y2Nlc3MiLCJzZWxlY3RQYWdlIiwiZXZlbnQiLCJzYXZlIiwiZGlzYWJsZVNhdmUiLCJjYW5jZWwiLCJkaXNhYmxlQ2FuY2VsIiwibGVuZ3RoIiwic2F2ZWQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBR3FCQSxZOzs7Ozs7Ozs7Ozs7Z0tBMkJuQkMsYSxHQUFnQjtBQUFBLGFBQ2QsTUFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUNoQyxZQUFJQSxNQUFNLE1BQUtKLEtBQUwsQ0FBV0ssV0FBckIsRUFBa0M7QUFDaEMsaUJBQU8sd0NBQU0sS0FBS0YsS0FBS0csRUFBaEIsRUFBb0IsV0FBVSw2QkFBOUIsR0FBUDtBQUNEO0FBQ0QsZUFBTyx3Q0FBTSxLQUFLSCxLQUFLRyxFQUFoQixFQUFvQixXQUFVLGVBQTlCLEdBQVA7QUFDRCxPQUxELENBRGM7QUFBQSxLOzs7eUJBU2hCQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBSUgsS0FBS1AsS0FKRjtBQUFBLFFBRUxLLFdBRkssVUFFTEEsV0FGSztBQUFBLFFBRVFHLGlCQUZSLFVBRVFBLGlCQUZSO0FBQUEsUUFFMkJDLGlCQUYzQixVQUUyQkEsaUJBRjNCO0FBQUEsUUFFOENDLGVBRjlDLFVBRThDQSxlQUY5QztBQUFBLFFBR0xULEtBSEssVUFHTEEsS0FISzs7QUFLUCxXQUNFO0FBQUE7QUFBQSxRQUFLLElBQUcsZUFBUjtBQUNFLGlEQUFTLFdBQVUsYUFBbkIsR0FERjtBQUVFO0FBQUE7QUFBQSxVQUFTLFdBQVUsZUFBbkI7QUFDR1EsNkJBQ0Q7QUFBQTtBQUFBLFlBQUssSUFBRyxtQkFBUjtBQUNHLGVBQUtWLGFBQUw7QUFESCxTQUZGO0FBTUU7QUFBQTtBQUFBLFlBQUssSUFBRyxnQkFBUjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLDBCQUFVTSxnQkFBZ0IsQ0FENUI7QUFFRSxvQkFBRyxlQUZMO0FBR0UseUJBQVM7QUFBQSx5QkFBUyxPQUFLTCxLQUFMLENBQVdXLFVBQVgsQ0FBc0JDLEtBQXRCLEVBQTZCUCxjQUFjLENBQTNDLENBQVQ7QUFBQTtBQUhYO0FBS0U7QUFMRjtBQURGLFdBREY7QUFVRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxvQkFBRyxhQURMO0FBRUUseUJBQVMsS0FBS0wsS0FBTCxDQUFXYSxJQUZ0QjtBQUdFLDBCQUFVLEtBQUtiLEtBQUwsQ0FBV2M7QUFIdkI7QUFLR04sZ0NBQWtCSztBQUxyQixhQURGO0FBU0U7QUFBQTtBQUFBO0FBQ0Usb0JBQUcsZUFETDtBQUVFLHlCQUFTLEtBQUtiLEtBQUwsQ0FBV2UsTUFGdEI7QUFHRSwwQkFBVSxLQUFLZixLQUFMLENBQVdnQjtBQUh2QjtBQUtHUixnQ0FBa0JPO0FBTHJCO0FBVEYsV0FWRjtBQTJCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSwwQkFBVVYsZ0JBQWdCSixNQUFNZ0IsTUFBTixHQUFlLENBRDNDO0FBRUUsb0JBQUcsV0FGTDtBQUdFLHlCQUFTO0FBQUEseUJBQVMsT0FBS2pCLEtBQUwsQ0FBV1csVUFBWCxDQUFzQkMsS0FBdEIsRUFBNkJQLGNBQWMsQ0FBM0MsQ0FBVDtBQUFBO0FBSFg7QUFLRTtBQUxGO0FBREY7QUEzQkY7QUFORixPQUZGO0FBOENFO0FBQUE7QUFBQSxVQUFTLFdBQVUsY0FBbkI7QUFDR0ssMkJBQ0M7QUFBQTtBQUFBLFlBQUssV0FBVSx3QkFBZjtBQUNFLDJEQUFTLFdBQVUsd0JBQW5CLEdBREY7QUFFR0YsNEJBQWtCVTtBQUZyQjtBQUZKO0FBOUNGLEtBREY7QUF3REQsRzs7O0VBakd1QyxnQkFBTUMsYSxVQW9CdkNDLFksR0FBZTtBQUNwQlgscUJBQW1CLElBREM7QUFFcEJLLGVBQWEsS0FGTztBQUdwQkUsaUJBQWUsS0FISztBQUlwQk4sbUJBQWlCO0FBSkcsQztrQkFwQkhaLFkiLCJmaWxlIjoid2l6YXJkLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCBGYUNhcmV0TGVmdCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2FyZXQtbGVmdCc7XG5pbXBvcnQgRmFDYXJldFJpZ2h0IGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jYXJldC1yaWdodCc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuXG5pbXBvcnQgJy4vd2l6YXJkLWZvb3Rlci5jb21wb25lbnQuc2Nzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2l6YXJkRm9vdGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2F2ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkaXNhYmxlU2F2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGRpc2FibGVDYW5jZWw6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvY2FsaXphdGlvblRleHRzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc2F2ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICAgIGNhbmNlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKS5pc1JlcXVpcmVkLFxuICAgICAgY29tcG9uZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdFBhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY3VycmVudFN0ZXA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBzaG93UGFnZUluZGljYXRvcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1NhdmVTdWNjZXNzOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNob3dQYWdlSW5kaWNhdG9yOiB0cnVlLFxuICAgIGRpc2FibGVTYXZlOiBmYWxzZSxcbiAgICBkaXNhYmxlQ2FuY2VsOiBmYWxzZSxcbiAgICBzaG93U2F2ZVN1Y2Nlc3M6IGZhbHNlLFxuICB9O1xuXG4gIGdldEluZGljYXRvcnMgPSAoKSA9PiAoXG4gICAgdGhpcy5wcm9wcy5zdGVwcy5tYXAoKHN0ZXAsIGkpID0+IHtcbiAgICAgIGlmIChpID09PSB0aGlzLnByb3BzLmN1cnJlbnRTdGVwKSB7XG4gICAgICAgIHJldHVybiA8c3BhbiBrZXk9e3N0ZXAuaWR9IGNsYXNzTmFtZT1cInRhYi1pbmRpY2F0b3IgdGFiLWhpZ2hsaWdodFwiIC8+O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDxzcGFuIGtleT17c3RlcC5pZH0gY2xhc3NOYW1lPVwidGFiLWluZGljYXRvclwiIC8+O1xuICAgIH0pXG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGN1cnJlbnRTdGVwLCBsb2NhbGl6YXRpb25UZXh0cywgc2hvd1BhZ2VJbmRpY2F0b3IsIHNob3dTYXZlU3VjY2VzcyxcbiAgICAgIHN0ZXBzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwid2l6YXJkLWZvb3RlclwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsZWZ0IGNvbHVtblwiIC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNlbnRlciBjb2x1bW5cIj5cbiAgICAgICAgICB7c2hvd1BhZ2VJbmRpY2F0b3IgJiZcbiAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tLWluZGljYXRvcnNcIj5cbiAgICAgICAgICAgIHt0aGlzLmdldEluZGljYXRvcnMoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBpZD1cImJvdHRvbS1idXR0b25zXCI+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50U3RlcCA9PT0gMH1cbiAgICAgICAgICAgICAgICBpZD1cInByZXZpb3VzLXN0ZXBcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMucHJvcHMuc2VsZWN0UGFnZShldmVudCwgY3VycmVudFN0ZXAgLSAxKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGYUNhcmV0TGVmdCAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaWQ9XCJzYXZlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5zYXZlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVTYXZlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xvY2FsaXphdGlvblRleHRzLnNhdmV9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBpZD1cImNhbmNlbC1idXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2FuY2VsfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVDYW5jZWx9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bG9jYWxpemF0aW9uVGV4dHMuY2FuY2VsfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxfVxuICAgICAgICAgICAgICAgIGlkPVwibmV4dC1zdGVwXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB0aGlzLnByb3BzLnNlbGVjdFBhZ2UoZXZlbnQsIGN1cnJlbnRTdGVwICsgMSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmFDYXJldFJpZ2h0IC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJpZ2h0IGNvbHVtblwiPlxuICAgICAgICAgIHtzaG93U2F2ZVN1Y2Nlc3MgJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2F2ZS1zdWNjZXNzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8RmFDaGVjayBjbGFzc05hbWU9XCJzYXZlLXN1Y2Nlc3MtaW5kaWNhdG9yXCIgLz5cbiAgICAgICAgICAgICAge2xvY2FsaXphdGlvblRleHRzLnNhdmVkfVxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=
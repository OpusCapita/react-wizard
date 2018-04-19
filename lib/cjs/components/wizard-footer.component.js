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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC1mb290ZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJXaXphcmRGb290ZXIiLCJnZXRJbmRpY2F0b3JzIiwicHJvcHMiLCJzdGVwcyIsImxlbmd0aCIsIm1hcCIsInN0ZXAiLCJpIiwiY3VycmVudFN0ZXAiLCJpZCIsInJlbmRlciIsImxvY2FsaXphdGlvblRleHRzIiwic2hvd1BhZ2VJbmRpY2F0b3IiLCJzaG93U2F2ZVN1Y2Nlc3MiLCJzZWxlY3RQYWdlIiwiZXZlbnQiLCJzYXZlIiwiZGlzYWJsZVNhdmUiLCJjYW5jZWwiLCJkaXNhYmxlQ2FuY2VsIiwic2F2ZWQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBR3FCQSxZOzs7Ozs7Ozs7Ozs7Z0tBMkJuQkMsYSxHQUFnQjtBQUFBLGFBQ2QsTUFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxNQUFqQixHQUEwQixDQUExQixJQUErQixNQUFLRixLQUFMLENBQVdDLEtBQVgsQ0FBaUJFLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQy9ELFlBQUlBLE1BQU0sTUFBS0wsS0FBTCxDQUFXTSxXQUFyQixFQUFrQztBQUNoQyxpQkFBTyx3Q0FBTSxLQUFLRixLQUFLRyxFQUFoQixFQUFvQixXQUFVLDZCQUE5QixHQUFQO0FBQ0Q7QUFDRCxlQUFPLHdDQUFNLEtBQUtILEtBQUtHLEVBQWhCLEVBQW9CLFdBQVUsZUFBOUIsR0FBUDtBQUNELE9BTDhCLENBRGpCO0FBQUEsSzs7O3lCQVNoQkMsTSxxQkFBUztBQUFBOztBQUFBLGlCQUlILEtBQUtSLEtBSkY7QUFBQSxRQUVMTSxXQUZLLFVBRUxBLFdBRks7QUFBQSxRQUVRRyxpQkFGUixVQUVRQSxpQkFGUjtBQUFBLFFBRTJCQyxpQkFGM0IsVUFFMkJBLGlCQUYzQjtBQUFBLFFBRThDQyxlQUY5QyxVQUU4Q0EsZUFGOUM7QUFBQSxRQUdMVixLQUhLLFVBR0xBLEtBSEs7O0FBS1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxJQUFHLGVBQVI7QUFDRSxpREFBUyxXQUFVLGFBQW5CLEdBREY7QUFFRTtBQUFBO0FBQUEsVUFBUyxXQUFVLGVBQW5CO0FBQ0dTLDZCQUNEO0FBQUE7QUFBQSxZQUFLLElBQUcsbUJBQVI7QUFDRyxlQUFLWCxhQUFMO0FBREgsU0FGRjtBQU1FO0FBQUE7QUFBQSxZQUFLLElBQUcsZ0JBQVI7QUFDRTtBQUFBO0FBQUE7QUFDR0Usa0JBQU1DLE1BQU4sR0FBZSxDQUFmLElBQ0Q7QUFBQTtBQUFBO0FBQ0UsMEJBQVVJLGdCQUFnQixDQUQ1QjtBQUVFLG9CQUFHLGVBRkw7QUFHRSx5QkFBUztBQUFBLHlCQUFTLE9BQUtOLEtBQUwsQ0FBV1ksVUFBWCxDQUFzQkMsS0FBdEIsRUFBNkJQLGNBQWMsQ0FBM0MsQ0FBVDtBQUFBO0FBSFg7QUFLRTtBQUxGO0FBRkYsV0FERjtBQVdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLG9CQUFHLGFBREw7QUFFRSx5QkFBUyxLQUFLTixLQUFMLENBQVdjLElBRnRCO0FBR0UsMEJBQVUsS0FBS2QsS0FBTCxDQUFXZTtBQUh2QjtBQUtHTixnQ0FBa0JLO0FBTHJCLGFBREY7QUFTRTtBQUFBO0FBQUE7QUFDRSxvQkFBRyxlQURMO0FBRUUseUJBQVMsS0FBS2QsS0FBTCxDQUFXZ0IsTUFGdEI7QUFHRSwwQkFBVSxLQUFLaEIsS0FBTCxDQUFXaUI7QUFIdkI7QUFLR1IsZ0NBQWtCTztBQUxyQjtBQVRGLFdBWEY7QUE0QkU7QUFBQTtBQUFBO0FBQ0dmLGtCQUFNQyxNQUFOLEdBQWUsQ0FBZixJQUNEO0FBQUE7QUFBQTtBQUNFLDBCQUFVSSxnQkFBZ0JMLE1BQU1DLE1BQU4sR0FBZSxDQUQzQztBQUVFLG9CQUFHLFdBRkw7QUFHRSx5QkFBUztBQUFBLHlCQUFTLE9BQUtGLEtBQUwsQ0FBV1ksVUFBWCxDQUFzQkMsS0FBdEIsRUFBNkJQLGNBQWMsQ0FBM0MsQ0FBVDtBQUFBO0FBSFg7QUFLRTtBQUxGO0FBRkY7QUE1QkY7QUFORixPQUZGO0FBZ0RFO0FBQUE7QUFBQSxVQUFTLFdBQVUsY0FBbkI7QUFDR0ssMkJBQ0Q7QUFBQTtBQUFBLFlBQUssV0FBVSx3QkFBZjtBQUNFLDJEQUFTLFdBQVUsd0JBQW5CLEdBREY7QUFFR0YsNEJBQWtCUztBQUZyQjtBQUZGO0FBaERGLEtBREY7QUEwREQsRzs7O0VBbkd1QyxnQkFBTUMsYSxVQW9CdkNDLFksR0FBZTtBQUNwQlYscUJBQW1CLElBREM7QUFFcEJLLGVBQWEsS0FGTztBQUdwQkUsaUJBQWUsS0FISztBQUlwQk4sbUJBQWlCO0FBSkcsQztrQkFwQkhiLFkiLCJmaWxlIjoid2l6YXJkLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCBGYUNhcmV0TGVmdCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2FyZXQtbGVmdCc7XG5pbXBvcnQgRmFDYXJldFJpZ2h0IGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jYXJldC1yaWdodCc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuXG5pbXBvcnQgJy4vd2l6YXJkLWZvb3Rlci5jb21wb25lbnQuc2Nzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2l6YXJkRm9vdGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2F2ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkaXNhYmxlU2F2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGRpc2FibGVDYW5jZWw6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvY2FsaXphdGlvblRleHRzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc2F2ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICAgIGNhbmNlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBzZWxlY3RQYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgc2hvd1BhZ2VJbmRpY2F0b3I6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dTYXZlU3VjY2VzczogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaG93UGFnZUluZGljYXRvcjogdHJ1ZSxcbiAgICBkaXNhYmxlU2F2ZTogZmFsc2UsXG4gICAgZGlzYWJsZUNhbmNlbDogZmFsc2UsXG4gICAgc2hvd1NhdmVTdWNjZXNzOiBmYWxzZSxcbiAgfTtcblxuICBnZXRJbmRpY2F0b3JzID0gKCkgPT4gKFxuICAgIHRoaXMucHJvcHMuc3RlcHMubGVuZ3RoID4gMSAmJiB0aGlzLnByb3BzLnN0ZXBzLm1hcCgoc3RlcCwgaSkgPT4ge1xuICAgICAgaWYgKGkgPT09IHRoaXMucHJvcHMuY3VycmVudFN0ZXApIHtcbiAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17c3RlcC5pZH0gY2xhc3NOYW1lPVwidGFiLWluZGljYXRvciB0YWItaGlnaGxpZ2h0XCIgLz47XG4gICAgICB9XG4gICAgICByZXR1cm4gPHNwYW4ga2V5PXtzdGVwLmlkfSBjbGFzc05hbWU9XCJ0YWItaW5kaWNhdG9yXCIgLz47XG4gICAgfSlcbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVudFN0ZXAsIGxvY2FsaXphdGlvblRleHRzLCBzaG93UGFnZUluZGljYXRvciwgc2hvd1NhdmVTdWNjZXNzLFxuICAgICAgc3RlcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJ3aXphcmQtZm9vdGVyXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxlZnQgY29sdW1uXCIgLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2VudGVyIGNvbHVtblwiPlxuICAgICAgICAgIHtzaG93UGFnZUluZGljYXRvciAmJlxuICAgICAgICAgIDxkaXYgaWQ9XCJib3R0b20taW5kaWNhdG9yc1wiPlxuICAgICAgICAgICAge3RoaXMuZ2V0SW5kaWNhdG9ycygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICB7c3RlcHMubGVuZ3RoID4gMSAmJlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSAwfVxuICAgICAgICAgICAgICAgIGlkPVwicHJldmlvdXMtc3RlcFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gdGhpcy5wcm9wcy5zZWxlY3RQYWdlKGV2ZW50LCBjdXJyZW50U3RlcCAtIDEpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhQ2FyZXRMZWZ0IC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaWQ9XCJzYXZlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5zYXZlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVTYXZlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xvY2FsaXphdGlvblRleHRzLnNhdmV9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBpZD1cImNhbmNlbC1idXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2FuY2VsfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVDYW5jZWx9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bG9jYWxpemF0aW9uVGV4dHMuY2FuY2VsfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICB7c3RlcHMubGVuZ3RoID4gMSAmJlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxfVxuICAgICAgICAgICAgICAgIGlkPVwibmV4dC1zdGVwXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB0aGlzLnByb3BzLnNlbGVjdFBhZ2UoZXZlbnQsIGN1cnJlbnRTdGVwICsgMSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmFDYXJldFJpZ2h0IC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyaWdodCBjb2x1bW5cIj5cbiAgICAgICAgICB7c2hvd1NhdmVTdWNjZXNzICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYXZlLXN1Y2Nlc3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8RmFDaGVjayBjbGFzc05hbWU9XCJzYXZlLXN1Y2Nlc3MtaW5kaWNhdG9yXCIgLz5cbiAgICAgICAgICAgIHtsb2NhbGl6YXRpb25UZXh0cy5zYXZlZH1cbiAgICAgICAgICA8L2Rpdj59XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
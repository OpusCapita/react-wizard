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
                className: 'btn-primary',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC1mb290ZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJXaXphcmRGb290ZXIiLCJnZXRJbmRpY2F0b3JzIiwicHJvcHMiLCJzdGVwcyIsImxlbmd0aCIsIm1hcCIsInN0ZXAiLCJpIiwiY3VycmVudFN0ZXAiLCJpZCIsInJlbmRlciIsImxvY2FsaXphdGlvblRleHRzIiwic2hvd1BhZ2VJbmRpY2F0b3IiLCJzaG93U2F2ZVN1Y2Nlc3MiLCJzZWxlY3RQYWdlIiwiZXZlbnQiLCJzYXZlIiwiZGlzYWJsZVNhdmUiLCJjYW5jZWwiLCJkaXNhYmxlQ2FuY2VsIiwic2F2ZWQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7SUFHcUJBLFk7Ozs7Ozs7Ozs7OztnS0EyQm5CQyxhLEdBQWdCO0FBQUEsYUFDZCxNQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLE1BQWpCLEdBQTBCLENBQTFCLElBQStCLE1BQUtGLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkUsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDL0QsWUFBSUEsTUFBTSxNQUFLTCxLQUFMLENBQVdNLFdBQXJCLEVBQWtDO0FBQ2hDLGlCQUFPLHdDQUFNLEtBQUtGLEtBQUtHLEVBQWhCLEVBQW9CLFdBQVUsNkJBQTlCLEdBQVA7QUFDRDtBQUNELGVBQU8sd0NBQU0sS0FBS0gsS0FBS0csRUFBaEIsRUFBb0IsV0FBVSxlQUE5QixHQUFQO0FBQ0QsT0FMOEIsQ0FEakI7QUFBQSxLOzs7eUJBU2hCQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBSUgsS0FBS1IsS0FKRjtBQUFBLFFBRUxNLFdBRkssVUFFTEEsV0FGSztBQUFBLFFBRVFHLGlCQUZSLFVBRVFBLGlCQUZSO0FBQUEsUUFFMkJDLGlCQUYzQixVQUUyQkEsaUJBRjNCO0FBQUEsUUFFOENDLGVBRjlDLFVBRThDQSxlQUY5QztBQUFBLFFBR0xWLEtBSEssVUFHTEEsS0FISzs7QUFLUCxXQUNFO0FBQUE7QUFBQSxRQUFLLElBQUcsZUFBUjtBQUNFLGlEQUFTLFdBQVUsYUFBbkIsR0FERjtBQUVFO0FBQUE7QUFBQSxVQUFTLFdBQVUsZUFBbkI7QUFDR1MsNkJBQ0Q7QUFBQTtBQUFBLFlBQUssSUFBRyxtQkFBUjtBQUNHLGVBQUtYLGFBQUw7QUFESCxTQUZGO0FBTUU7QUFBQTtBQUFBLFlBQUssSUFBRyxnQkFBUjtBQUNFO0FBQUE7QUFBQTtBQUNHRSxrQkFBTUMsTUFBTixHQUFlLENBQWYsSUFDRDtBQUFDLG9DQUFEO0FBQUE7QUFDRSwwQkFBVUksZ0JBQWdCLENBRDVCO0FBRUUsb0JBQUcsZUFGTDtBQUdFLHlCQUFTO0FBQUEseUJBQVMsT0FBS04sS0FBTCxDQUFXWSxVQUFYLENBQXNCQyxLQUF0QixFQUE2QlAsY0FBYyxDQUEzQyxDQUFUO0FBQUE7QUFIWDtBQUtFLDRDQUFDLG1CQUFEO0FBTEY7QUFGRixXQURGO0FBV0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxvQ0FBRDtBQUFBO0FBQ0UsMkJBQVUsYUFEWjtBQUVFLG9CQUFHLGFBRkw7QUFHRSx5QkFBUyxLQUFLTixLQUFMLENBQVdjLElBSHRCO0FBSUUsMEJBQVUsS0FBS2QsS0FBTCxDQUFXZTtBQUp2QjtBQU1HTixnQ0FBa0JLO0FBTnJCLGFBREY7QUFVRTtBQUFDLG9DQUFEO0FBQUE7QUFDRSxvQkFBRyxlQURMO0FBRUUseUJBQVMsS0FBS2QsS0FBTCxDQUFXZ0IsTUFGdEI7QUFHRSwwQkFBVSxLQUFLaEIsS0FBTCxDQUFXaUI7QUFIdkI7QUFLR1IsZ0NBQWtCTztBQUxyQjtBQVZGLFdBWEY7QUE2QkU7QUFBQTtBQUFBO0FBQ0dmLGtCQUFNQyxNQUFOLEdBQWUsQ0FBZixJQUNEO0FBQUMsb0NBQUQ7QUFBQTtBQUNFLDBCQUFVSSxnQkFBZ0JMLE1BQU1DLE1BQU4sR0FBZSxDQUQzQztBQUVFLG9CQUFHLFdBRkw7QUFHRSx5QkFBUztBQUFBLHlCQUFTLE9BQUtGLEtBQUwsQ0FBV1ksVUFBWCxDQUFzQkMsS0FBdEIsRUFBNkJQLGNBQWMsQ0FBM0MsQ0FBVDtBQUFBO0FBSFg7QUFLRSw0Q0FBQyxvQkFBRDtBQUxGO0FBRkY7QUE3QkY7QUFORixPQUZGO0FBaURFO0FBQUE7QUFBQSxVQUFTLFdBQVUsY0FBbkI7QUFDR0ssMkJBQ0Q7QUFBQTtBQUFBLFlBQUssV0FBVSx3QkFBZjtBQUNFLHdDQUFDLGVBQUQsSUFBUyxXQUFVLHdCQUFuQixHQURGO0FBRUdGLDRCQUFrQlM7QUFGckI7QUFGRjtBQWpERixLQURGO0FBMkRELEc7OztFQXBHdUNDLGdCQUFNQyxhLFVBb0J2Q0MsWSxHQUFlO0FBQ3BCWCxxQkFBbUIsSUFEQztBQUVwQkssZUFBYSxLQUZPO0FBR3BCRSxpQkFBZSxLQUhLO0FBSXBCTixtQkFBaUI7QUFKRyxDO2tCQXBCSGIsWSIsImZpbGUiOiJ3aXphcmQtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IEZhQ2FyZXRMZWZ0IGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jYXJldC1sZWZ0JztcbmltcG9ydCBGYUNhcmV0UmlnaHQgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NhcmV0LXJpZ2h0JztcbmltcG9ydCBGYUNoZWNrIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGVjayc7XG5cbmltcG9ydCAnLi93aXphcmQtZm9vdGVyLmNvbXBvbmVudC5zY3NzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXphcmRGb290ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzYXZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGRpc2FibGVTYXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGlzYWJsZUNhbmNlbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9jYWxpemF0aW9uVGV4dHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzYXZlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgICAgY2FuY2VsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgc3RlcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgICAgY29tcG9uZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdFBhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY3VycmVudFN0ZXA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBzaG93UGFnZUluZGljYXRvcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1NhdmVTdWNjZXNzOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNob3dQYWdlSW5kaWNhdG9yOiB0cnVlLFxuICAgIGRpc2FibGVTYXZlOiBmYWxzZSxcbiAgICBkaXNhYmxlQ2FuY2VsOiBmYWxzZSxcbiAgICBzaG93U2F2ZVN1Y2Nlc3M6IGZhbHNlLFxuICB9O1xuXG4gIGdldEluZGljYXRvcnMgPSAoKSA9PiAoXG4gICAgdGhpcy5wcm9wcy5zdGVwcy5sZW5ndGggPiAxICYmIHRoaXMucHJvcHMuc3RlcHMubWFwKChzdGVwLCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gdGhpcy5wcm9wcy5jdXJyZW50U3RlcCkge1xuICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtzdGVwLmlkfSBjbGFzc05hbWU9XCJ0YWItaW5kaWNhdG9yIHRhYi1oaWdobGlnaHRcIiAvPjtcbiAgICAgIH1cbiAgICAgIHJldHVybiA8c3BhbiBrZXk9e3N0ZXAuaWR9IGNsYXNzTmFtZT1cInRhYi1pbmRpY2F0b3JcIiAvPjtcbiAgICB9KVxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50U3RlcCwgbG9jYWxpemF0aW9uVGV4dHMsIHNob3dQYWdlSW5kaWNhdG9yLCBzaG93U2F2ZVN1Y2Nlc3MsXG4gICAgICBzdGVwcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIndpemFyZC1mb290ZXJcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGVmdCBjb2x1bW5cIiAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjZW50ZXIgY29sdW1uXCI+XG4gICAgICAgICAge3Nob3dQYWdlSW5kaWNhdG9yICYmXG4gICAgICAgICAgPGRpdiBpZD1cImJvdHRvbS1pbmRpY2F0b3JzXCI+XG4gICAgICAgICAgICB7dGhpcy5nZXRJbmRpY2F0b3JzKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgaWQ9XCJib3R0b20tYnV0dG9uc1wiPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgIHtzdGVwcy5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFN0ZXAgPT09IDB9XG4gICAgICAgICAgICAgICAgaWQ9XCJwcmV2aW91cy1zdGVwXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB0aGlzLnByb3BzLnNlbGVjdFBhZ2UoZXZlbnQsIGN1cnJlbnRTdGVwIC0gMSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmFDYXJldExlZnQgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+fVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzYXZlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5zYXZlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVTYXZlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xvY2FsaXphdGlvblRleHRzLnNhdmV9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBpZD1cImNhbmNlbC1idXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2FuY2VsfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVDYW5jZWx9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bG9jYWxpemF0aW9uVGV4dHMuY2FuY2VsfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICB7c3RlcHMubGVuZ3RoID4gMSAmJlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxfVxuICAgICAgICAgICAgICAgIGlkPVwibmV4dC1zdGVwXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB0aGlzLnByb3BzLnNlbGVjdFBhZ2UoZXZlbnQsIGN1cnJlbnRTdGVwICsgMSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmFDYXJldFJpZ2h0IC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyaWdodCBjb2x1bW5cIj5cbiAgICAgICAgICB7c2hvd1NhdmVTdWNjZXNzICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYXZlLXN1Y2Nlc3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8RmFDaGVjayBjbGFzc05hbWU9XCJzYXZlLXN1Y2Nlc3MtaW5kaWNhdG9yXCIgLz5cbiAgICAgICAgICAgIHtsb2NhbGl6YXRpb25UZXh0cy5zYXZlZH1cbiAgICAgICAgICA8L2Rpdj59XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
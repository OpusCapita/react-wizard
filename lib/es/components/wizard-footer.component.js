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
}(React.PureComponent), _class.defaultProps = {
  showPageIndicator: true,
  disableSave: false,
  disableCancel: false,
  showSaveSuccess: false
}, _temp2);
export { WizardFooter as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC1mb290ZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsIkZhQ2FyZXRMZWZ0IiwiRmFDYXJldFJpZ2h0IiwiRmFDaGVjayIsIldpemFyZEZvb3RlciIsImdldEluZGljYXRvcnMiLCJwcm9wcyIsInN0ZXBzIiwibGVuZ3RoIiwibWFwIiwic3RlcCIsImkiLCJjdXJyZW50U3RlcCIsImlkIiwicmVuZGVyIiwibG9jYWxpemF0aW9uVGV4dHMiLCJzaG93UGFnZUluZGljYXRvciIsInNob3dTYXZlU3VjY2VzcyIsInNlbGVjdFBhZ2UiLCJldmVudCIsInNhdmUiLCJkaXNhYmxlU2F2ZSIsImNhbmNlbCIsImRpc2FibGVDYW5jZWwiLCJzYXZlZCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLGlCQUF2Qjs7QUFFQSxPQUFPQyxXQUFQLE1BQXdCLCtCQUF4QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsZ0NBQXpCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiwwQkFBcEI7O0FBRUEsT0FBTyxnQ0FBUDs7SUFHcUJDLFk7Ozs7Ozs7Ozs7OztnS0EyQm5CQyxhLEdBQWdCO0FBQUEsYUFDZCxNQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLE1BQWpCLEdBQTBCLENBQTFCLElBQStCLE1BQUtGLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkUsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDL0QsWUFBSUEsTUFBTSxNQUFLTCxLQUFMLENBQVdNLFdBQXJCLEVBQWtDO0FBQ2hDLGlCQUFPLDhCQUFNLEtBQUtGLEtBQUtHLEVBQWhCLEVBQW9CLFdBQVUsNkJBQTlCLEdBQVA7QUFDRDtBQUNELGVBQU8sOEJBQU0sS0FBS0gsS0FBS0csRUFBaEIsRUFBb0IsV0FBVSxlQUE5QixHQUFQO0FBQ0QsT0FMOEIsQ0FEakI7QUFBQSxLOzs7eUJBU2hCQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBSUgsS0FBS1IsS0FKRjtBQUFBLFFBRUxNLFdBRkssVUFFTEEsV0FGSztBQUFBLFFBRVFHLGlCQUZSLFVBRVFBLGlCQUZSO0FBQUEsUUFFMkJDLGlCQUYzQixVQUUyQkEsaUJBRjNCO0FBQUEsUUFFOENDLGVBRjlDLFVBRThDQSxlQUY5QztBQUFBLFFBR0xWLEtBSEssVUFHTEEsS0FISzs7QUFLUCxXQUNFO0FBQUE7QUFBQSxRQUFLLElBQUcsZUFBUjtBQUNFLHVDQUFTLFdBQVUsYUFBbkIsR0FERjtBQUVFO0FBQUE7QUFBQSxVQUFTLFdBQVUsZUFBbkI7QUFDR1MsNkJBQ0Q7QUFBQTtBQUFBLFlBQUssSUFBRyxtQkFBUjtBQUNHLGVBQUtYLGFBQUw7QUFESCxTQUZGO0FBTUU7QUFBQTtBQUFBLFlBQUssSUFBRyxnQkFBUjtBQUNFO0FBQUE7QUFBQTtBQUNHRSxrQkFBTUMsTUFBTixHQUFlLENBQWYsSUFDRDtBQUFDLG9CQUFEO0FBQUE7QUFDRSwwQkFBVUksZ0JBQWdCLENBRDVCO0FBRUUsb0JBQUcsZUFGTDtBQUdFLHlCQUFTO0FBQUEseUJBQVMsT0FBS04sS0FBTCxDQUFXWSxVQUFYLENBQXNCQyxLQUF0QixFQUE2QlAsY0FBYyxDQUEzQyxDQUFUO0FBQUE7QUFIWDtBQUtFLGtDQUFDLFdBQUQ7QUFMRjtBQUZGLFdBREY7QUFXRTtBQUFBO0FBQUE7QUFDRTtBQUFDLG9CQUFEO0FBQUE7QUFDRSxvQkFBRyxhQURMO0FBRUUseUJBQVMsS0FBS04sS0FBTCxDQUFXYyxJQUZ0QjtBQUdFLDBCQUFVLEtBQUtkLEtBQUwsQ0FBV2U7QUFIdkI7QUFLR04sZ0NBQWtCSztBQUxyQixhQURGO0FBU0U7QUFBQyxvQkFBRDtBQUFBO0FBQ0Usb0JBQUcsZUFETDtBQUVFLHlCQUFTLEtBQUtkLEtBQUwsQ0FBV2dCLE1BRnRCO0FBR0UsMEJBQVUsS0FBS2hCLEtBQUwsQ0FBV2lCO0FBSHZCO0FBS0dSLGdDQUFrQk87QUFMckI7QUFURixXQVhGO0FBNEJFO0FBQUE7QUFBQTtBQUNHZixrQkFBTUMsTUFBTixHQUFlLENBQWYsSUFDRDtBQUFDLG9CQUFEO0FBQUE7QUFDRSwwQkFBVUksZ0JBQWdCTCxNQUFNQyxNQUFOLEdBQWUsQ0FEM0M7QUFFRSxvQkFBRyxXQUZMO0FBR0UseUJBQVM7QUFBQSx5QkFBUyxPQUFLRixLQUFMLENBQVdZLFVBQVgsQ0FBc0JDLEtBQXRCLEVBQTZCUCxjQUFjLENBQTNDLENBQVQ7QUFBQTtBQUhYO0FBS0Usa0NBQUMsWUFBRDtBQUxGO0FBRkY7QUE1QkY7QUFORixPQUZGO0FBZ0RFO0FBQUE7QUFBQSxVQUFTLFdBQVUsY0FBbkI7QUFDR0ssMkJBQ0Q7QUFBQTtBQUFBLFlBQUssV0FBVSx3QkFBZjtBQUNFLDhCQUFDLE9BQUQsSUFBUyxXQUFVLHdCQUFuQixHQURGO0FBRUdGLDRCQUFrQlM7QUFGckI7QUFGRjtBQWhERixLQURGO0FBMERELEc7OztFQW5HdUMxQixNQUFNMkIsYSxVQW9CdkNDLFksR0FBZTtBQUNwQlYscUJBQW1CLElBREM7QUFFcEJLLGVBQWEsS0FGTztBQUdwQkUsaUJBQWUsS0FISztBQUlwQk4sbUJBQWlCO0FBSkcsQztTQXBCSGIsWSIsImZpbGUiOiJ3aXphcmQtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IEZhQ2FyZXRMZWZ0IGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jYXJldC1sZWZ0JztcbmltcG9ydCBGYUNhcmV0UmlnaHQgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NhcmV0LXJpZ2h0JztcbmltcG9ydCBGYUNoZWNrIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGVjayc7XG5cbmltcG9ydCAnLi93aXphcmQtZm9vdGVyLmNvbXBvbmVudC5zY3NzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXphcmRGb290ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzYXZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGRpc2FibGVTYXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGlzYWJsZUNhbmNlbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9jYWxpemF0aW9uVGV4dHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzYXZlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgICAgY2FuY2VsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgc3RlcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgICAgY29tcG9uZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdFBhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY3VycmVudFN0ZXA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBzaG93UGFnZUluZGljYXRvcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1NhdmVTdWNjZXNzOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNob3dQYWdlSW5kaWNhdG9yOiB0cnVlLFxuICAgIGRpc2FibGVTYXZlOiBmYWxzZSxcbiAgICBkaXNhYmxlQ2FuY2VsOiBmYWxzZSxcbiAgICBzaG93U2F2ZVN1Y2Nlc3M6IGZhbHNlLFxuICB9O1xuXG4gIGdldEluZGljYXRvcnMgPSAoKSA9PiAoXG4gICAgdGhpcy5wcm9wcy5zdGVwcy5sZW5ndGggPiAxICYmIHRoaXMucHJvcHMuc3RlcHMubWFwKChzdGVwLCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gdGhpcy5wcm9wcy5jdXJyZW50U3RlcCkge1xuICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtzdGVwLmlkfSBjbGFzc05hbWU9XCJ0YWItaW5kaWNhdG9yIHRhYi1oaWdobGlnaHRcIiAvPjtcbiAgICAgIH1cbiAgICAgIHJldHVybiA8c3BhbiBrZXk9e3N0ZXAuaWR9IGNsYXNzTmFtZT1cInRhYi1pbmRpY2F0b3JcIiAvPjtcbiAgICB9KVxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50U3RlcCwgbG9jYWxpemF0aW9uVGV4dHMsIHNob3dQYWdlSW5kaWNhdG9yLCBzaG93U2F2ZVN1Y2Nlc3MsXG4gICAgICBzdGVwcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIndpemFyZC1mb290ZXJcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGVmdCBjb2x1bW5cIiAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjZW50ZXIgY29sdW1uXCI+XG4gICAgICAgICAge3Nob3dQYWdlSW5kaWNhdG9yICYmXG4gICAgICAgICAgPGRpdiBpZD1cImJvdHRvbS1pbmRpY2F0b3JzXCI+XG4gICAgICAgICAgICB7dGhpcy5nZXRJbmRpY2F0b3JzKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgaWQ9XCJib3R0b20tYnV0dG9uc1wiPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgIHtzdGVwcy5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFN0ZXAgPT09IDB9XG4gICAgICAgICAgICAgICAgaWQ9XCJwcmV2aW91cy1zdGVwXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB0aGlzLnByb3BzLnNlbGVjdFBhZ2UoZXZlbnQsIGN1cnJlbnRTdGVwIC0gMSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmFDYXJldExlZnQgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+fVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBpZD1cInNhdmUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnNhdmV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZVNhdmV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bG9jYWxpemF0aW9uVGV4dHMuc2F2ZX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPVwiY2FuY2VsLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jYW5jZWx9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZUNhbmNlbH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsb2NhbGl6YXRpb25UZXh0cy5jYW5jZWx9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgIHtzdGVwcy5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDF9XG4gICAgICAgICAgICAgICAgaWQ9XCJuZXh0LXN0ZXBcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMucHJvcHMuc2VsZWN0UGFnZShldmVudCwgY3VycmVudFN0ZXAgKyAxKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGYUNhcmV0UmlnaHQgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+fVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJpZ2h0IGNvbHVtblwiPlxuICAgICAgICAgIHtzaG93U2F2ZVN1Y2Nlc3MgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhdmUtc3VjY2Vzcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxGYUNoZWNrIGNsYXNzTmFtZT1cInNhdmUtc3VjY2Vzcy1pbmRpY2F0b3JcIiAvPlxuICAgICAgICAgICAge2xvY2FsaXphdGlvblRleHRzLnNhdmVkfVxuICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19
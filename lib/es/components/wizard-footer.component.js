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
      return _this.props.steps.map(function (step, i) {
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
            React.createElement(
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
            React.createElement(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC1mb290ZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsIkZhQ2FyZXRMZWZ0IiwiRmFDYXJldFJpZ2h0IiwiRmFDaGVjayIsIldpemFyZEZvb3RlciIsImdldEluZGljYXRvcnMiLCJwcm9wcyIsInN0ZXBzIiwibWFwIiwic3RlcCIsImkiLCJjdXJyZW50U3RlcCIsImlkIiwicmVuZGVyIiwibG9jYWxpemF0aW9uVGV4dHMiLCJzaG93UGFnZUluZGljYXRvciIsInNob3dTYXZlU3VjY2VzcyIsInNlbGVjdFBhZ2UiLCJldmVudCIsInNhdmUiLCJkaXNhYmxlU2F2ZSIsImNhbmNlbCIsImRpc2FibGVDYW5jZWwiLCJsZW5ndGgiLCJzYXZlZCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLGlCQUF2Qjs7QUFFQSxPQUFPQyxXQUFQLE1BQXdCLCtCQUF4QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsZ0NBQXpCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiwwQkFBcEI7O0FBRUEsT0FBTyxnQ0FBUDs7SUFHcUJDLFk7Ozs7Ozs7Ozs7OztnS0EyQm5CQyxhLEdBQWdCO0FBQUEsYUFDZCxNQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ2hDLFlBQUlBLE1BQU0sTUFBS0osS0FBTCxDQUFXSyxXQUFyQixFQUFrQztBQUNoQyxpQkFBTyw4QkFBTSxLQUFLRixLQUFLRyxFQUFoQixFQUFvQixXQUFVLDZCQUE5QixHQUFQO0FBQ0Q7QUFDRCxlQUFPLDhCQUFNLEtBQUtILEtBQUtHLEVBQWhCLEVBQW9CLFdBQVUsZUFBOUIsR0FBUDtBQUNELE9BTEQsQ0FEYztBQUFBLEs7Ozt5QkFTaEJDLE0scUJBQVM7QUFBQTs7QUFBQSxpQkFJSCxLQUFLUCxLQUpGO0FBQUEsUUFFTEssV0FGSyxVQUVMQSxXQUZLO0FBQUEsUUFFUUcsaUJBRlIsVUFFUUEsaUJBRlI7QUFBQSxRQUUyQkMsaUJBRjNCLFVBRTJCQSxpQkFGM0I7QUFBQSxRQUU4Q0MsZUFGOUMsVUFFOENBLGVBRjlDO0FBQUEsUUFHTFQsS0FISyxVQUdMQSxLQUhLOztBQUtQLFdBQ0U7QUFBQTtBQUFBLFFBQUssSUFBRyxlQUFSO0FBQ0UsdUNBQVMsV0FBVSxhQUFuQixHQURGO0FBRUU7QUFBQTtBQUFBLFVBQVMsV0FBVSxlQUFuQjtBQUNHUSw2QkFDRDtBQUFBO0FBQUEsWUFBSyxJQUFHLG1CQUFSO0FBQ0csZUFBS1YsYUFBTDtBQURILFNBRkY7QUFNRTtBQUFBO0FBQUEsWUFBSyxJQUFHLGdCQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxvQkFBRDtBQUFBO0FBQ0UsMEJBQVVNLGdCQUFnQixDQUQ1QjtBQUVFLG9CQUFHLGVBRkw7QUFHRSx5QkFBUztBQUFBLHlCQUFTLE9BQUtMLEtBQUwsQ0FBV1csVUFBWCxDQUFzQkMsS0FBdEIsRUFBNkJQLGNBQWMsQ0FBM0MsQ0FBVDtBQUFBO0FBSFg7QUFLRSxrQ0FBQyxXQUFEO0FBTEY7QUFERixXQURGO0FBVUU7QUFBQTtBQUFBO0FBQ0U7QUFBQyxvQkFBRDtBQUFBO0FBQ0Usb0JBQUcsYUFETDtBQUVFLHlCQUFTLEtBQUtMLEtBQUwsQ0FBV2EsSUFGdEI7QUFHRSwwQkFBVSxLQUFLYixLQUFMLENBQVdjO0FBSHZCO0FBS0dOLGdDQUFrQks7QUFMckIsYUFERjtBQVNFO0FBQUMsb0JBQUQ7QUFBQTtBQUNFLG9CQUFHLGVBREw7QUFFRSx5QkFBUyxLQUFLYixLQUFMLENBQVdlLE1BRnRCO0FBR0UsMEJBQVUsS0FBS2YsS0FBTCxDQUFXZ0I7QUFIdkI7QUFLR1IsZ0NBQWtCTztBQUxyQjtBQVRGLFdBVkY7QUEyQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQyxvQkFBRDtBQUFBO0FBQ0UsMEJBQVVWLGdCQUFnQkosTUFBTWdCLE1BQU4sR0FBZSxDQUQzQztBQUVFLG9CQUFHLFdBRkw7QUFHRSx5QkFBUztBQUFBLHlCQUFTLE9BQUtqQixLQUFMLENBQVdXLFVBQVgsQ0FBc0JDLEtBQXRCLEVBQTZCUCxjQUFjLENBQTNDLENBQVQ7QUFBQTtBQUhYO0FBS0Usa0NBQUMsWUFBRDtBQUxGO0FBREY7QUEzQkY7QUFORixPQUZGO0FBOENFO0FBQUE7QUFBQSxVQUFTLFdBQVUsY0FBbkI7QUFDR0ssMkJBQ0M7QUFBQTtBQUFBLFlBQUssV0FBVSx3QkFBZjtBQUNFLDhCQUFDLE9BQUQsSUFBUyxXQUFVLHdCQUFuQixHQURGO0FBRUdGLDRCQUFrQlU7QUFGckI7QUFGSjtBQTlDRixLQURGO0FBd0RELEc7OztFQWpHdUMxQixNQUFNMkIsYSxVQW9CdkNDLFksR0FBZTtBQUNwQlgscUJBQW1CLElBREM7QUFFcEJLLGVBQWEsS0FGTztBQUdwQkUsaUJBQWUsS0FISztBQUlwQk4sbUJBQWlCO0FBSkcsQztTQXBCSFosWSIsImZpbGUiOiJ3aXphcmQtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IEZhQ2FyZXRMZWZ0IGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jYXJldC1sZWZ0JztcbmltcG9ydCBGYUNhcmV0UmlnaHQgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NhcmV0LXJpZ2h0JztcbmltcG9ydCBGYUNoZWNrIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGVjayc7XG5cbmltcG9ydCAnLi93aXphcmQtZm9vdGVyLmNvbXBvbmVudC5zY3NzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXphcmRGb290ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzYXZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGRpc2FibGVTYXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGlzYWJsZUNhbmNlbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9jYWxpemF0aW9uVGV4dHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzYXZlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgICAgY2FuY2VsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgc3RlcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLmlzUmVxdWlyZWQsXG4gICAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgfSkpLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0UGFnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjdXJyZW50U3RlcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHNob3dQYWdlSW5kaWNhdG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93U2F2ZVN1Y2Nlc3M6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2hvd1BhZ2VJbmRpY2F0b3I6IHRydWUsXG4gICAgZGlzYWJsZVNhdmU6IGZhbHNlLFxuICAgIGRpc2FibGVDYW5jZWw6IGZhbHNlLFxuICAgIHNob3dTYXZlU3VjY2VzczogZmFsc2UsXG4gIH07XG5cbiAgZ2V0SW5kaWNhdG9ycyA9ICgpID0+IChcbiAgICB0aGlzLnByb3BzLnN0ZXBzLm1hcCgoc3RlcCwgaSkgPT4ge1xuICAgICAgaWYgKGkgPT09IHRoaXMucHJvcHMuY3VycmVudFN0ZXApIHtcbiAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17c3RlcC5pZH0gY2xhc3NOYW1lPVwidGFiLWluZGljYXRvciB0YWItaGlnaGxpZ2h0XCIgLz47XG4gICAgICB9XG4gICAgICByZXR1cm4gPHNwYW4ga2V5PXtzdGVwLmlkfSBjbGFzc05hbWU9XCJ0YWItaW5kaWNhdG9yXCIgLz47XG4gICAgfSlcbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVudFN0ZXAsIGxvY2FsaXphdGlvblRleHRzLCBzaG93UGFnZUluZGljYXRvciwgc2hvd1NhdmVTdWNjZXNzLFxuICAgICAgc3RlcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJ3aXphcmQtZm9vdGVyXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxlZnQgY29sdW1uXCIgLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2VudGVyIGNvbHVtblwiPlxuICAgICAgICAgIHtzaG93UGFnZUluZGljYXRvciAmJlxuICAgICAgICAgIDxkaXYgaWQ9XCJib3R0b20taW5kaWNhdG9yc1wiPlxuICAgICAgICAgICAge3RoaXMuZ2V0SW5kaWNhdG9ycygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSAwfVxuICAgICAgICAgICAgICAgIGlkPVwicHJldmlvdXMtc3RlcFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gdGhpcy5wcm9wcy5zZWxlY3RQYWdlKGV2ZW50LCBjdXJyZW50U3RlcCAtIDEpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhQ2FyZXRMZWZ0IC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBpZD1cInNhdmUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnNhdmV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZVNhdmV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bG9jYWxpemF0aW9uVGV4dHMuc2F2ZX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPVwiY2FuY2VsLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jYW5jZWx9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZUNhbmNlbH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsb2NhbGl6YXRpb25UZXh0cy5jYW5jZWx9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDF9XG4gICAgICAgICAgICAgICAgaWQ9XCJuZXh0LXN0ZXBcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMucHJvcHMuc2VsZWN0UGFnZShldmVudCwgY3VycmVudFN0ZXAgKyAxKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGYUNhcmV0UmlnaHQgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmlnaHQgY29sdW1uXCI+XG4gICAgICAgICAge3Nob3dTYXZlU3VjY2VzcyAmJlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYXZlLXN1Y2Nlc3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxGYUNoZWNrIGNsYXNzTmFtZT1cInNhdmUtc3VjY2Vzcy1pbmRpY2F0b3JcIiAvPlxuICAgICAgICAgICAgICB7bG9jYWxpemF0aW9uVGV4dHMuc2F2ZWR9XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
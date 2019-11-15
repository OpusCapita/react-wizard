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
                className: 'btn-primary',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC1mb290ZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsIkZhQ2FyZXRMZWZ0IiwiRmFDYXJldFJpZ2h0IiwiRmFDaGVjayIsIldpemFyZEZvb3RlciIsImdldEluZGljYXRvcnMiLCJwcm9wcyIsInN0ZXBzIiwibGVuZ3RoIiwibWFwIiwic3RlcCIsImkiLCJjdXJyZW50U3RlcCIsImlkIiwicmVuZGVyIiwibG9jYWxpemF0aW9uVGV4dHMiLCJzaG93UGFnZUluZGljYXRvciIsInNob3dTYXZlU3VjY2VzcyIsInNlbGVjdFBhZ2UiLCJldmVudCIsInNhdmUiLCJkaXNhYmxlU2F2ZSIsImNhbmNlbCIsImRpc2FibGVDYW5jZWwiLCJzYXZlZCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLGlCQUF2Qjs7QUFFQSxPQUFPQyxXQUFQLE1BQXdCLCtCQUF4QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsZ0NBQXpCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiwwQkFBcEI7O0FBRUEsT0FBTyxnQ0FBUDs7SUFHcUJDLFk7Ozs7Ozs7Ozs7OztnS0EyQm5CQyxhLEdBQWdCO0FBQUEsYUFDZCxNQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLE1BQWpCLEdBQTBCLENBQTFCLElBQStCLE1BQUtGLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkUsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDL0QsWUFBSUEsTUFBTSxNQUFLTCxLQUFMLENBQVdNLFdBQXJCLEVBQWtDO0FBQ2hDLGlCQUFPLDhCQUFNLEtBQUtGLEtBQUtHLEVBQWhCLEVBQW9CLFdBQVUsNkJBQTlCLEdBQVA7QUFDRDtBQUNELGVBQU8sOEJBQU0sS0FBS0gsS0FBS0csRUFBaEIsRUFBb0IsV0FBVSxlQUE5QixHQUFQO0FBQ0QsT0FMOEIsQ0FEakI7QUFBQSxLOzs7eUJBU2hCQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBSUgsS0FBS1IsS0FKRjtBQUFBLFFBRUxNLFdBRkssVUFFTEEsV0FGSztBQUFBLFFBRVFHLGlCQUZSLFVBRVFBLGlCQUZSO0FBQUEsUUFFMkJDLGlCQUYzQixVQUUyQkEsaUJBRjNCO0FBQUEsUUFFOENDLGVBRjlDLFVBRThDQSxlQUY5QztBQUFBLFFBR0xWLEtBSEssVUFHTEEsS0FISzs7QUFLUCxXQUNFO0FBQUE7QUFBQSxRQUFLLElBQUcsZUFBUjtBQUNFLHVDQUFTLFdBQVUsYUFBbkIsR0FERjtBQUVFO0FBQUE7QUFBQSxVQUFTLFdBQVUsZUFBbkI7QUFDR1MsNkJBQ0Q7QUFBQTtBQUFBLFlBQUssSUFBRyxtQkFBUjtBQUNHLGVBQUtYLGFBQUw7QUFESCxTQUZGO0FBTUU7QUFBQTtBQUFBLFlBQUssSUFBRyxnQkFBUjtBQUNFO0FBQUE7QUFBQTtBQUNHRSxrQkFBTUMsTUFBTixHQUFlLENBQWYsSUFDRDtBQUFDLG9CQUFEO0FBQUE7QUFDRSwwQkFBVUksZ0JBQWdCLENBRDVCO0FBRUUsb0JBQUcsZUFGTDtBQUdFLHlCQUFTO0FBQUEseUJBQVMsT0FBS04sS0FBTCxDQUFXWSxVQUFYLENBQXNCQyxLQUF0QixFQUE2QlAsY0FBYyxDQUEzQyxDQUFUO0FBQUE7QUFIWDtBQUtFLGtDQUFDLFdBQUQ7QUFMRjtBQUZGLFdBREY7QUFXRTtBQUFBO0FBQUE7QUFDRTtBQUFDLG9CQUFEO0FBQUE7QUFDRSwyQkFBVSxhQURaO0FBRUUsb0JBQUcsYUFGTDtBQUdFLHlCQUFTLEtBQUtOLEtBQUwsQ0FBV2MsSUFIdEI7QUFJRSwwQkFBVSxLQUFLZCxLQUFMLENBQVdlO0FBSnZCO0FBTUdOLGdDQUFrQks7QUFOckIsYUFERjtBQVVFO0FBQUMsb0JBQUQ7QUFBQTtBQUNFLG9CQUFHLGVBREw7QUFFRSx5QkFBUyxLQUFLZCxLQUFMLENBQVdnQixNQUZ0QjtBQUdFLDBCQUFVLEtBQUtoQixLQUFMLENBQVdpQjtBQUh2QjtBQUtHUixnQ0FBa0JPO0FBTHJCO0FBVkYsV0FYRjtBQTZCRTtBQUFBO0FBQUE7QUFDR2Ysa0JBQU1DLE1BQU4sR0FBZSxDQUFmLElBQ0Q7QUFBQyxvQkFBRDtBQUFBO0FBQ0UsMEJBQVVJLGdCQUFnQkwsTUFBTUMsTUFBTixHQUFlLENBRDNDO0FBRUUsb0JBQUcsV0FGTDtBQUdFLHlCQUFTO0FBQUEseUJBQVMsT0FBS0YsS0FBTCxDQUFXWSxVQUFYLENBQXNCQyxLQUF0QixFQUE2QlAsY0FBYyxDQUEzQyxDQUFUO0FBQUE7QUFIWDtBQUtFLGtDQUFDLFlBQUQ7QUFMRjtBQUZGO0FBN0JGO0FBTkYsT0FGRjtBQWlERTtBQUFBO0FBQUEsVUFBUyxXQUFVLGNBQW5CO0FBQ0dLLDJCQUNEO0FBQUE7QUFBQSxZQUFLLFdBQVUsd0JBQWY7QUFDRSw4QkFBQyxPQUFELElBQVMsV0FBVSx3QkFBbkIsR0FERjtBQUVHRiw0QkFBa0JTO0FBRnJCO0FBRkY7QUFqREYsS0FERjtBQTJERCxHOzs7RUFwR3VDMUIsTUFBTTJCLGEsVUFvQnZDQyxZLEdBQWU7QUFDcEJWLHFCQUFtQixJQURDO0FBRXBCSyxlQUFhLEtBRk87QUFHcEJFLGlCQUFlLEtBSEs7QUFJcEJOLG1CQUFpQjtBQUpHLEM7U0FwQkhiLFkiLCJmaWxlIjoid2l6YXJkLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCBGYUNhcmV0TGVmdCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2FyZXQtbGVmdCc7XG5pbXBvcnQgRmFDYXJldFJpZ2h0IGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jYXJldC1yaWdodCc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuXG5pbXBvcnQgJy4vd2l6YXJkLWZvb3Rlci5jb21wb25lbnQuc2Nzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2l6YXJkRm9vdGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2F2ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkaXNhYmxlU2F2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGRpc2FibGVDYW5jZWw6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvY2FsaXphdGlvblRleHRzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc2F2ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICAgIGNhbmNlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBzZWxlY3RQYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgc2hvd1BhZ2VJbmRpY2F0b3I6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dTYXZlU3VjY2VzczogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaG93UGFnZUluZGljYXRvcjogdHJ1ZSxcbiAgICBkaXNhYmxlU2F2ZTogZmFsc2UsXG4gICAgZGlzYWJsZUNhbmNlbDogZmFsc2UsXG4gICAgc2hvd1NhdmVTdWNjZXNzOiBmYWxzZSxcbiAgfTtcblxuICBnZXRJbmRpY2F0b3JzID0gKCkgPT4gKFxuICAgIHRoaXMucHJvcHMuc3RlcHMubGVuZ3RoID4gMSAmJiB0aGlzLnByb3BzLnN0ZXBzLm1hcCgoc3RlcCwgaSkgPT4ge1xuICAgICAgaWYgKGkgPT09IHRoaXMucHJvcHMuY3VycmVudFN0ZXApIHtcbiAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17c3RlcC5pZH0gY2xhc3NOYW1lPVwidGFiLWluZGljYXRvciB0YWItaGlnaGxpZ2h0XCIgLz47XG4gICAgICB9XG4gICAgICByZXR1cm4gPHNwYW4ga2V5PXtzdGVwLmlkfSBjbGFzc05hbWU9XCJ0YWItaW5kaWNhdG9yXCIgLz47XG4gICAgfSlcbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVudFN0ZXAsIGxvY2FsaXphdGlvblRleHRzLCBzaG93UGFnZUluZGljYXRvciwgc2hvd1NhdmVTdWNjZXNzLFxuICAgICAgc3RlcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJ3aXphcmQtZm9vdGVyXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxlZnQgY29sdW1uXCIgLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2VudGVyIGNvbHVtblwiPlxuICAgICAgICAgIHtzaG93UGFnZUluZGljYXRvciAmJlxuICAgICAgICAgIDxkaXYgaWQ9XCJib3R0b20taW5kaWNhdG9yc1wiPlxuICAgICAgICAgICAge3RoaXMuZ2V0SW5kaWNhdG9ycygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICB7c3RlcHMubGVuZ3RoID4gMSAmJlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSAwfVxuICAgICAgICAgICAgICAgIGlkPVwicHJldmlvdXMtc3RlcFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gdGhpcy5wcm9wcy5zZWxlY3RQYWdlKGV2ZW50LCBjdXJyZW50U3RlcCAtIDEpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhQ2FyZXRMZWZ0IC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGlkPVwic2F2ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2F2ZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlU2F2ZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsb2NhbGl6YXRpb25UZXh0cy5zYXZlfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaWQ9XCJjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNhbmNlbH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlQ2FuY2VsfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xvY2FsaXphdGlvblRleHRzLmNhbmNlbH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAge3N0ZXBzLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50U3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMX1cbiAgICAgICAgICAgICAgICBpZD1cIm5leHQtc3RlcFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gdGhpcy5wcm9wcy5zZWxlY3RQYWdlKGV2ZW50LCBjdXJyZW50U3RlcCArIDEpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhQ2FyZXRSaWdodCAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmlnaHQgY29sdW1uXCI+XG4gICAgICAgICAge3Nob3dTYXZlU3VjY2VzcyAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2F2ZS1zdWNjZXNzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEZhQ2hlY2sgY2xhc3NOYW1lPVwic2F2ZS1zdWNjZXNzLWluZGljYXRvclwiIC8+XG4gICAgICAgICAgICB7bG9jYWxpemF0aW9uVGV4dHMuc2F2ZWR9XG4gICAgICAgICAgPC9kaXY+fVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=
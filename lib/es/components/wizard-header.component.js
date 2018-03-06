function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from 'react-bootstrap';

import FaCaretLeft from 'react-icons/lib/fa/caret-left';
import FaCaretRight from 'react-icons/lib/fa/caret-right';
import FaCheck from 'react-icons/lib/fa/check';

import './wizard-header.component.scss';

var WizardHeader = function (_React$PureComponent) {
  _inherits(WizardHeader, _React$PureComponent);

  function WizardHeader() {
    _classCallCheck(this, WizardHeader);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this));

    _this.updateScroll = function () {
      if (_this.scrollbar.offsetWidth !== _this.scrollbar.scrollWidth) {
        _this.setState({
          showScroll: true
        });
      } else {
        _this.setState({
          showScroll: false
        });
      }
    };

    _this.centerSelectedTab = function (tabIndex) {
      if (_this.scrollbar.offsetWidth !== _this.scrollbar.scrollWidth) {
        var offsetLeft = 0;
        for (var i = 0; i < tabIndex; i += 1) {
          offsetLeft += _this.tabElements[i].offsetWidth;
        }
        _this.scrollbar.scrollLeft = offsetLeft + _this.tabElements[tabIndex].offsetWidth / 2 - _this.scrollbar.offsetWidth / 2;
      }
    };

    _this.scrollLeft = function () {
      _this.scrollbar.scrollLeft -= _this.scrollStep;
    };

    _this.scrollRight = function () {
      _this.scrollbar.scrollLeft += _this.scrollStep;
    };

    _this.validateStep = function (step) {
      if ('isValid' in step && !step.isValid) {
        return React.createElement(FaCheck, { className: 'save-success-indicator' });
      }
      return React.createElement('span', { style: { height: '30px' } });
    };

    _this.scrollStep = 50;

    _this.state = {
      showScroll: true
    };

    _this.tabElements = {};
    return _this;
  }

  WizardHeader.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.updateScroll);
    this.updateScroll();
  };

  WizardHeader.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.updateScroll);
  };

  WizardHeader.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      'div',
      { id: 'wizard-header' },
      this.state.showScroll && React.createElement(
        'button',
        { className: 'hidden-button', onClick: this.scrollLeft },
        React.createElement(FaCaretLeft, null)
      ),
      React.createElement(
        'ul',
        { ref: function ref(node) {
            _this2.scrollbar = node;
          } },
        this.props.steps.map(function (step, i) {
          var labelClassName = '';
          if (step.hasRequiredPropsErrors) {
            labelClassName = 'oc-mandatory-error';
          } else if (step.hasRequiredProps) {
            labelClassName = 'oc-mandatory';
          }
          return React.createElement(
            'li',
            {
              key: step.id,
              className: i === _this2.props.currentStep ? 'doing' : '',
              ref: function ref(node) {
                _this2.tabElements[i] = node;
              }
            },
            React.createElement(
              'a',
              {
                id: step.id,
                href: '#/',
                onClick: function onClick(event) {
                  _this2.props.selectPage(event, i);
                  _this2.centerSelectedTab(i);
                }
              },
              React.createElement(
                'span',
                { className: labelClassName },
                React.createElement(
                  ControlLabel,
                  null,
                  step.name
                )
              ),
              _this2.validateStep(step)
            )
          );
        })
      ),
      this.state.showScroll && React.createElement(
        'button',
        { className: 'hidden-button', onClick: this.scrollRight },
        React.createElement(FaCaretRight, null)
      )
    );
  };

  return WizardHeader;
}(React.PureComponent);

export { WizardHeader as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC1oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkNvbnRyb2xMYWJlbCIsIkZhQ2FyZXRMZWZ0IiwiRmFDYXJldFJpZ2h0IiwiRmFDaGVjayIsIldpemFyZEhlYWRlciIsInVwZGF0ZVNjcm9sbCIsInNjcm9sbGJhciIsIm9mZnNldFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJzZXRTdGF0ZSIsInNob3dTY3JvbGwiLCJjZW50ZXJTZWxlY3RlZFRhYiIsInRhYkluZGV4Iiwib2Zmc2V0TGVmdCIsImkiLCJ0YWJFbGVtZW50cyIsInNjcm9sbExlZnQiLCJzY3JvbGxTdGVwIiwic2Nyb2xsUmlnaHQiLCJ2YWxpZGF0ZVN0ZXAiLCJzdGVwIiwiaXNWYWxpZCIsImhlaWdodCIsInN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwibm9kZSIsInByb3BzIiwic3RlcHMiLCJtYXAiLCJsYWJlbENsYXNzTmFtZSIsImhhc1JlcXVpcmVkUHJvcHNFcnJvcnMiLCJoYXNSZXF1aXJlZFByb3BzIiwiaWQiLCJjdXJyZW50U3RlcCIsImV2ZW50Iiwic2VsZWN0UGFnZSIsIm5hbWUiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsaUJBQTdCOztBQUVBLE9BQU9DLFdBQVAsTUFBd0IsK0JBQXhCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixnQ0FBekI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLDBCQUFwQjs7QUFFQSxPQUFPLGdDQUFQOztJQUdxQkMsWTs7O0FBYW5CLDBCQUFjO0FBQUE7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QUVFLHlCQUFXdkIsTUFBTSxPQUFLaUIsS0FBTCxDQUFXTyxXQUFqQixHQUErQixPQUEvQixHQUF5QyxFQUZ0RDtBQUdFLG1CQUFLLGFBQUNSLElBQUQsRUFBVTtBQUFFLHVCQUFLZixXQUFMLENBQWlCRCxDQUFqQixJQUFzQmdCLElBQXRCO0FBQTZCO0FBSGhEO0FBS0U7QUFBQTtBQUFBO0FBQ0Usb0JBQUlWLEtBQUtpQixFQURYO0FBRUUsc0JBQUssSUFGUDtBQUdFLHlCQUFTLGlCQUFDRSxLQUFELEVBQVc7QUFDbEIseUJBQUtSLEtBQUwsQ0FBV1MsVUFBWCxDQUFzQkQsS0FBdEIsRUFBNkJ6QixDQUE3QjtBQUNBLHlCQUFLSCxpQkFBTCxDQUF1QkcsQ0FBdkI7QUFDRDtBQU5IO0FBUUU7QUFBQTtBQUFBLGtCQUFNLFdBQVdvQixjQUFqQjtBQUNFO0FBQUMsOEJBQUQ7QUFBQTtBQUNHZCx1QkFBS3FCO0FBRFI7QUFERixlQVJGO0FBYUcscUJBQUt0QixZQUFMLENBQWtCQyxJQUFsQjtBQWJIO0FBTEYsV0FERjtBQXdCRCxTQS9CQTtBQURILE9BTEY7QUF1Q0ksV0FBS0csS0FBTCxDQUFXYixVQUFYLElBQ0E7QUFBQTtBQUFBLFVBQVEsV0FBVSxlQUFsQixFQUFrQyxTQUFTLEtBQUtRLFdBQWhEO0FBQ0UsNEJBQUMsWUFBRDtBQURGO0FBeENKLEtBREY7QUE4Q0QsRzs7O0VBeEh1Q3BCLE1BQU00QyxhOztTQUEzQnRDLFkiLCJmaWxlIjoid2l6YXJkLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENvbnRyb2xMYWJlbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCBGYUNhcmV0TGVmdCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2FyZXQtbGVmdCc7XG5pbXBvcnQgRmFDYXJldFJpZ2h0IGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jYXJldC1yaWdodCc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuXG5pbXBvcnQgJy4vd2l6YXJkLWhlYWRlci5jb21wb25lbnQuc2Nzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2l6YXJkSGVhZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3RlcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgICBoYXNSZXF1aXJlZFByb3BzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGhhc1JlcXVpcmVkUHJvcHNFcnJvcnM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgICAgbmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKS5pc1JlcXVpcmVkLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdFBhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY3VycmVudFN0ZXA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNjcm9sbFN0ZXAgPSA1MDtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93U2Nyb2xsOiB0cnVlLFxuICAgIH07XG5cbiAgICB0aGlzLnRhYkVsZW1lbnRzID0ge307XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVTY3JvbGwpO1xuICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVTY3JvbGwpO1xuICB9XG5cbiAgdXBkYXRlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNjcm9sbGJhci5vZmZzZXRXaWR0aCAhPT0gdGhpcy5zY3JvbGxiYXIuc2Nyb2xsV2lkdGgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93U2Nyb2xsOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93U2Nyb2xsOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNlbnRlclNlbGVjdGVkVGFiID0gKHRhYkluZGV4KSA9PiB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyLm9mZnNldFdpZHRoICE9PSB0aGlzLnNjcm9sbGJhci5zY3JvbGxXaWR0aCkge1xuICAgICAgbGV0IG9mZnNldExlZnQgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJJbmRleDsgaSArPSAxKSB7XG4gICAgICAgIG9mZnNldExlZnQgKz0gdGhpcy50YWJFbGVtZW50c1tpXS5vZmZzZXRXaWR0aDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsYmFyLnNjcm9sbExlZnQgPSAob2Zmc2V0TGVmdCArXG4gICAgICAgICh0aGlzLnRhYkVsZW1lbnRzW3RhYkluZGV4XS5vZmZzZXRXaWR0aCAvIDIpKSAtXG4gICAgICAgICh0aGlzLnNjcm9sbGJhci5vZmZzZXRXaWR0aCAvIDIpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbExlZnQgPSAoKSA9PiB7XG4gICAgdGhpcy5zY3JvbGxiYXIuc2Nyb2xsTGVmdCAtPSB0aGlzLnNjcm9sbFN0ZXA7XG4gIH1cblxuICBzY3JvbGxSaWdodCA9ICgpID0+IHtcbiAgICB0aGlzLnNjcm9sbGJhci5zY3JvbGxMZWZ0ICs9IHRoaXMuc2Nyb2xsU3RlcDtcbiAgfVxuXG4gIHZhbGlkYXRlU3RlcCA9IChzdGVwKSA9PiB7XG4gICAgaWYgKCdpc1ZhbGlkJyBpbiBzdGVwICYmICFzdGVwLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiA8RmFDaGVjayBjbGFzc05hbWU9XCJzYXZlLXN1Y2Nlc3MtaW5kaWNhdG9yXCIgLz47XG4gICAgfVxuICAgIHJldHVybiA8c3BhbiBzdHlsZT17eyBoZWlnaHQ6ICczMHB4JyB9fSAvPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIndpemFyZC1oZWFkZXJcIj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLnNob3dTY3JvbGwgJiZcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhpZGRlbi1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnNjcm9sbExlZnR9PlxuICAgICAgICAgICAgPEZhQ2FyZXRMZWZ0IC8+XG4gICAgICAgICAgPC9idXR0b24+IH1cbiAgICAgICAgPHVsIHJlZj17KG5vZGUpID0+IHsgdGhpcy5zY3JvbGxiYXIgPSBub2RlOyB9fT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5zdGVwcy5tYXAoKHN0ZXAsIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBsYWJlbENsYXNzTmFtZSA9ICcnO1xuICAgICAgICAgICAgaWYgKHN0ZXAuaGFzUmVxdWlyZWRQcm9wc0Vycm9ycykge1xuICAgICAgICAgICAgICBsYWJlbENsYXNzTmFtZSA9ICdvYy1tYW5kYXRvcnktZXJyb3InO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGVwLmhhc1JlcXVpcmVkUHJvcHMpIHtcbiAgICAgICAgICAgICAgbGFiZWxDbGFzc05hbWUgPSAnb2MtbWFuZGF0b3J5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17c3RlcC5pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IHRoaXMucHJvcHMuY3VycmVudFN0ZXAgPyAnZG9pbmcnIDogJyd9XG4gICAgICAgICAgICAgICAgcmVmPXsobm9kZSkgPT4geyB0aGlzLnRhYkVsZW1lbnRzW2ldID0gbm9kZTsgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBpZD17c3RlcC5pZH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjL1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RQYWdlKGV2ZW50LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJTZWxlY3RlZFRhYihpKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtsYWJlbENsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAge3N0ZXAubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7dGhpcy52YWxpZGF0ZVN0ZXAoc3RlcCl9XG4gICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7IHRoaXMuc3RhdGUuc2hvd1Njcm9sbCAmJlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGlkZGVuLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsUmlnaHR9PlxuICAgICAgICAgICAgPEZhQ2FyZXRSaWdodCAvPlxuICAgICAgICAgIDwvYnV0dG9uPiB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=
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
          }
        },
        this.props.showHeaderTabs && this.props.steps.map(function (step, i) {
          var labelClassName = '';
          if (step.hasRequiredPropsErrors) {
            labelClassName = 'oc-ui-mandatory-error';
          } else if (step.hasRequiredProps) {
            labelClassName = 'oc-ui-mandatory';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC1oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkNvbnRyb2xMYWJlbCIsIkZhQ2FyZXRMZWZ0IiwiRmFDYXJldFJpZ2h0IiwiRmFDaGVjayIsIldpemFyZEhlYWRlciIsInVwZGF0ZVNjcm9sbCIsInNjcm9sbGJhciIsIm9mZnNldFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJzZXRTdGF0ZSIsInNob3dTY3JvbGwiLCJjZW50ZXJTZWxlY3RlZFRhYiIsInRhYkluZGV4Iiwib2Zmc2V0TGVmdCIsImkiLCJ0YWJFbGVtZW50cyIsInNjcm9sbExlZnQiLCJzY3JvbGxTdGVwIiwic2Nyb2xsUmlnaHQiLCJ2YWxpZGF0ZVN0ZXAiLCJzdGVwIiwiaXNWYWxpZCIsImhlaWdodCIsInN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwibm9kZSIsInByb3BzIiwic2hvd0hlYWRlclRhYnMiLCJzdGVwcyIsIm1hcCIsImxhYmVsQ2xhc3NOYW1lIiwiaGFzUmVxdWlyZWRQcm9wc0Vycm9ycyIsImhhc1JlcXVpcmVkUHJvcHMiLCJpZCIsImN1cnJlbnRTdGVwIiwiZXZlbnQiLCJzZWxlY3RQYWdlIiwibmFtZSIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2QixpQkFBN0I7O0FBRUEsT0FBT0MsV0FBUCxNQUF3QiwrQkFBeEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGdDQUF6QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsMEJBQXBCOztBQUVBLE9BQU8sZ0NBQVA7O0lBR3FCQyxZOzs7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QUFDRCxpQkFDRTtBQUFBO0FBQUE7QUFDRSxtQkFBS2YsS0FBS2tCLEVBRFo7QUFFRSx5QkFBV3hCLE1BQU0sT0FBS2lCLEtBQUwsQ0FBV1EsV0FBakIsR0FBK0IsT0FBL0IsR0FBeUMsRUFGdEQ7QUFHRSxtQkFBSyxhQUFDVCxJQUFELEVBQVU7QUFDYix1QkFBS2YsV0FBTCxDQUFpQkQsQ0FBakIsSUFBc0JnQixJQUF0QjtBQUNEO0FBTEg7QUFPRTtBQUFBO0FBQUE7QUFDRSxvQkFBSVYsS0FBS2tCLEVBRFg7QUFFRSxzQkFBSyxJQUZQO0FBR0UseUJBQVMsaUJBQUNFLEtBQUQsRUFBVztBQUNsQix5QkFBS1QsS0FBTCxDQUFXVSxVQUFYLENBQXNCRCxLQUF0QixFQUE2QjFCLENBQTdCO0FBQ0EseUJBQUtILGlCQUFMLENBQXVCRyxDQUF2QjtBQUNEO0FBTkg7QUFRRTtBQUFBO0FBQUEsa0JBQU0sV0FBV3FCLGNBQWpCO0FBQ0U7QUFBQyw4QkFBRDtBQUFBO0FBQ0dmLHVCQUFLc0I7QUFEUjtBQURGLGVBUkY7QUFhRyxxQkFBS3ZCLFlBQUwsQ0FBa0JDLElBQWxCO0FBYkg7QUFQRixXQURGO0FBMEJELFNBakM2QjtBQUpoQyxPQUxGO0FBNENHLFdBQUtHLEtBQUwsQ0FBV2IsVUFBWCxJQUNEO0FBQUE7QUFBQSxVQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLUSxXQUFoRDtBQUNFLDRCQUFDLFlBQUQ7QUFERjtBQTdDRixLQURGO0FBbURELEc7OztFQTlIdUNwQixNQUFNNkMsYTs7U0FBM0J2QyxZIiwiZmlsZSI6IndpemFyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBDb250cm9sTGFiZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgRmFDYXJldExlZnQgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NhcmV0LWxlZnQnO1xuaW1wb3J0IEZhQ2FyZXRSaWdodCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2FyZXQtcmlnaHQnO1xuaW1wb3J0IEZhQ2hlY2sgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZWNrJztcblxuaW1wb3J0ICcuL3dpemFyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpemFyZEhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgY29tcG9uZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgICAgaGFzUmVxdWlyZWRQcm9wczogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBoYXNSZXF1aXJlZFByb3BzRXJyb3JzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgfSkpLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0UGFnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjdXJyZW50U3RlcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHNob3dIZWFkZXJUYWJzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2Nyb2xsU3RlcCA9IDUwO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dTY3JvbGw6IHRydWUsXG4gICAgfTtcblxuICAgIHRoaXMudGFiRWxlbWVudHMgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVNjcm9sbCk7XG4gICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVNjcm9sbCk7XG4gIH1cblxuICB1cGRhdGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyLm9mZnNldFdpZHRoICE9PSB0aGlzLnNjcm9sbGJhci5zY3JvbGxXaWR0aCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dTY3JvbGw6IHRydWUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dTY3JvbGw6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2VudGVyU2VsZWN0ZWRUYWIgPSAodGFiSW5kZXgpID0+IHtcbiAgICBpZiAodGhpcy5zY3JvbGxiYXIub2Zmc2V0V2lkdGggIT09IHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFdpZHRoKSB7XG4gICAgICBsZXQgb2Zmc2V0TGVmdCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYkluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgb2Zmc2V0TGVmdCArPSB0aGlzLnRhYkVsZW1lbnRzW2ldLm9mZnNldFdpZHRoO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxiYXIuc2Nyb2xsTGVmdCA9IChvZmZzZXRMZWZ0ICtcbiAgICAgICAgKHRoaXMudGFiRWxlbWVudHNbdGFiSW5kZXhdLm9mZnNldFdpZHRoIC8gMikpIC1cbiAgICAgICAgKHRoaXMuc2Nyb2xsYmFyLm9mZnNldFdpZHRoIC8gMik7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsTGVmdCA9ICgpID0+IHtcbiAgICB0aGlzLnNjcm9sbGJhci5zY3JvbGxMZWZ0IC09IHRoaXMuc2Nyb2xsU3RlcDtcbiAgfVxuXG4gIHNjcm9sbFJpZ2h0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2Nyb2xsYmFyLnNjcm9sbExlZnQgKz0gdGhpcy5zY3JvbGxTdGVwO1xuICB9XG5cbiAgdmFsaWRhdGVTdGVwID0gKHN0ZXApID0+IHtcbiAgICBpZiAoJ2lzVmFsaWQnIGluIHN0ZXAgJiYgIXN0ZXAuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIDxGYUNoZWNrIGNsYXNzTmFtZT1cInNhdmUtc3VjY2Vzcy1pbmRpY2F0b3JcIiAvPjtcbiAgICB9XG4gICAgcmV0dXJuIDxzcGFuIHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19IC8+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwid2l6YXJkLWhlYWRlclwiPlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93U2Nyb2xsICYmXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGlkZGVuLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsTGVmdH0+XG4gICAgICAgICAgPEZhQ2FyZXRMZWZ0IC8+XG4gICAgICAgIDwvYnV0dG9uPn1cbiAgICAgICAgPHVsIHJlZj17KG5vZGUpID0+IHtcbiAgICAgICAgICB0aGlzLnNjcm9sbGJhciA9IG5vZGU7XG4gICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93SGVhZGVyVGFicyAmJiB0aGlzLnByb3BzLnN0ZXBzLm1hcCgoc3RlcCwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhYmVsQ2xhc3NOYW1lID0gJyc7XG4gICAgICAgICAgICBpZiAoc3RlcC5oYXNSZXF1aXJlZFByb3BzRXJyb3JzKSB7XG4gICAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lID0gJ29jLXVpLW1hbmRhdG9yeS1lcnJvcic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0ZXAuaGFzUmVxdWlyZWRQcm9wcykge1xuICAgICAgICAgICAgICBsYWJlbENsYXNzTmFtZSA9ICdvYy11aS1tYW5kYXRvcnknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtzdGVwLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aSA9PT0gdGhpcy5wcm9wcy5jdXJyZW50U3RlcCA/ICdkb2luZycgOiAnJ31cbiAgICAgICAgICAgICAgICByZWY9eyhub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRhYkVsZW1lbnRzW2ldID0gbm9kZTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGlkPXtzdGVwLmlkfVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiMvXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFBhZ2UoZXZlbnQsIGkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclNlbGVjdGVkVGFiKGkpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2xhYmVsQ2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RlcC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnZhbGlkYXRlU3RlcChzdGVwKX1cbiAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dTY3JvbGwgJiZcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoaWRkZW4tYnV0dG9uXCIgb25DbGljaz17dGhpcy5zY3JvbGxSaWdodH0+XG4gICAgICAgICAgPEZhQ2FyZXRSaWdodCAvPlxuICAgICAgICA8L2J1dHRvbj59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=
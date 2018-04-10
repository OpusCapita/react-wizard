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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC1oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkNvbnRyb2xMYWJlbCIsIkZhQ2FyZXRMZWZ0IiwiRmFDYXJldFJpZ2h0IiwiRmFDaGVjayIsIldpemFyZEhlYWRlciIsInVwZGF0ZVNjcm9sbCIsInNjcm9sbGJhciIsIm9mZnNldFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJzZXRTdGF0ZSIsInNob3dTY3JvbGwiLCJjZW50ZXJTZWxlY3RlZFRhYiIsInRhYkluZGV4Iiwib2Zmc2V0TGVmdCIsImkiLCJ0YWJFbGVtZW50cyIsInNjcm9sbExlZnQiLCJzY3JvbGxTdGVwIiwic2Nyb2xsUmlnaHQiLCJ2YWxpZGF0ZVN0ZXAiLCJzdGVwIiwiaXNWYWxpZCIsImhlaWdodCIsInN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwibm9kZSIsInByb3BzIiwic3RlcHMiLCJtYXAiLCJsYWJlbENsYXNzTmFtZSIsImhhc1JlcXVpcmVkUHJvcHNFcnJvcnMiLCJoYXNSZXF1aXJlZFByb3BzIiwiaWQiLCJjdXJyZW50U3RlcCIsImV2ZW50Iiwic2VsZWN0UGFnZSIsIm5hbWUiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsaUJBQTdCOztBQUVBLE9BQU9DLFdBQVAsTUFBd0IsK0JBQXhCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixnQ0FBekI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLDBCQUFwQjs7QUFFQSxPQUFPLGdDQUFQOztJQUdxQkMsWTs7O0FBYW5CLDBCQUFjO0FBQUE7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QUFFRSx5QkFBV3ZCLE1BQU0sT0FBS2lCLEtBQUwsQ0FBV08sV0FBakIsR0FBK0IsT0FBL0IsR0FBeUMsRUFGdEQ7QUFHRSxtQkFBSyxhQUFDUixJQUFELEVBQVU7QUFBRSx1QkFBS2YsV0FBTCxDQUFpQkQsQ0FBakIsSUFBc0JnQixJQUF0QjtBQUE2QjtBQUhoRDtBQUtFO0FBQUE7QUFBQTtBQUNFLG9CQUFJVixLQUFLaUIsRUFEWDtBQUVFLHNCQUFLLElBRlA7QUFHRSx5QkFBUyxpQkFBQ0UsS0FBRCxFQUFXO0FBQ2xCLHlCQUFLUixLQUFMLENBQVdTLFVBQVgsQ0FBc0JELEtBQXRCLEVBQTZCekIsQ0FBN0I7QUFDQSx5QkFBS0gsaUJBQUwsQ0FBdUJHLENBQXZCO0FBQ0Q7QUFOSDtBQVFFO0FBQUE7QUFBQSxrQkFBTSxXQUFXb0IsY0FBakI7QUFDRTtBQUFDLDhCQUFEO0FBQUE7QUFDR2QsdUJBQUtxQjtBQURSO0FBREYsZUFSRjtBQWFHLHFCQUFLdEIsWUFBTCxDQUFrQkMsSUFBbEI7QUFiSDtBQUxGLFdBREY7QUF3QkQsU0EvQkE7QUFESCxPQUxGO0FBdUNJLFdBQUtHLEtBQUwsQ0FBV2IsVUFBWCxJQUNBO0FBQUE7QUFBQSxVQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLUSxXQUFoRDtBQUNFLDRCQUFDLFlBQUQ7QUFERjtBQXhDSixLQURGO0FBOENELEc7OztFQXhIdUNwQixNQUFNNEMsYTs7U0FBM0J0QyxZIiwiZmlsZSI6IndpemFyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBDb250cm9sTGFiZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgRmFDYXJldExlZnQgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NhcmV0LWxlZnQnO1xuaW1wb3J0IEZhQ2FyZXRSaWdodCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2FyZXQtcmlnaHQnO1xuaW1wb3J0IEZhQ2hlY2sgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZWNrJztcblxuaW1wb3J0ICcuL3dpemFyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpemFyZEhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgY29tcG9uZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgICAgaGFzUmVxdWlyZWRQcm9wczogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBoYXNSZXF1aXJlZFByb3BzRXJyb3JzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSkuaXNSZXF1aXJlZCxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBzZWxlY3RQYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zY3JvbGxTdGVwID0gNTA7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1Njcm9sbDogdHJ1ZSxcbiAgICB9O1xuXG4gICAgdGhpcy50YWJFbGVtZW50cyA9IHt9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlU2Nyb2xsKTtcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlU2Nyb2xsKTtcbiAgfVxuXG4gIHVwZGF0ZVNjcm9sbCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zY3JvbGxiYXIub2Zmc2V0V2lkdGggIT09IHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFdpZHRoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1Njcm9sbDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1Njcm9sbDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjZW50ZXJTZWxlY3RlZFRhYiA9ICh0YWJJbmRleCkgPT4ge1xuICAgIGlmICh0aGlzLnNjcm9sbGJhci5vZmZzZXRXaWR0aCAhPT0gdGhpcy5zY3JvbGxiYXIuc2Nyb2xsV2lkdGgpIHtcbiAgICAgIGxldCBvZmZzZXRMZWZ0ID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFiSW5kZXg7IGkgKz0gMSkge1xuICAgICAgICBvZmZzZXRMZWZ0ICs9IHRoaXMudGFiRWxlbWVudHNbaV0ub2Zmc2V0V2lkdGg7XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbGJhci5zY3JvbGxMZWZ0ID0gKG9mZnNldExlZnQgK1xuICAgICAgICAodGhpcy50YWJFbGVtZW50c1t0YWJJbmRleF0ub2Zmc2V0V2lkdGggLyAyKSkgLVxuICAgICAgICAodGhpcy5zY3JvbGxiYXIub2Zmc2V0V2lkdGggLyAyKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxMZWZ0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2Nyb2xsYmFyLnNjcm9sbExlZnQgLT0gdGhpcy5zY3JvbGxTdGVwO1xuICB9XG5cbiAgc2Nyb2xsUmlnaHQgPSAoKSA9PiB7XG4gICAgdGhpcy5zY3JvbGxiYXIuc2Nyb2xsTGVmdCArPSB0aGlzLnNjcm9sbFN0ZXA7XG4gIH1cblxuICB2YWxpZGF0ZVN0ZXAgPSAoc3RlcCkgPT4ge1xuICAgIGlmICgnaXNWYWxpZCcgaW4gc3RlcCAmJiAhc3RlcC5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gPEZhQ2hlY2sgY2xhc3NOYW1lPVwic2F2ZS1zdWNjZXNzLWluZGljYXRvclwiIC8+O1xuICAgIH1cbiAgICByZXR1cm4gPHNwYW4gc3R5bGU9e3sgaGVpZ2h0OiAnMzBweCcgfX0gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJ3aXphcmQtaGVhZGVyXCI+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5zaG93U2Nyb2xsICYmXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoaWRkZW4tYnV0dG9uXCIgb25DbGljaz17dGhpcy5zY3JvbGxMZWZ0fT5cbiAgICAgICAgICAgIDxGYUNhcmV0TGVmdCAvPlxuICAgICAgICAgIDwvYnV0dG9uPiB9XG4gICAgICAgIDx1bCByZWY9eyhub2RlKSA9PiB7IHRoaXMuc2Nyb2xsYmFyID0gbm9kZTsgfX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuc3RlcHMubWFwKChzdGVwLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFiZWxDbGFzc05hbWUgPSAnJztcbiAgICAgICAgICAgIGlmIChzdGVwLmhhc1JlcXVpcmVkUHJvcHNFcnJvcnMpIHtcbiAgICAgICAgICAgICAgbGFiZWxDbGFzc05hbWUgPSAnb2MtdWktbWFuZGF0b3J5LWVycm9yJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RlcC5oYXNSZXF1aXJlZFByb3BzKSB7XG4gICAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lID0gJ29jLXVpLW1hbmRhdG9yeSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e3N0ZXAuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpID09PSB0aGlzLnByb3BzLmN1cnJlbnRTdGVwID8gJ2RvaW5nJyA6ICcnfVxuICAgICAgICAgICAgICAgIHJlZj17KG5vZGUpID0+IHsgdGhpcy50YWJFbGVtZW50c1tpXSA9IG5vZGU7IH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaWQ9e3N0ZXAuaWR9XG4gICAgICAgICAgICAgICAgICBocmVmPVwiIy9cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0UGFnZShldmVudCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyU2VsZWN0ZWRUYWIoaSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bGFiZWxDbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAge3RoaXMudmFsaWRhdGVTdGVwKHN0ZXApfVxuICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgeyB0aGlzLnN0YXRlLnNob3dTY3JvbGwgJiZcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhpZGRlbi1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnNjcm9sbFJpZ2h0fT5cbiAgICAgICAgICAgIDxGYUNhcmV0UmlnaHQgLz5cbiAgICAgICAgICA8L2J1dHRvbj4gfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19
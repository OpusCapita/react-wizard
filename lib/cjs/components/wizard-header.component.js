'use strict';

exports.__esModule = true;
exports.default = undefined;

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

require('./wizard-header.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        return _react2.default.createElement(_check2.default, { className: 'save-success-indicator' });
      }
      return _react2.default.createElement('span', { style: { height: '30px' } });
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

    return _react2.default.createElement(
      'div',
      { id: 'wizard-header' },
      this.state.showScroll && _react2.default.createElement(
        'button',
        { className: 'hidden-button', onClick: this.scrollLeft },
        _react2.default.createElement(_caretLeft2.default, null)
      ),
      _react2.default.createElement(
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
          return _react2.default.createElement(
            'li',
            {
              key: step.id,
              className: i === _this2.props.currentStep ? 'doing' : '',
              ref: function ref(node) {
                _this2.tabElements[i] = node;
              }
            },
            _react2.default.createElement(
              'a',
              {
                id: step.id,
                href: '#/',
                onClick: function onClick(event) {
                  _this2.props.selectPage(event, i);
                  _this2.centerSelectedTab(i);
                }
              },
              _react2.default.createElement(
                'span',
                { className: labelClassName },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  step.name
                )
              ),
              _this2.validateStep(step)
            )
          );
        })
      ),
      this.state.showScroll && _react2.default.createElement(
        'button',
        { className: 'hidden-button', onClick: this.scrollRight },
        _react2.default.createElement(_caretRight2.default, null)
      )
    );
  };

  return WizardHeader;
}(_react2.default.PureComponent);

exports.default = WizardHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC1oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJXaXphcmRIZWFkZXIiLCJ1cGRhdGVTY3JvbGwiLCJzY3JvbGxiYXIiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwic2V0U3RhdGUiLCJzaG93U2Nyb2xsIiwiY2VudGVyU2VsZWN0ZWRUYWIiLCJ0YWJJbmRleCIsIm9mZnNldExlZnQiLCJpIiwidGFiRWxlbWVudHMiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsU3RlcCIsInNjcm9sbFJpZ2h0IiwidmFsaWRhdGVTdGVwIiwic3RlcCIsImlzVmFsaWQiLCJoZWlnaHQiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsIm5vZGUiLCJwcm9wcyIsInNob3dIZWFkZXJUYWJzIiwic3RlcHMiLCJtYXAiLCJsYWJlbENsYXNzTmFtZSIsImhhc1JlcXVpcmVkUHJvcHNFcnJvcnMiLCJoYXNSZXF1aXJlZFByb3BzIiwiaWQiLCJjdXJyZW50U3RlcCIsImV2ZW50Iiwic2VsZWN0UGFnZSIsIm5hbWUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBR3FCQSxZOzs7QUFjbkIsMEJBQWM7QUFBQTs7QUFBQSxpREFDWiwrQkFEWTs7QUFBQSxVQXFCZEMsWUFyQmMsR0FxQkMsWUFBTTtBQUNuQixVQUFJLE1BQUtDLFNBQUwsQ0FBZUMsV0FBZixLQUErQixNQUFLRCxTQUFMLENBQWVFLFdBQWxELEVBQStEO0FBQzdELGNBQUtDLFFBQUwsQ0FBYztBQUNaQyxzQkFBWTtBQURBLFNBQWQ7QUFHRCxPQUpELE1BSU87QUFDTCxj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QUFBQTtBQUFBO0FBQ0Usb0JBQUlWLEtBQUtrQixFQURYO0FBRUUsc0JBQUssSUFGUDtBQUdFLHlCQUFTLGlCQUFDRSxLQUFELEVBQVc7QUFDbEIseUJBQUtULEtBQUwsQ0FBV1UsVUFBWCxDQUFzQkQsS0FBdEIsRUFBNkIxQixDQUE3QjtBQUNBLHlCQUFLSCxpQkFBTCxDQUF1QkcsQ0FBdkI7QUFDRDtBQU5IO0FBUUU7QUFBQTtBQUFBLGtCQUFNLFdBQVdxQixjQUFqQjtBQUNFO0FBQUMsOENBQUQ7QUFBQTtBQUNHZix1QkFBS3NCO0FBRFI7QUFERixlQVJGO0FBYUcscUJBQUt2QixZQUFMLENBQWtCQyxJQUFsQjtBQWJIO0FBUEYsV0FERjtBQTBCRCxTQWpDNkI7QUFKaEMsT0FMRjtBQTRDRyxXQUFLRyxLQUFMLENBQVdiLFVBQVgsSUFDRDtBQUFBO0FBQUEsVUFBUSxXQUFVLGVBQWxCLEVBQWtDLFNBQVMsS0FBS1EsV0FBaEQ7QUFDRSxzQ0FBQyxvQkFBRDtBQURGO0FBN0NGLEtBREY7QUFtREQsRzs7O0VBOUh1Q3lCLGdCQUFNQyxhOztrQkFBM0J4QyxZIiwiZmlsZSI6IndpemFyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBDb250cm9sTGFiZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgRmFDYXJldExlZnQgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NhcmV0LWxlZnQnO1xuaW1wb3J0IEZhQ2FyZXRSaWdodCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2FyZXQtcmlnaHQnO1xuaW1wb3J0IEZhQ2hlY2sgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZWNrJztcblxuaW1wb3J0ICcuL3dpemFyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpemFyZEhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgY29tcG9uZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgICAgaGFzUmVxdWlyZWRQcm9wczogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBoYXNSZXF1aXJlZFByb3BzRXJyb3JzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgfSkpLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0UGFnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjdXJyZW50U3RlcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHNob3dIZWFkZXJUYWJzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2Nyb2xsU3RlcCA9IDUwO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dTY3JvbGw6IHRydWUsXG4gICAgfTtcblxuICAgIHRoaXMudGFiRWxlbWVudHMgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVNjcm9sbCk7XG4gICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVNjcm9sbCk7XG4gIH1cblxuICB1cGRhdGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyLm9mZnNldFdpZHRoICE9PSB0aGlzLnNjcm9sbGJhci5zY3JvbGxXaWR0aCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dTY3JvbGw6IHRydWUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dTY3JvbGw6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2VudGVyU2VsZWN0ZWRUYWIgPSAodGFiSW5kZXgpID0+IHtcbiAgICBpZiAodGhpcy5zY3JvbGxiYXIub2Zmc2V0V2lkdGggIT09IHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFdpZHRoKSB7XG4gICAgICBsZXQgb2Zmc2V0TGVmdCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYkluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgb2Zmc2V0TGVmdCArPSB0aGlzLnRhYkVsZW1lbnRzW2ldLm9mZnNldFdpZHRoO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxiYXIuc2Nyb2xsTGVmdCA9IChvZmZzZXRMZWZ0ICtcbiAgICAgICAgKHRoaXMudGFiRWxlbWVudHNbdGFiSW5kZXhdLm9mZnNldFdpZHRoIC8gMikpIC1cbiAgICAgICAgKHRoaXMuc2Nyb2xsYmFyLm9mZnNldFdpZHRoIC8gMik7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsTGVmdCA9ICgpID0+IHtcbiAgICB0aGlzLnNjcm9sbGJhci5zY3JvbGxMZWZ0IC09IHRoaXMuc2Nyb2xsU3RlcDtcbiAgfVxuXG4gIHNjcm9sbFJpZ2h0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2Nyb2xsYmFyLnNjcm9sbExlZnQgKz0gdGhpcy5zY3JvbGxTdGVwO1xuICB9XG5cbiAgdmFsaWRhdGVTdGVwID0gKHN0ZXApID0+IHtcbiAgICBpZiAoJ2lzVmFsaWQnIGluIHN0ZXAgJiYgIXN0ZXAuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIDxGYUNoZWNrIGNsYXNzTmFtZT1cInNhdmUtc3VjY2Vzcy1pbmRpY2F0b3JcIiAvPjtcbiAgICB9XG4gICAgcmV0dXJuIDxzcGFuIHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19IC8+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwid2l6YXJkLWhlYWRlclwiPlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93U2Nyb2xsICYmXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGlkZGVuLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsTGVmdH0+XG4gICAgICAgICAgPEZhQ2FyZXRMZWZ0IC8+XG4gICAgICAgIDwvYnV0dG9uPn1cbiAgICAgICAgPHVsIHJlZj17KG5vZGUpID0+IHtcbiAgICAgICAgICB0aGlzLnNjcm9sbGJhciA9IG5vZGU7XG4gICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93SGVhZGVyVGFicyAmJiB0aGlzLnByb3BzLnN0ZXBzLm1hcCgoc3RlcCwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhYmVsQ2xhc3NOYW1lID0gJyc7XG4gICAgICAgICAgICBpZiAoc3RlcC5oYXNSZXF1aXJlZFByb3BzRXJyb3JzKSB7XG4gICAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lID0gJ29jLXVpLW1hbmRhdG9yeS1lcnJvcic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0ZXAuaGFzUmVxdWlyZWRQcm9wcykge1xuICAgICAgICAgICAgICBsYWJlbENsYXNzTmFtZSA9ICdvYy11aS1tYW5kYXRvcnknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtzdGVwLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aSA9PT0gdGhpcy5wcm9wcy5jdXJyZW50U3RlcCA/ICdkb2luZycgOiAnJ31cbiAgICAgICAgICAgICAgICByZWY9eyhub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRhYkVsZW1lbnRzW2ldID0gbm9kZTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGlkPXtzdGVwLmlkfVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiMvXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFBhZ2UoZXZlbnQsIGkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclNlbGVjdGVkVGFiKGkpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2xhYmVsQ2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RlcC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnZhbGlkYXRlU3RlcChzdGVwKX1cbiAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dTY3JvbGwgJiZcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoaWRkZW4tYnV0dG9uXCIgb25DbGljaz17dGhpcy5zY3JvbGxSaWdodH0+XG4gICAgICAgICAgPEZhQ2FyZXRSaWdodCAvPlxuICAgICAgICA8L2J1dHRvbj59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=
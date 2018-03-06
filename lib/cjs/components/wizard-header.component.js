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
          } },
        this.props.steps.map(function (step, i) {
          var labelClassName = '';
          if (step.hasRequiredPropsErrors) {
            labelClassName = 'oc-mandatory-error';
          } else if (step.hasRequiredProps) {
            labelClassName = 'oc-mandatory';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC1oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJXaXphcmRIZWFkZXIiLCJ1cGRhdGVTY3JvbGwiLCJzY3JvbGxiYXIiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwic2V0U3RhdGUiLCJzaG93U2Nyb2xsIiwiY2VudGVyU2VsZWN0ZWRUYWIiLCJ0YWJJbmRleCIsIm9mZnNldExlZnQiLCJpIiwidGFiRWxlbWVudHMiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsU3RlcCIsInNjcm9sbFJpZ2h0IiwidmFsaWRhdGVTdGVwIiwic3RlcCIsImlzVmFsaWQiLCJoZWlnaHQiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsIm5vZGUiLCJwcm9wcyIsInN0ZXBzIiwibWFwIiwibGFiZWxDbGFzc05hbWUiLCJoYXNSZXF1aXJlZFByb3BzRXJyb3JzIiwiaGFzUmVxdWlyZWRQcm9wcyIsImlkIiwiY3VycmVudFN0ZXAiLCJldmVudCIsInNlbGVjdFBhZ2UiLCJuYW1lIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7SUFHcUJBLFk7OztBQWFuQiwwQkFBYztBQUFBOztBQUFBLGlEQUNaLCtCQURZOztBQUFBLFVBcUJkQyxZQXJCYyxHQXFCQyxZQUFNO0FBQ25CLFVBQUksTUFBS0MsU0FBTCxDQUFlQyxXQUFmLEtBQStCLE1BQUtELFNBQUwsQ0FBZUUsV0FBbEQsRUFBK0Q7QUFDN0QsY0FBS0MsUUFBTCxDQUFjO0FBQ1pDLHNCQUFZO0FBREEsU0FBZDtBQUdELE9BSkQsTUFJTztBQUNMLGNBQUtELFFBQUwsQ0FBYztBQUNaQyxzQkFBWTtBQURBLFNBQWQ7QUFHRDtBQUNGLEtBL0JhOztBQUFBLFVBaUNkQyxpQkFqQ2MsR0FpQ00sVUFBQ0MsUUFBRCxFQUFjO0FBQ2hDLFVBQUksTUFBS04sU0FBTCxDQUFlQyxXQUFmLEtBQStCLE1BQUtELFNBQUwsQ0FBZUUsV0FBbEQsRUFBK0Q7QUFDN0QsWUFBSUssYUFBYSxDQUFqQjtBQUNBLGFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixRQUFwQixFQUE4QkUsS0FBSyxDQUFuQyxFQUFzQztBQUNwQ0Qsd0JBQWMsTUFBS0UsV0FBTCxDQUFpQkQsQ0FBakIsRUFBb0JQLFdBQWxDO0FBQ0Q7QUFDRCxjQUFLRCxTQUFMLENBQWVVLFVBQWYsR0FBNkJILGFBQzFCLE1BQUtFLFdBQUwsQ0FBaUJILFFBQWpCLEVBQTJCTCxXQUEzQixHQUF5QyxDQURoQixHQUV6QixNQUFLRCxTQUFMLENBQWVDLFdBQWYsR0FBNkIsQ0FGaEM7QUFHRDtBQUNGLEtBM0NhOztBQUFBLFVBNkNkUyxVQTdDYyxHQTZDRCxZQUFNO0FBQ2pCLFlBQUtWLFNBQUwsQ0FBZVUsVUFBZixJQUE2QixNQUFLQyxVQUFsQztBQUNELEtBL0NhOztBQUFBLFVBaURkQyxXQWpEYyxHQWlEQSxZQUFNO0FBQ2xCLFlBQUtaLFNBQUwsQ0FBZVUsVUFBZixJQUE2QixNQUFLQyxVQUFsQztBQUNELEtBbkRhOztBQUFBLFVBcURkRSxZQXJEYyxHQXFEQyxVQUFDQyxJQUFELEVBQVU7QUFDdkIsVUFBSSxhQUFhQSxJQUFiLElBQXFCLENBQUNBLEtBQUtDLE9BQS9CLEVBQXdDO0FBQ3RDLGVBQU8saURBQVMsV0FBVSx3QkFBbkIsR0FBUDtBQUNEO0FBQ0QsYUFBTyx3Q0FBTSxPQUFPLEVBQUVDLFFBQVEsTUFBVixFQUFiLEdBQVA7QUFDRCxLQTFEYTs7QUFHWixVQUFLTCxVQUFMLEdBQWtCLEVBQWxCOztBQUVBLFVBQUtNLEtBQUwsR0FBYTtBQUNYYixrQkFBWTtBQURELEtBQWI7O0FBSUEsVUFBS0ssV0FBTCxHQUFtQixFQUFuQjtBQVRZO0FBVWI7O3lCQUVEUyxpQixnQ0FBb0I7QUFDbEJDLFdBQU9DLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtyQixZQUF2QztBQUNBLFNBQUtBLFlBQUw7QUFDRCxHOzt5QkFFRHNCLG9CLG1DQUF1QjtBQUNyQkYsV0FBT0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBS3ZCLFlBQTFDO0FBQ0QsRzs7eUJBeUNEd0IsTSxxQkFBUztBQUFBOztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssSUFBRyxlQUFSO0FBQ0ksV0FBS04sS0FBTCxDQUFXYixVQUFYLElBQ0E7QUFBQTtBQUFBLFVBQVEsV0FBVSxlQUFsQixFQUFrQyxTQUFTLEtBQUtNLFVBQWhEO0FBQ0U7QUFERixPQUZKO0FBS0U7QUFBQTtBQUFBLFVBQUksS0FBSyxhQUFDYyxJQUFELEVBQVU7QUFBRSxtQkFBS3hCLFNBQUwsR0FBaUJ3QixJQUFqQjtBQUF3QixXQUE3QztBQUNHLGFBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ2IsSUFBRCxFQUFPTixDQUFQLEVBQWE7QUFDakMsY0FBSW9CLGlCQUFpQixFQUFyQjtBQUNBLGNBQUlkLEtBQUtlLHNCQUFULEVBQWlDO0FBQy9CRCw2QkFBaUIsb0JBQWpCO0FBQ0QsV0FGRCxNQUVPLElBQUlkLEtBQUtnQixnQkFBVCxFQUEyQjtBQUNoQ0YsNkJBQWlCLGNBQWpCO0FBQ0Q7QUFDRCxpQkFDRTtBQUFBO0FBQUE7QUFDRSxtQkFBS2QsS0FBS2lCLEVBRFo7QUFFRSx5QkFBV3ZCLE1BQU0sT0FBS2lCLEtBQUwsQ0FBV08sV0FBakIsR0FBK0IsT0FBL0IsR0FBeUMsRUFGdEQ7QUFHRSxtQkFBSyxhQUFDUixJQUFELEVBQVU7QUFBRSx1QkFBS2YsV0FBTCxDQUFpQkQsQ0FBakIsSUFBc0JnQixJQUF0QjtBQUE2QjtBQUhoRDtBQUtFO0FBQUE7QUFBQTtBQUNFLG9CQUFJVixLQUFLaUIsRUFEWDtBQUVFLHNCQUFLLElBRlA7QUFHRSx5QkFBUyxpQkFBQ0UsS0FBRCxFQUFXO0FBQ2xCLHlCQUFLUixLQUFMLENBQVdTLFVBQVgsQ0FBc0JELEtBQXRCLEVBQTZCekIsQ0FBN0I7QUFDQSx5QkFBS0gsaUJBQUwsQ0FBdUJHLENBQXZCO0FBQ0Q7QUFOSDtBQVFFO0FBQUE7QUFBQSxrQkFBTSxXQUFXb0IsY0FBakI7QUFDRTtBQUFBO0FBQUE7QUFDR2QsdUJBQUtxQjtBQURSO0FBREYsZUFSRjtBQWFHLHFCQUFLdEIsWUFBTCxDQUFrQkMsSUFBbEI7QUFiSDtBQUxGLFdBREY7QUF3QkQsU0EvQkE7QUFESCxPQUxGO0FBdUNJLFdBQUtHLEtBQUwsQ0FBV2IsVUFBWCxJQUNBO0FBQUE7QUFBQSxVQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLUSxXQUFoRDtBQUNFO0FBREY7QUF4Q0osS0FERjtBQThDRCxHOzs7RUF4SHVDLGdCQUFNd0IsYTs7a0JBQTNCdEMsWSIsImZpbGUiOiJ3aXphcmQtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ29udHJvbExhYmVsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IEZhQ2FyZXRMZWZ0IGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jYXJldC1sZWZ0JztcbmltcG9ydCBGYUNhcmV0UmlnaHQgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NhcmV0LXJpZ2h0JztcbmltcG9ydCBGYUNoZWNrIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGVjayc7XG5cbmltcG9ydCAnLi93aXphcmQtaGVhZGVyLmNvbXBvbmVudC5zY3NzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXphcmRIZWFkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICAgIGhhc1JlcXVpcmVkUHJvcHM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgaGFzUmVxdWlyZWRQcm9wc0Vycm9yczogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgICBuYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLmlzUmVxdWlyZWQsXG4gICAgfSkpLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0UGFnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjdXJyZW50U3RlcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2Nyb2xsU3RlcCA9IDUwO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dTY3JvbGw6IHRydWUsXG4gICAgfTtcblxuICAgIHRoaXMudGFiRWxlbWVudHMgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVNjcm9sbCk7XG4gICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVNjcm9sbCk7XG4gIH1cblxuICB1cGRhdGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyLm9mZnNldFdpZHRoICE9PSB0aGlzLnNjcm9sbGJhci5zY3JvbGxXaWR0aCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dTY3JvbGw6IHRydWUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dTY3JvbGw6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2VudGVyU2VsZWN0ZWRUYWIgPSAodGFiSW5kZXgpID0+IHtcbiAgICBpZiAodGhpcy5zY3JvbGxiYXIub2Zmc2V0V2lkdGggIT09IHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFdpZHRoKSB7XG4gICAgICBsZXQgb2Zmc2V0TGVmdCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYkluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgb2Zmc2V0TGVmdCArPSB0aGlzLnRhYkVsZW1lbnRzW2ldLm9mZnNldFdpZHRoO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxiYXIuc2Nyb2xsTGVmdCA9IChvZmZzZXRMZWZ0ICtcbiAgICAgICAgKHRoaXMudGFiRWxlbWVudHNbdGFiSW5kZXhdLm9mZnNldFdpZHRoIC8gMikpIC1cbiAgICAgICAgKHRoaXMuc2Nyb2xsYmFyLm9mZnNldFdpZHRoIC8gMik7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsTGVmdCA9ICgpID0+IHtcbiAgICB0aGlzLnNjcm9sbGJhci5zY3JvbGxMZWZ0IC09IHRoaXMuc2Nyb2xsU3RlcDtcbiAgfVxuXG4gIHNjcm9sbFJpZ2h0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2Nyb2xsYmFyLnNjcm9sbExlZnQgKz0gdGhpcy5zY3JvbGxTdGVwO1xuICB9XG5cbiAgdmFsaWRhdGVTdGVwID0gKHN0ZXApID0+IHtcbiAgICBpZiAoJ2lzVmFsaWQnIGluIHN0ZXAgJiYgIXN0ZXAuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIDxGYUNoZWNrIGNsYXNzTmFtZT1cInNhdmUtc3VjY2Vzcy1pbmRpY2F0b3JcIiAvPjtcbiAgICB9XG4gICAgcmV0dXJuIDxzcGFuIHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19IC8+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwid2l6YXJkLWhlYWRlclwiPlxuICAgICAgICB7IHRoaXMuc3RhdGUuc2hvd1Njcm9sbCAmJlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGlkZGVuLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsTGVmdH0+XG4gICAgICAgICAgICA8RmFDYXJldExlZnQgLz5cbiAgICAgICAgICA8L2J1dHRvbj4gfVxuICAgICAgICA8dWwgcmVmPXsobm9kZSkgPT4geyB0aGlzLnNjcm9sbGJhciA9IG5vZGU7IH19PlxuICAgICAgICAgIHt0aGlzLnByb3BzLnN0ZXBzLm1hcCgoc3RlcCwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhYmVsQ2xhc3NOYW1lID0gJyc7XG4gICAgICAgICAgICBpZiAoc3RlcC5oYXNSZXF1aXJlZFByb3BzRXJyb3JzKSB7XG4gICAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lID0gJ29jLW1hbmRhdG9yeS1lcnJvcic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0ZXAuaGFzUmVxdWlyZWRQcm9wcykge1xuICAgICAgICAgICAgICBsYWJlbENsYXNzTmFtZSA9ICdvYy1tYW5kYXRvcnknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtzdGVwLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aSA9PT0gdGhpcy5wcm9wcy5jdXJyZW50U3RlcCA/ICdkb2luZycgOiAnJ31cbiAgICAgICAgICAgICAgICByZWY9eyhub2RlKSA9PiB7IHRoaXMudGFiRWxlbWVudHNbaV0gPSBub2RlOyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGlkPXtzdGVwLmlkfVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiMvXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFBhZ2UoZXZlbnQsIGkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclNlbGVjdGVkVGFiKGkpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2xhYmVsQ2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RlcC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnZhbGlkYXRlU3RlcChzdGVwKX1cbiAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5zaG93U2Nyb2xsICYmXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoaWRkZW4tYnV0dG9uXCIgb25DbGljaz17dGhpcy5zY3JvbGxSaWdodH0+XG4gICAgICAgICAgICA8RmFDYXJldFJpZ2h0IC8+XG4gICAgICAgICAgPC9idXR0b24+IH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
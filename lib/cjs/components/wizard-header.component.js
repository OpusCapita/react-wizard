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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC1oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJXaXphcmRIZWFkZXIiLCJ1cGRhdGVTY3JvbGwiLCJzY3JvbGxiYXIiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwic2V0U3RhdGUiLCJzaG93U2Nyb2xsIiwiY2VudGVyU2VsZWN0ZWRUYWIiLCJ0YWJJbmRleCIsIm9mZnNldExlZnQiLCJpIiwidGFiRWxlbWVudHMiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsU3RlcCIsInNjcm9sbFJpZ2h0IiwidmFsaWRhdGVTdGVwIiwic3RlcCIsImlzVmFsaWQiLCJoZWlnaHQiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsIm5vZGUiLCJwcm9wcyIsInNob3dIZWFkZXJUYWJzIiwic3RlcHMiLCJtYXAiLCJsYWJlbENsYXNzTmFtZSIsImhhc1JlcXVpcmVkUHJvcHNFcnJvcnMiLCJoYXNSZXF1aXJlZFByb3BzIiwiaWQiLCJjdXJyZW50U3RlcCIsImV2ZW50Iiwic2VsZWN0UGFnZSIsIm5hbWUiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztJQUdxQkEsWTs7O0FBY25CLDBCQUFjO0FBQUE7O0FBQUEsaURBQ1osK0JBRFk7O0FBQUEsVUFxQmRDLFlBckJjLEdBcUJDLFlBQU07QUFDbkIsVUFBSSxNQUFLQyxTQUFMLENBQWVDLFdBQWYsS0FBK0IsTUFBS0QsU0FBTCxDQUFlRSxXQUFsRCxFQUErRDtBQUM3RCxjQUFLQyxRQUFMLENBQWM7QUFDWkMsc0JBQVk7QUFEQSxTQUFkO0FBR0QsT0FKRCxNQUlPO0FBQ0wsY0FBS0QsUUFB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QURYO0FBRUUsc0JBQUssSUFGUDtBQUdFLHlCQUFTLGlCQUFDRSxLQUFELEVBQVc7QUFDbEIseUJBQUtULEtBQUwsQ0FBV1UsVUFBWCxDQUFzQkQsS0FBdEIsRUFBNkIxQixDQUE3QjtBQUNBLHlCQUFLSCxpQkFBTCxDQUF1QkcsQ0FBdkI7QUFDRDtBQU5IO0FBUUU7QUFBQTtBQUFBLGtCQUFNLFdBQVdxQixjQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNHZix1QkFBS3NCO0FBRFI7QUFERixlQVJGO0FBYUcscUJBQUt2QixZQUFMLENBQWtCQyxJQUFsQjtBQWJIO0FBUEYsV0FERjtBQTBCRCxTQWpDNkI7QUFKaEMsT0FMRjtBQTRDRyxXQUFLRyxLQUFMLENBQVdiLFVBQVgsSUFDRDtBQUFBO0FBQUEsVUFBUSxXQUFVLGVBQWxCLEVBQWtDLFNBQVMsS0FBS1EsV0FBaEQ7QUFDRTtBQURGO0FBN0NGLEtBREY7QUFtREQsRzs7O0VBOUh1QyxnQkFBTXlCLGE7O2tCQUEzQnZDLFkiLCJmaWxlIjoid2l6YXJkLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENvbnRyb2xMYWJlbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCBGYUNhcmV0TGVmdCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2FyZXQtbGVmdCc7XG5pbXBvcnQgRmFDYXJldFJpZ2h0IGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jYXJldC1yaWdodCc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuXG5pbXBvcnQgJy4vd2l6YXJkLWhlYWRlci5jb21wb25lbnQuc2Nzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2l6YXJkSGVhZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3RlcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgICBoYXNSZXF1aXJlZFByb3BzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGhhc1JlcXVpcmVkUHJvcHNFcnJvcnM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgICAgbmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBzZWxlY3RQYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgc2hvd0hlYWRlclRhYnM6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zY3JvbGxTdGVwID0gNTA7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1Njcm9sbDogdHJ1ZSxcbiAgICB9O1xuXG4gICAgdGhpcy50YWJFbGVtZW50cyA9IHt9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlU2Nyb2xsKTtcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlU2Nyb2xsKTtcbiAgfVxuXG4gIHVwZGF0ZVNjcm9sbCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zY3JvbGxiYXIub2Zmc2V0V2lkdGggIT09IHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFdpZHRoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1Njcm9sbDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1Njcm9sbDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjZW50ZXJTZWxlY3RlZFRhYiA9ICh0YWJJbmRleCkgPT4ge1xuICAgIGlmICh0aGlzLnNjcm9sbGJhci5vZmZzZXRXaWR0aCAhPT0gdGhpcy5zY3JvbGxiYXIuc2Nyb2xsV2lkdGgpIHtcbiAgICAgIGxldCBvZmZzZXRMZWZ0ID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFiSW5kZXg7IGkgKz0gMSkge1xuICAgICAgICBvZmZzZXRMZWZ0ICs9IHRoaXMudGFiRWxlbWVudHNbaV0ub2Zmc2V0V2lkdGg7XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbGJhci5zY3JvbGxMZWZ0ID0gKG9mZnNldExlZnQgK1xuICAgICAgICAodGhpcy50YWJFbGVtZW50c1t0YWJJbmRleF0ub2Zmc2V0V2lkdGggLyAyKSkgLVxuICAgICAgICAodGhpcy5zY3JvbGxiYXIub2Zmc2V0V2lkdGggLyAyKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxMZWZ0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2Nyb2xsYmFyLnNjcm9sbExlZnQgLT0gdGhpcy5zY3JvbGxTdGVwO1xuICB9XG5cbiAgc2Nyb2xsUmlnaHQgPSAoKSA9PiB7XG4gICAgdGhpcy5zY3JvbGxiYXIuc2Nyb2xsTGVmdCArPSB0aGlzLnNjcm9sbFN0ZXA7XG4gIH1cblxuICB2YWxpZGF0ZVN0ZXAgPSAoc3RlcCkgPT4ge1xuICAgIGlmICgnaXNWYWxpZCcgaW4gc3RlcCAmJiAhc3RlcC5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gPEZhQ2hlY2sgY2xhc3NOYW1lPVwic2F2ZS1zdWNjZXNzLWluZGljYXRvclwiIC8+O1xuICAgIH1cbiAgICByZXR1cm4gPHNwYW4gc3R5bGU9e3sgaGVpZ2h0OiAnMzBweCcgfX0gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJ3aXphcmQtaGVhZGVyXCI+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dTY3JvbGwgJiZcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoaWRkZW4tYnV0dG9uXCIgb25DbGljaz17dGhpcy5zY3JvbGxMZWZ0fT5cbiAgICAgICAgICA8RmFDYXJldExlZnQgLz5cbiAgICAgICAgPC9idXR0b24+fVxuICAgICAgICA8dWwgcmVmPXsobm9kZSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsYmFyID0gbm9kZTtcbiAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dIZWFkZXJUYWJzICYmIHRoaXMucHJvcHMuc3RlcHMubWFwKChzdGVwLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFiZWxDbGFzc05hbWUgPSAnJztcbiAgICAgICAgICAgIGlmIChzdGVwLmhhc1JlcXVpcmVkUHJvcHNFcnJvcnMpIHtcbiAgICAgICAgICAgICAgbGFiZWxDbGFzc05hbWUgPSAnb2MtdWktbWFuZGF0b3J5LWVycm9yJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RlcC5oYXNSZXF1aXJlZFByb3BzKSB7XG4gICAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lID0gJ29jLXVpLW1hbmRhdG9yeSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e3N0ZXAuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpID09PSB0aGlzLnByb3BzLmN1cnJlbnRTdGVwID8gJ2RvaW5nJyA6ICcnfVxuICAgICAgICAgICAgICAgIHJlZj17KG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudGFiRWxlbWVudHNbaV0gPSBub2RlO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaWQ9e3N0ZXAuaWR9XG4gICAgICAgICAgICAgICAgICBocmVmPVwiIy9cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0UGFnZShldmVudCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyU2VsZWN0ZWRUYWIoaSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bGFiZWxDbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAge3RoaXMudmFsaWRhdGVTdGVwKHN0ZXApfVxuICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd1Njcm9sbCAmJlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhpZGRlbi1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnNjcm9sbFJpZ2h0fT5cbiAgICAgICAgICA8RmFDYXJldFJpZ2h0IC8+XG4gICAgICAgIDwvYnV0dG9uPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC1oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJXaXphcmRIZWFkZXIiLCJ1cGRhdGVTY3JvbGwiLCJzY3JvbGxiYXIiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwic2V0U3RhdGUiLCJzaG93U2Nyb2xsIiwiY2VudGVyU2VsZWN0ZWRUYWIiLCJ0YWJJbmRleCIsIm9mZnNldExlZnQiLCJpIiwidGFiRWxlbWVudHMiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsU3RlcCIsInNjcm9sbFJpZ2h0IiwidmFsaWRhdGVTdGVwIiwic3RlcCIsImlzVmFsaWQiLCJoZWlnaHQiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsIm5vZGUiLCJwcm9wcyIsInN0ZXBzIiwibWFwIiwibGFiZWxDbGFzc05hbWUiLCJoYXNSZXF1aXJlZFByb3BzRXJyb3JzIiwiaGFzUmVxdWlyZWRQcm9wcyIsImlkIiwiY3VycmVudFN0ZXAiLCJldmVudCIsInNlbGVjdFBhZ2UiLCJuYW1lIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7SUFHcUJBLFk7OztBQWFuQiwwQkFBYztBQUFBOztBQUFBLGlEQUNaLCtCQURZOztBQUFBLFVBcUJkQyxZQXJCYyxHQXFCQyxZQUFNO0FBQ25CLFVBQUksTUFBS0MsU0FBTCxDQUFlQyxXQUFmLEtBQStCLE1BQUtELFNBQUwsQ0FBZUUsV0FBbEQsRUFBK0Q7QUFDN0QsY0FBS0MsUUFBTCxDQUFjO0FBQ1pDLHNCQUFZO0FBREEsU0FBZDtBQUdELE9BSkQsTUFJTztBQUNMLGNBQUtELFFBQUwsQ0FBYztBQUNaQyxzQkFB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RUFBVztBQUNsQix5QkFBS1IsS0FBTCxDQUFXUyxVQUFYLENBQXNCRCxLQUF0QixFQUE2QnpCLENBQTdCO0FBQ0EseUJBQUtILGlCQUFMLENBQXVCRyxDQUF2QjtBQUNEO0FBTkg7QUFRRTtBQUFBO0FBQUEsa0JBQU0sV0FBV29CLGNBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0dkLHVCQUFLcUI7QUFEUjtBQURGLGVBUkY7QUFhRyxxQkFBS3RCLFlBQUwsQ0FBa0JDLElBQWxCO0FBYkg7QUFMRixXQURGO0FBd0JELFNBL0JBO0FBREgsT0FMRjtBQXVDSSxXQUFLRyxLQUFMLENBQVdiLFVBQVgsSUFDQTtBQUFBO0FBQUEsVUFBUSxXQUFVLGVBQWxCLEVBQWtDLFNBQVMsS0FBS1EsV0FBaEQ7QUFDRTtBQURGO0FBeENKLEtBREY7QUE4Q0QsRzs7O0VBeEh1QyxnQkFBTXdCLGE7O2tCQUEzQnRDLFkiLCJmaWxlIjoid2l6YXJkLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENvbnRyb2xMYWJlbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCBGYUNhcmV0TGVmdCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2FyZXQtbGVmdCc7XG5pbXBvcnQgRmFDYXJldFJpZ2h0IGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jYXJldC1yaWdodCc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuXG5pbXBvcnQgJy4vd2l6YXJkLWhlYWRlci5jb21wb25lbnQuc2Nzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2l6YXJkSGVhZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3RlcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgICBoYXNSZXF1aXJlZFByb3BzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGhhc1JlcXVpcmVkUHJvcHNFcnJvcnM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgICAgbmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKS5pc1JlcXVpcmVkLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdFBhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY3VycmVudFN0ZXA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNjcm9sbFN0ZXAgPSA1MDtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93U2Nyb2xsOiB0cnVlLFxuICAgIH07XG5cbiAgICB0aGlzLnRhYkVsZW1lbnRzID0ge307XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVTY3JvbGwpO1xuICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVTY3JvbGwpO1xuICB9XG5cbiAgdXBkYXRlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNjcm9sbGJhci5vZmZzZXRXaWR0aCAhPT0gdGhpcy5zY3JvbGxiYXIuc2Nyb2xsV2lkdGgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93U2Nyb2xsOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93U2Nyb2xsOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNlbnRlclNlbGVjdGVkVGFiID0gKHRhYkluZGV4KSA9PiB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyLm9mZnNldFdpZHRoICE9PSB0aGlzLnNjcm9sbGJhci5zY3JvbGxXaWR0aCkge1xuICAgICAgbGV0IG9mZnNldExlZnQgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJJbmRleDsgaSArPSAxKSB7XG4gICAgICAgIG9mZnNldExlZnQgKz0gdGhpcy50YWJFbGVtZW50c1tpXS5vZmZzZXRXaWR0aDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsYmFyLnNjcm9sbExlZnQgPSAob2Zmc2V0TGVmdCArXG4gICAgICAgICh0aGlzLnRhYkVsZW1lbnRzW3RhYkluZGV4XS5vZmZzZXRXaWR0aCAvIDIpKSAtXG4gICAgICAgICh0aGlzLnNjcm9sbGJhci5vZmZzZXRXaWR0aCAvIDIpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbExlZnQgPSAoKSA9PiB7XG4gICAgdGhpcy5zY3JvbGxiYXIuc2Nyb2xsTGVmdCAtPSB0aGlzLnNjcm9sbFN0ZXA7XG4gIH1cblxuICBzY3JvbGxSaWdodCA9ICgpID0+IHtcbiAgICB0aGlzLnNjcm9sbGJhci5zY3JvbGxMZWZ0ICs9IHRoaXMuc2Nyb2xsU3RlcDtcbiAgfVxuXG4gIHZhbGlkYXRlU3RlcCA9IChzdGVwKSA9PiB7XG4gICAgaWYgKCdpc1ZhbGlkJyBpbiBzdGVwICYmICFzdGVwLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiA8RmFDaGVjayBjbGFzc05hbWU9XCJzYXZlLXN1Y2Nlc3MtaW5kaWNhdG9yXCIgLz47XG4gICAgfVxuICAgIHJldHVybiA8c3BhbiBzdHlsZT17eyBoZWlnaHQ6ICczMHB4JyB9fSAvPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIndpemFyZC1oZWFkZXJcIj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLnNob3dTY3JvbGwgJiZcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhpZGRlbi1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnNjcm9sbExlZnR9PlxuICAgICAgICAgICAgPEZhQ2FyZXRMZWZ0IC8+XG4gICAgICAgICAgPC9idXR0b24+IH1cbiAgICAgICAgPHVsIHJlZj17KG5vZGUpID0+IHsgdGhpcy5zY3JvbGxiYXIgPSBub2RlOyB9fT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5zdGVwcy5tYXAoKHN0ZXAsIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBsYWJlbENsYXNzTmFtZSA9ICcnO1xuICAgICAgICAgICAgaWYgKHN0ZXAuaGFzUmVxdWlyZWRQcm9wc0Vycm9ycykge1xuICAgICAgICAgICAgICBsYWJlbENsYXNzTmFtZSA9ICdvYy11aS1tYW5kYXRvcnktZXJyb3InO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGVwLmhhc1JlcXVpcmVkUHJvcHMpIHtcbiAgICAgICAgICAgICAgbGFiZWxDbGFzc05hbWUgPSAnb2MtdWktbWFuZGF0b3J5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17c3RlcC5pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IHRoaXMucHJvcHMuY3VycmVudFN0ZXAgPyAnZG9pbmcnIDogJyd9XG4gICAgICAgICAgICAgICAgcmVmPXsobm9kZSkgPT4geyB0aGlzLnRhYkVsZW1lbnRzW2ldID0gbm9kZTsgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBpZD17c3RlcC5pZH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjL1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RQYWdlKGV2ZW50LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJTZWxlY3RlZFRhYihpKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtsYWJlbENsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAge3N0ZXAubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7dGhpcy52YWxpZGF0ZVN0ZXAoc3RlcCl9XG4gICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7IHRoaXMuc3RhdGUuc2hvd1Njcm9sbCAmJlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGlkZGVuLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsUmlnaHR9PlxuICAgICAgICAgICAgPEZhQ2FyZXRSaWdodCAvPlxuICAgICAgICAgIDwvYnV0dG9uPiB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=
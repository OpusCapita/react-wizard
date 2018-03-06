'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _wizardHeader = require('./wizard-header.component');

var _wizardHeader2 = _interopRequireDefault(_wizardHeader);

var _wizardFooter = require('./wizard-footer.component');

var _wizardFooter2 = _interopRequireDefault(_wizardFooter);

require('./wizard.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wizard = function (_React$PureComponent) {
  _inherits(Wizard, _React$PureComponent);

  function Wizard() {
    _classCallCheck(this, Wizard);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this));

    _this.getLocation = function () {
      return window.location.href;
    };

    _this.selectPage = function (event, index) {
      if (event) {
        event.preventDefault();
      }
      if (index < 0 || index > _this.props.steps.length - 1) return;
      _this.setState({
        currentStep: index
      });
    };

    _this.state = {
      currentStep: 0
    };
    return _this;
  }

  Wizard.prototype.componentDidMount = function componentDidMount() {
    var stepIndex = this.getStepByUrlParam() ? this.getStepByUrlParam() : this.props.activeStep;
    this.selectPage(null, stepIndex);
  };

  Wizard.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.activeStep !== this.props.activeStep) {
      this.selectPage(undefined, nextProps.activeStep);
    }
  };

  Wizard.prototype.getStepByUrlParam = function getStepByUrlParam() {
    var steps = this.props.steps;

    var index = null;
    var param = /initialStep=([^&]+)/.exec(this.getLocation());
    param = param ? param[1] : null;
    if (param && steps && steps.length > 0) {
      index = steps.findIndex(function (step) {
        return step.id === param;
      });
    }
    return index;
  };

  Wizard.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { id: 'wizard-pages' },
      _react2.default.createElement(_wizardHeader2.default, {
        steps: this.props.steps,
        currentStep: this.state.currentStep,
        selectPage: this.selectPage
      }),
      _react2.default.createElement(
        'div',
        { id: 'wizard-content' },
        this.props.steps[this.state.currentStep].component
      ),
      _react2.default.createElement(_wizardFooter2.default, {
        steps: this.props.steps,
        currentStep: this.state.currentStep,
        selectPage: this.selectPage,
        save: this.props.save,
        cancel: this.props.cancel,
        disableSave: this.props.disableSave,
        disableCancel: this.props.disableCancel,
        localizationTexts: this.props.localizationTexts,
        showPageIndicator: this.props.showPageIndicator,
        showSaveSuccess: this.props.showSaveSuccess
      })
    );
  };

  return Wizard;
}(_react2.default.PureComponent);

exports.default = Wizard;


Wizard.defaultProps = {
  activeStep: 0,
  showPageIndicator: true,
  localizationTexts: {
    save: 'Save',
    cancel: 'Close',
    saved: 'Saved'
  },
  disableSave: false,
  disableCancel: false,
  showSaveSuccess: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIldpemFyZCIsImdldExvY2F0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VsZWN0UGFnZSIsImV2ZW50IiwiaW5kZXgiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwic3RlcHMiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImN1cnJlbnRTdGVwIiwic3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInN0ZXBJbmRleCIsImdldFN0ZXBCeVVybFBhcmFtIiwiYWN0aXZlU3RlcCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJ1bmRlZmluZWQiLCJwYXJhbSIsImV4ZWMiLCJmaW5kSW5kZXgiLCJzdGVwIiwiaWQiLCJyZW5kZXIiLCJjb21wb25lbnQiLCJzYXZlIiwiY2FuY2VsIiwiZGlzYWJsZVNhdmUiLCJkaXNhYmxlQ2FuY2VsIiwibG9jYWxpemF0aW9uVGV4dHMiLCJzaG93UGFnZUluZGljYXRvciIsInNob3dTYXZlU3VjY2VzcyIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJzYXZlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUFDbkIsb0JBQWM7QUFBQTs7QUFBQSxpREFDWiwrQkFEWTs7QUFBQSxVQTZCZEMsV0E3QmMsR0E2QkE7QUFBQSxhQUFNQyxPQUFPQyxRQUFQLENBQWdCQyxJQUF0QjtBQUFBLEtBN0JBOztBQUFBLFVBK0JkQyxVQS9CYyxHQStCRCxVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDN0IsVUFBSUQsS0FBSixFQUFXO0FBQ1RBLGNBQU1FLGNBQU47QUFDRDtBQUNELFVBQUlELFFBQVEsQ0FBUixJQUFhQSxRQUFRLE1BQUtFLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsTUFBakIsR0FBMEIsQ0FBbkQsRUFBc0Q7QUFDdEQsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLHFCQUFhTjtBQURELE9BQWQ7QUFHRCxLQXZDYTs7QUFFWixVQUFLTyxLQUFMLEdBQWE7QUFDWEQsbUJBQWE7QUFERixLQUFiO0FBRlk7QUFLYjs7bUJBRURFLGlCLGdDQUFvQjtBQUNsQixRQUFNQyxZQUFZLEtBQUtDLGlCQUFMLEtBQTJCLEtBQUtBLGlCQUFMLEVBQTNCLEdBQXNELEtBQUtSLEtBQUwsQ0FBV1MsVUFBbkY7QUFDQSxTQUFLYixVQUFMLENBQWdCLElBQWhCLEVBQXNCVyxTQUF0QjtBQUNELEc7O21CQUVERyx5QixzQ0FBMEJDLFMsRUFBVztBQUNuQyxRQUFJQSxVQUFVRixVQUFWLEtBQXlCLEtBQUtULEtBQUwsQ0FBV1MsVUFBeEMsRUFBb0Q7QUFDbEQsV0FBS2IsVUFBTCxDQUFnQmdCLFNBQWhCLEVBQTJCRCxVQUFVRixVQUFyQztBQUNEO0FBQ0YsRzs7bUJBRURELGlCLGdDQUFvQjtBQUFBLFFBQ1ZQLEtBRFUsR0FDQSxLQUFLRCxLQURMLENBQ1ZDLEtBRFU7O0FBRWxCLFFBQUlILFFBQVEsSUFBWjtBQUNBLFFBQUllLFFBQVEsc0JBQXNCQyxJQUF0QixDQUEyQixLQUFLdEIsV0FBTCxFQUEzQixDQUFaO0FBQ0FxQixZQUFRQSxRQUFRQSxNQUFNLENBQU4sQ0FBUixHQUFtQixJQUEzQjtBQUNBLFFBQUlBLFNBQVNaLEtBQVQsSUFBa0JBLE1BQU1DLE1BQU4sR0FBZSxDQUFyQyxFQUF3QztBQUN0Q0osY0FBUUcsTUFBTWMsU0FBTixDQUFnQjtBQUFBLGVBQVFDLEtBQUtDLEVBQUwsS0FBWUosS0FBcEI7QUFBQSxPQUFoQixDQUFSO0FBQ0Q7QUFDRCxXQUFPZixLQUFQO0FBQ0QsRzs7bUJBY0RvQixNLHFCQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxJQUFHLGNBQVI7QUFDRTtBQUNFLGVBQU8sS0FBS2xCLEtBQUwsQ0FBV0MsS0FEcEI7QUFFRSxxQkFBYSxLQUFLSSxLQUFMLENBQVdELFdBRjFCO0FBR0Usb0JBQVksS0FBS1I7QUFIbkIsUUFERjtBQU1FO0FBQUE7QUFBQSxVQUFLLElBQUcsZ0JBQVI7QUFDRyxhQUFLSSxLQUFMLENBQVdDLEtBQVgsQ0FBaUIsS0FBS0ksS0FBTCxDQUFXRCxXQUE1QixFQUF5Q2U7QUFENUMsT0FORjtBQVNFO0FBQ0UsZUFBTyxLQUFLbkIsS0FBTCxDQUFXQyxLQURwQjtBQUVFLHFCQUFhLEtBQUtJLEtBQUwsQ0FBV0QsV0FGMUI7QUFHRSxvQkFBWSxLQUFLUixVQUhuQjtBQUlFLGNBQU0sS0FBS0ksS0FBTCxDQUFXb0IsSUFKbkI7QUFLRSxnQkFBUSxLQUFLcEIsS0FBTCxDQUFXcUIsTUFMckI7QUFNRSxxQkFBYSxLQUFLckIsS0FBTCxDQUFXc0IsV0FOMUI7QUFPRSx1QkFBZSxLQUFLdEIsS0FBTCxDQUFXdUIsYUFQNUI7QUFRRSwyQkFBbUIsS0FBS3ZCLEtBQUwsQ0FBV3dCLGlCQVJoQztBQVNFLDJCQUFtQixLQUFLeEIsS0FBTCxDQUFXeUIsaUJBVGhDO0FBVUUseUJBQWlCLEtBQUt6QixLQUFMLENBQVcwQjtBQVY5QjtBQVRGLEtBREY7QUF3QkQsRzs7O0VBbkVpQyxnQkFBTUMsYTs7a0JBQXJCcEMsTTs7O0FBc0VyQkEsT0FBT3FDLFlBQVAsR0FBc0I7QUFDcEJuQixjQUFZLENBRFE7QUFFcEJnQixxQkFBbUIsSUFGQztBQUdwQkQscUJBQW1CO0FBQ2pCSixVQUFNLE1BRFc7QUFFakJDLFlBQVEsT0FGUztBQUdqQlEsV0FBTztBQUhVLEdBSEM7QUFRcEJQLGVBQWEsS0FSTztBQVNwQkMsaUJBQWUsS0FUSztBQVVwQkcsbUJBQWlCO0FBVkcsQ0FBdEIiLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgV2l6YXJkSGVhZGVyIGZyb20gJy4vd2l6YXJkLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IFdpemFyZEZvb3RlciBmcm9tICcuL3dpemFyZC1mb290ZXIuY29tcG9uZW50JztcblxuaW1wb3J0ICcuL3dpemFyZC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpemFyZCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50U3RlcDogMCxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc3RlcEluZGV4ID0gdGhpcy5nZXRTdGVwQnlVcmxQYXJhbSgpID8gdGhpcy5nZXRTdGVwQnlVcmxQYXJhbSgpIDogdGhpcy5wcm9wcy5hY3RpdmVTdGVwO1xuICAgIHRoaXMuc2VsZWN0UGFnZShudWxsLCBzdGVwSW5kZXgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmFjdGl2ZVN0ZXAgIT09IHRoaXMucHJvcHMuYWN0aXZlU3RlcCkge1xuICAgICAgdGhpcy5zZWxlY3RQYWdlKHVuZGVmaW5lZCwgbmV4dFByb3BzLmFjdGl2ZVN0ZXApO1xuICAgIH1cbiAgfVxuXG4gIGdldFN0ZXBCeVVybFBhcmFtKCkge1xuICAgIGNvbnN0IHsgc3RlcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGluZGV4ID0gbnVsbDtcbiAgICBsZXQgcGFyYW0gPSAvaW5pdGlhbFN0ZXA9KFteJl0rKS8uZXhlYyh0aGlzLmdldExvY2F0aW9uKCkpO1xuICAgIHBhcmFtID0gcGFyYW0gPyBwYXJhbVsxXSA6IG51bGw7XG4gICAgaWYgKHBhcmFtICYmIHN0ZXBzICYmIHN0ZXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIGluZGV4ID0gc3RlcHMuZmluZEluZGV4KHN0ZXAgPT4gc3RlcC5pZCA9PT0gcGFyYW0pO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBnZXRMb2NhdGlvbiA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXG4gIHNlbGVjdFBhZ2UgPSAoZXZlbnQsIGluZGV4KSA9PiB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5wcm9wcy5zdGVwcy5sZW5ndGggLSAxKSByZXR1cm47XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50U3RlcDogaW5kZXgsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwid2l6YXJkLXBhZ2VzXCI+XG4gICAgICAgIDxXaXphcmRIZWFkZXJcbiAgICAgICAgICBzdGVwcz17dGhpcy5wcm9wcy5zdGVwc31cbiAgICAgICAgICBjdXJyZW50U3RlcD17dGhpcy5zdGF0ZS5jdXJyZW50U3RlcH1cbiAgICAgICAgICBzZWxlY3RQYWdlPXt0aGlzLnNlbGVjdFBhZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgaWQ9XCJ3aXphcmQtY29udGVudFwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnN0ZXBzW3RoaXMuc3RhdGUuY3VycmVudFN0ZXBdLmNvbXBvbmVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxXaXphcmRGb290ZXJcbiAgICAgICAgICBzdGVwcz17dGhpcy5wcm9wcy5zdGVwc31cbiAgICAgICAgICBjdXJyZW50U3RlcD17dGhpcy5zdGF0ZS5jdXJyZW50U3RlcH1cbiAgICAgICAgICBzZWxlY3RQYWdlPXt0aGlzLnNlbGVjdFBhZ2V9XG4gICAgICAgICAgc2F2ZT17dGhpcy5wcm9wcy5zYXZlfVxuICAgICAgICAgIGNhbmNlbD17dGhpcy5wcm9wcy5jYW5jZWx9XG4gICAgICAgICAgZGlzYWJsZVNhdmU9e3RoaXMucHJvcHMuZGlzYWJsZVNhdmV9XG4gICAgICAgICAgZGlzYWJsZUNhbmNlbD17dGhpcy5wcm9wcy5kaXNhYmxlQ2FuY2VsfVxuICAgICAgICAgIGxvY2FsaXphdGlvblRleHRzPXt0aGlzLnByb3BzLmxvY2FsaXphdGlvblRleHRzfVxuICAgICAgICAgIHNob3dQYWdlSW5kaWNhdG9yPXt0aGlzLnByb3BzLnNob3dQYWdlSW5kaWNhdG9yfVxuICAgICAgICAgIHNob3dTYXZlU3VjY2Vzcz17dGhpcy5wcm9wcy5zaG93U2F2ZVN1Y2Nlc3N9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbldpemFyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZVN0ZXA6IDAsXG4gIHNob3dQYWdlSW5kaWNhdG9yOiB0cnVlLFxuICBsb2NhbGl6YXRpb25UZXh0czoge1xuICAgIHNhdmU6ICdTYXZlJyxcbiAgICBjYW5jZWw6ICdDbG9zZScsXG4gICAgc2F2ZWQ6ICdTYXZlZCcsXG4gIH0sXG4gIGRpc2FibGVTYXZlOiBmYWxzZSxcbiAgZGlzYWJsZUNhbmNlbDogZmFsc2UsXG4gIHNob3dTYXZlU3VjY2VzczogZmFsc2UsXG59O1xuXG5XaXphcmQucHJvcFR5cGVzID0ge1xuICBzYXZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkaXNhYmxlU2F2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNhbmNlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZUNhbmNlbDogUHJvcFR5cGVzLmJvb2wsXG4gIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBoYXNSZXF1aXJlZFByb3BzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYXNSZXF1aXJlZFByb3BzRXJyb3JzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKS5pc1JlcXVpcmVkLFxuICB9KSkuaXNSZXF1aXJlZCxcbiAgbG9jYWxpemF0aW9uVGV4dHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc2F2ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICBjYW5jZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgc2F2ZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIH0pLFxuICBhY3RpdmVTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzaG93UGFnZUluZGljYXRvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dTYXZlU3VjY2VzczogUHJvcFR5cGVzLmJvb2wsXG59O1xuIl19
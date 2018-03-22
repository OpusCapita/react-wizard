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

      if (_this.props.onStepChange && _this.state.currentStep !== index) {
        var previousStepId = _this.props.steps[_this.state.currentStep].id;
        var currentStepId = _this.props.steps[index].id;
        _this.props.onStepChange(previousStepId, currentStepId);
      }

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
  showSaveSuccess: false,
  onStepChange: null
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIldpemFyZCIsImdldExvY2F0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VsZWN0UGFnZSIsImV2ZW50IiwiaW5kZXgiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwic3RlcHMiLCJsZW5ndGgiLCJvblN0ZXBDaGFuZ2UiLCJzdGF0ZSIsImN1cnJlbnRTdGVwIiwicHJldmlvdXNTdGVwSWQiLCJpZCIsImN1cnJlbnRTdGVwSWQiLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZE1vdW50Iiwic3RlcEluZGV4IiwiZ2V0U3RlcEJ5VXJsUGFyYW0iLCJhY3RpdmVTdGVwIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInVuZGVmaW5lZCIsInBhcmFtIiwiZXhlYyIsImZpbmRJbmRleCIsInN0ZXAiLCJyZW5kZXIiLCJjb21wb25lbnQiLCJzYXZlIiwiY2FuY2VsIiwiZGlzYWJsZVNhdmUiLCJkaXNhYmxlQ2FuY2VsIiwibG9jYWxpemF0aW9uVGV4dHMiLCJzaG93UGFnZUluZGljYXRvciIsInNob3dTYXZlU3VjY2VzcyIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJzYXZlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUFDbkIsb0JBQWM7QUFBQTs7QUFBQSxpREFDWiwrQkFEWTs7QUFBQSxVQTZCZEMsV0E3QmMsR0E2QkE7QUFBQSxhQUFNQyxPQUFPQyxRQUFQLENBQWdCQyxJQUF0QjtBQUFBLEtBN0JBOztBQUFBLFVBK0JkQyxVQS9CYyxHQStCRCxVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDN0IsVUFBSUQsS0FBSixFQUFXO0FBQ1RBLGNBQU1FLGNBQU47QUFDRDtBQUNELFVBQUlELFFBQVEsQ0FB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QUFzQjtBQUNwQmxCLGNBQVksQ0FEUTtBQUVwQmUscUJBQW1CLElBRkM7QUFHcEJELHFCQUFtQjtBQUNqQkosVUFBTSxNQURXO0FBRWpCQyxZQUFRLE9BRlM7QUFHakJRLFdBQU87QUFIVSxHQUhDO0FBUXBCUCxlQUFhLEtBUk87QUFTcEJDLGlCQUFlLEtBVEs7QUFVcEJHLG1CQUFpQixLQVZHO0FBV3BCMUIsZ0JBQWM7QUFYTSxDQUF0QiIsImZpbGUiOiJ3aXphcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBXaXphcmRIZWFkZXIgZnJvbSAnLi93aXphcmQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgV2l6YXJkRm9vdGVyIGZyb20gJy4vd2l6YXJkLWZvb3Rlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgJy4vd2l6YXJkLmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2l6YXJkIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRTdGVwOiAwLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzdGVwSW5kZXggPSB0aGlzLmdldFN0ZXBCeVVybFBhcmFtKCkgPyB0aGlzLmdldFN0ZXBCeVVybFBhcmFtKCkgOiB0aGlzLnByb3BzLmFjdGl2ZVN0ZXA7XG4gICAgdGhpcy5zZWxlY3RQYWdlKG51bGwsIHN0ZXBJbmRleCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuYWN0aXZlU3RlcCAhPT0gdGhpcy5wcm9wcy5hY3RpdmVTdGVwKSB7XG4gICAgICB0aGlzLnNlbGVjdFBhZ2UodW5kZWZpbmVkLCBuZXh0UHJvcHMuYWN0aXZlU3RlcCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RlcEJ5VXJsUGFyYW0oKSB7XG4gICAgY29uc3QgeyBzdGVwcyB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgaW5kZXggPSBudWxsO1xuICAgIGxldCBwYXJhbSA9IC9pbml0aWFsU3RlcD0oW14mXSspLy5leGVjKHRoaXMuZ2V0TG9jYXRpb24oKSk7XG4gICAgcGFyYW0gPSBwYXJhbSA/IHBhcmFtWzFdIDogbnVsbDtcbiAgICBpZiAocGFyYW0gJiYgc3RlcHMgJiYgc3RlcHMubGVuZ3RoID4gMCkge1xuICAgICAgaW5kZXggPSBzdGVwcy5maW5kSW5kZXgoc3RlcCA9PiBzdGVwLmlkID09PSBwYXJhbSk7XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGdldExvY2F0aW9uID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cbiAgc2VsZWN0UGFnZSA9IChldmVudCwgaW5kZXgpID0+IHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLnByb3BzLnN0ZXBzLmxlbmd0aCAtIDEpIHJldHVybjtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uU3RlcENoYW5nZSAmJiAodGhpcy5zdGF0ZS5jdXJyZW50U3RlcCAhPT0gaW5kZXgpKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1N0ZXBJZCA9IHRoaXMucHJvcHMuc3RlcHNbdGhpcy5zdGF0ZS5jdXJyZW50U3RlcF0uaWQ7XG4gICAgICBjb25zdCBjdXJyZW50U3RlcElkID0gdGhpcy5wcm9wcy5zdGVwc1tpbmRleF0uaWQ7XG4gICAgICB0aGlzLnByb3BzLm9uU3RlcENoYW5nZShwcmV2aW91c1N0ZXBJZCwgY3VycmVudFN0ZXBJZCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50U3RlcDogaW5kZXgsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwid2l6YXJkLXBhZ2VzXCI+XG4gICAgICAgIDxXaXphcmRIZWFkZXJcbiAgICAgICAgICBzdGVwcz17dGhpcy5wcm9wcy5zdGVwc31cbiAgICAgICAgICBjdXJyZW50U3RlcD17dGhpcy5zdGF0ZS5jdXJyZW50U3RlcH1cbiAgICAgICAgICBzZWxlY3RQYWdlPXt0aGlzLnNlbGVjdFBhZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgaWQ9XCJ3aXphcmQtY29udGVudFwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnN0ZXBzW3RoaXMuc3RhdGUuY3VycmVudFN0ZXBdLmNvbXBvbmVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxXaXphcmRGb290ZXJcbiAgICAgICAgICBzdGVwcz17dGhpcy5wcm9wcy5zdGVwc31cbiAgICAgICAgICBjdXJyZW50U3RlcD17dGhpcy5zdGF0ZS5jdXJyZW50U3RlcH1cbiAgICAgICAgICBzZWxlY3RQYWdlPXt0aGlzLnNlbGVjdFBhZ2V9XG4gICAgICAgICAgc2F2ZT17dGhpcy5wcm9wcy5zYXZlfVxuICAgICAgICAgIGNhbmNlbD17dGhpcy5wcm9wcy5jYW5jZWx9XG4gICAgICAgICAgZGlzYWJsZVNhdmU9e3RoaXMucHJvcHMuZGlzYWJsZVNhdmV9XG4gICAgICAgICAgZGlzYWJsZUNhbmNlbD17dGhpcy5wcm9wcy5kaXNhYmxlQ2FuY2VsfVxuICAgICAgICAgIGxvY2FsaXphdGlvblRleHRzPXt0aGlzLnByb3BzLmxvY2FsaXphdGlvblRleHRzfVxuICAgICAgICAgIHNob3dQYWdlSW5kaWNhdG9yPXt0aGlzLnByb3BzLnNob3dQYWdlSW5kaWNhdG9yfVxuICAgICAgICAgIHNob3dTYXZlU3VjY2Vzcz17dGhpcy5wcm9wcy5zaG93U2F2ZVN1Y2Nlc3N9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbldpemFyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZVN0ZXA6IDAsXG4gIHNob3dQYWdlSW5kaWNhdG9yOiB0cnVlLFxuICBsb2NhbGl6YXRpb25UZXh0czoge1xuICAgIHNhdmU6ICdTYXZlJyxcbiAgICBjYW5jZWw6ICdDbG9zZScsXG4gICAgc2F2ZWQ6ICdTYXZlZCcsXG4gIH0sXG4gIGRpc2FibGVTYXZlOiBmYWxzZSxcbiAgZGlzYWJsZUNhbmNlbDogZmFsc2UsXG4gIHNob3dTYXZlU3VjY2VzczogZmFsc2UsXG4gIG9uU3RlcENoYW5nZTogbnVsbCxcbn07XG5cbldpemFyZC5wcm9wVHlwZXMgPSB7XG4gIHNhdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVTYXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkaXNhYmxlQ2FuY2VsOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3RlcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29tcG9uZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGhhc1JlcXVpcmVkUHJvcHM6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc1JlcXVpcmVkUHJvcHNFcnJvcnM6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLmlzUmVxdWlyZWQsXG4gIH0pKS5pc1JlcXVpcmVkLFxuICBsb2NhbGl6YXRpb25UZXh0czogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzYXZlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIGNhbmNlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICBzYXZlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgfSksXG4gIGFjdGl2ZVN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNob3dQYWdlSW5kaWNhdG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd1NhdmVTdWNjZXNzOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25TdGVwQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iXX0=
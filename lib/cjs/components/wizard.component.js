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
        showHeaderTabs: this.props.showHeaderTabs,
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
  showHeaderTabs: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIldpemFyZCIsImdldExvY2F0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VsZWN0UGFnZSIsImV2ZW50IiwiaW5kZXgiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwic3RlcHMiLCJsZW5ndGgiLCJvblN0ZXBDaGFuZ2UiLCJzdGF0ZSIsImN1cnJlbnRTdGVwIiwicHJldmlvdXNTdGVwSWQiLCJpZCIsImN1cnJlbnRTdGVwSWQiLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZE1vdW50Iiwic3RlcEluZGV4IiwiZ2V0U3RlcEJ5VXJsUGFyYW0iLCJhY3RpdmVTdGVwIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInVuZGVmaW5lZCIsInBhcmFtIiwiZXhlYyIsImZpbmRJbmRleCIsInN0ZXAiLCJyZW5kZXIiLCJzaG93SGVhZGVyVGFicyIsImNvbXBvbmVudCIsInNhdmUiLCJjYW5jZWwiLCJkaXNhYmxlU2F2ZSIsImRpc2FibGVDYW5jZWwiLCJsb2NhbGl6YXRpb25UZXh0cyIsInNob3dQYWdlSW5kaWNhdG9yIiwic2hvd1NhdmVTdWNjZXNzIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInNhdmVkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7SUFFcUJBLE07OztBQUNuQixvQkFBYztBQUFBOztBQUFBLGlEQUNaLCtCQURZOztBQUFBLFVBNkJkQyxXQTdCYyxHQTZCQTtBQUFBLGFBQU1DLE9BQU9DLFFBQVAsQ0FBZ0JDLElBQXRCO0FBQUEsS0E3QkE7O0FBQUEsVUErQmRDLFVBL0JjLEdBK0JELFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUM3QixVQUFJRCxLQUFKLEVBQVc7QUFDVEEsY0FBTUUsY0FBTjtBQUNEO0FB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Ozs7RUEzRWlDLGdCQUFNQyxhOztrQkFBckJ4QyxNOzs7QUE4RXJCQSxPQUFPeUMsWUFBUCxHQUFzQjtBQUNwQm5CLGNBQVksQ0FEUTtBQUVwQmdCLHFCQUFtQixJQUZDO0FBR3BCUCxrQkFBZ0IsSUFISTtBQUlwQk0scUJBQW1CO0FBQ2pCSixVQUFNLE1BRFc7QUFFakJDLFlBQVEsT0FGUztBQUdqQlEsV0FBTztBQUhVLEdBSkM7QUFTcEJQLGVBQWEsS0FUTztBQVVwQkMsaUJBQWUsS0FWSztBQVdwQkcsbUJBQWlCLEtBWEc7QUFZcEIzQixnQkFBYztBQVpNLENBQXRCIiwiZmlsZSI6IndpemFyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFdpemFyZEhlYWRlciBmcm9tICcuL3dpemFyZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBXaXphcmRGb290ZXIgZnJvbSAnLi93aXphcmQtZm9vdGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCAnLi93aXphcmQuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXphcmQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFN0ZXA6IDAsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHN0ZXBJbmRleCA9IHRoaXMuZ2V0U3RlcEJ5VXJsUGFyYW0oKSA/IHRoaXMuZ2V0U3RlcEJ5VXJsUGFyYW0oKSA6IHRoaXMucHJvcHMuYWN0aXZlU3RlcDtcbiAgICB0aGlzLnNlbGVjdFBhZ2UobnVsbCwgc3RlcEluZGV4KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5hY3RpdmVTdGVwICE9PSB0aGlzLnByb3BzLmFjdGl2ZVN0ZXApIHtcbiAgICAgIHRoaXMuc2VsZWN0UGFnZSh1bmRlZmluZWQsIG5leHRQcm9wcy5hY3RpdmVTdGVwKTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGVwQnlVcmxQYXJhbSgpIHtcbiAgICBjb25zdCB7IHN0ZXBzIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBpbmRleCA9IG51bGw7XG4gICAgbGV0IHBhcmFtID0gL2luaXRpYWxTdGVwPShbXiZdKykvLmV4ZWModGhpcy5nZXRMb2NhdGlvbigpKTtcbiAgICBwYXJhbSA9IHBhcmFtID8gcGFyYW1bMV0gOiBudWxsO1xuICAgIGlmIChwYXJhbSAmJiBzdGVwcyAmJiBzdGVwcy5sZW5ndGggPiAwKSB7XG4gICAgICBpbmRleCA9IHN0ZXBzLmZpbmRJbmRleChzdGVwID0+IHN0ZXAuaWQgPT09IHBhcmFtKTtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZ2V0TG9jYXRpb24gPSAoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuICBzZWxlY3RQYWdlID0gKGV2ZW50LCBpbmRleCkgPT4ge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMucHJvcHMuc3RlcHMubGVuZ3RoIC0gMSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25TdGVwQ2hhbmdlICYmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGVwICE9PSBpbmRleCkpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzU3RlcElkID0gdGhpcy5wcm9wcy5zdGVwc1t0aGlzLnN0YXRlLmN1cnJlbnRTdGVwXS5pZDtcbiAgICAgIGNvbnN0IGN1cnJlbnRTdGVwSWQgPSB0aGlzLnByb3BzLnN0ZXBzW2luZGV4XS5pZDtcbiAgICAgIHRoaXMucHJvcHMub25TdGVwQ2hhbmdlKHByZXZpb3VzU3RlcElkLCBjdXJyZW50U3RlcElkKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRTdGVwOiBpbmRleCxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJ3aXphcmQtcGFnZXNcIj5cbiAgICAgICAgPFdpemFyZEhlYWRlclxuICAgICAgICAgIHN0ZXBzPXt0aGlzLnByb3BzLnN0ZXBzfVxuICAgICAgICAgIHNob3dIZWFkZXJUYWJzPXt0aGlzLnByb3BzLnNob3dIZWFkZXJUYWJzfVxuICAgICAgICAgIGN1cnJlbnRTdGVwPXt0aGlzLnN0YXRlLmN1cnJlbnRTdGVwfVxuICAgICAgICAgIHNlbGVjdFBhZ2U9e3RoaXMuc2VsZWN0UGFnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBpZD1cIndpemFyZC1jb250ZW50XCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuc3RlcHNbdGhpcy5zdGF0ZS5jdXJyZW50U3RlcF0uY29tcG9uZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFdpemFyZEZvb3RlclxuICAgICAgICAgIHN0ZXBzPXt0aGlzLnByb3BzLnN0ZXBzfVxuICAgICAgICAgIGN1cnJlbnRTdGVwPXt0aGlzLnN0YXRlLmN1cnJlbnRTdGVwfVxuICAgICAgICAgIHNlbGVjdFBhZ2U9e3RoaXMuc2VsZWN0UGFnZX1cbiAgICAgICAgICBzYXZlPXt0aGlzLnByb3BzLnNhdmV9XG4gICAgICAgICAgY2FuY2VsPXt0aGlzLnByb3BzLmNhbmNlbH1cbiAgICAgICAgICBkaXNhYmxlU2F2ZT17dGhpcy5wcm9wcy5kaXNhYmxlU2F2ZX1cbiAgICAgICAgICBkaXNhYmxlQ2FuY2VsPXt0aGlzLnByb3BzLmRpc2FibGVDYW5jZWx9XG4gICAgICAgICAgbG9jYWxpemF0aW9uVGV4dHM9e3RoaXMucHJvcHMubG9jYWxpemF0aW9uVGV4dHN9XG4gICAgICAgICAgc2hvd1BhZ2VJbmRpY2F0b3I9e3RoaXMucHJvcHMuc2hvd1BhZ2VJbmRpY2F0b3J9XG4gICAgICAgICAgc2hvd1NhdmVTdWNjZXNzPXt0aGlzLnByb3BzLnNob3dTYXZlU3VjY2Vzc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuV2l6YXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlU3RlcDogMCxcbiAgc2hvd1BhZ2VJbmRpY2F0b3I6IHRydWUsXG4gIHNob3dIZWFkZXJUYWJzOiB0cnVlLFxuICBsb2NhbGl6YXRpb25UZXh0czoge1xuICAgIHNhdmU6ICdTYXZlJyxcbiAgICBjYW5jZWw6ICdDbG9zZScsXG4gICAgc2F2ZWQ6ICdTYXZlZCcsXG4gIH0sXG4gIGRpc2FibGVTYXZlOiBmYWxzZSxcbiAgZGlzYWJsZUNhbmNlbDogZmFsc2UsXG4gIHNob3dTYXZlU3VjY2VzczogZmFsc2UsXG4gIG9uU3RlcENoYW5nZTogbnVsbCxcbn07XG5cbldpemFyZC5wcm9wVHlwZXMgPSB7XG4gIHNhdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVTYXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkaXNhYmxlQ2FuY2VsOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3RlcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29tcG9uZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGhhc1JlcXVpcmVkUHJvcHM6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc1JlcXVpcmVkUHJvcHNFcnJvcnM6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICB9KSkuaXNSZXF1aXJlZCxcbiAgbG9jYWxpemF0aW9uVGV4dHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc2F2ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICBjYW5jZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgc2F2ZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIH0pLFxuICBhY3RpdmVTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzaG93UGFnZUluZGljYXRvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dIZWFkZXJUYWJzOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd1NhdmVTdWNjZXNzOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25TdGVwQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iXX0=
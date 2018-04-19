function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

import WizardHeader from './wizard-header.component';
import WizardFooter from './wizard-footer.component';

import './wizard.component.scss';

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
    return React.createElement(
      'div',
      { id: 'wizard-pages' },
      React.createElement(WizardHeader, {
        steps: this.props.steps,
        showHeaderTabs: this.props.showHeaderTabs,
        currentStep: this.state.currentStep,
        selectPage: this.selectPage
      }),
      React.createElement(
        'div',
        { id: 'wizard-content' },
        this.props.steps[this.state.currentStep].component
      ),
      React.createElement(WizardFooter, {
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
}(React.PureComponent);

export { Wizard as default };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiV2l6YXJkSGVhZGVyIiwiV2l6YXJkRm9vdGVyIiwiV2l6YXJkIiwiZ2V0TG9jYXRpb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzZWxlY3RQYWdlIiwiZXZlbnQiLCJpbmRleCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJzdGVwcyIsImxlbmd0aCIsIm9uU3RlcENoYW5nZSIsInN0YXRlIiwiY3VycmVudFN0ZXAiLCJwcmV2aW91c1N0ZXBJZCIsImlkIiwiY3VycmVudFN0ZXBJZCIsInNldFN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzdGVwSW5kZXgiLCJnZXRTdGVwQnlVcmxQYXJhbSIsImFjdGl2ZVN0ZXAiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwidW5kZWZpbmVkIiwicGFyYW0iLCJleGVjIiwiZmluZEluZGV4Iiwic3RlcCIsInJlbmRlciIsInNob3dIZWFkZXJUYWJzIiwiY29tcG9uZW50Iiwic2F2ZSIsImNhbmNlbCIsImRpc2FibGVTYXZlIiwiZGlzYWJsZUNhbmNlbCIsImxvY2FsaXphdGlvblRleHRzIiwic2hvd1BhZ2VJbmRpY2F0b3IiLCJzaG93U2F2ZVN1Y2Nlc3MiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwic2F2ZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCOztBQUVBLE9BQU9DLFlBQVAsTUFBeUIsMkJBQXpCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QiwyQkFBekI7O0FBRUEsT0FBTyx5QkFBUDs7SUFFcUJDLE07OztBQUNuQixvQkFBYztBQUFBOztBQUFBLGlEQUNaLCtCQURZOztBQUFBLFVBNkJkQyxXQTdCYyxHQTZCQTtBQUFBLGFB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QkFBZSxLQUFLMUIsS0FBTCxDQUFXMkIsYUFQNUI7QUFRRSwyQkFBbUIsS0FBSzNCLEtBQUwsQ0FBVzRCLGlCQVJoQztBQVNFLDJCQUFtQixLQUFLNUIsS0FBTCxDQUFXNkIsaUJBVGhDO0FBVUUseUJBQWlCLEtBQUs3QixLQUFMLENBQVc4QjtBQVY5QjtBQVZGLEtBREY7QUF5QkQsRzs7O0VBM0VpQzNDLE1BQU00QyxhOztTQUFyQnhDLE07OztBQThFckJBLE9BQU95QyxZQUFQLEdBQXNCO0FBQ3BCbkIsY0FBWSxDQURRO0FBRXBCZ0IscUJBQW1CLElBRkM7QUFHcEJQLGtCQUFnQixJQUhJO0FBSXBCTSxxQkFBbUI7QUFDakJKLFVBQU0sTUFEVztBQUVqQkMsWUFBUSxPQUZTO0FBR2pCUSxXQUFPO0FBSFUsR0FKQztBQVNwQlAsZUFBYSxLQVRPO0FBVXBCQyxpQkFBZSxLQVZLO0FBV3BCRyxtQkFBaUIsS0FYRztBQVlwQjNCLGdCQUFjO0FBWk0sQ0FBdEIiLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgV2l6YXJkSGVhZGVyIGZyb20gJy4vd2l6YXJkLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IFdpemFyZEZvb3RlciBmcm9tICcuL3dpemFyZC1mb290ZXIuY29tcG9uZW50JztcblxuaW1wb3J0ICcuL3dpemFyZC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpemFyZCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50U3RlcDogMCxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc3RlcEluZGV4ID0gdGhpcy5nZXRTdGVwQnlVcmxQYXJhbSgpID8gdGhpcy5nZXRTdGVwQnlVcmxQYXJhbSgpIDogdGhpcy5wcm9wcy5hY3RpdmVTdGVwO1xuICAgIHRoaXMuc2VsZWN0UGFnZShudWxsLCBzdGVwSW5kZXgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmFjdGl2ZVN0ZXAgIT09IHRoaXMucHJvcHMuYWN0aXZlU3RlcCkge1xuICAgICAgdGhpcy5zZWxlY3RQYWdlKHVuZGVmaW5lZCwgbmV4dFByb3BzLmFjdGl2ZVN0ZXApO1xuICAgIH1cbiAgfVxuXG4gIGdldFN0ZXBCeVVybFBhcmFtKCkge1xuICAgIGNvbnN0IHsgc3RlcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGluZGV4ID0gbnVsbDtcbiAgICBsZXQgcGFyYW0gPSAvaW5pdGlhbFN0ZXA9KFteJl0rKS8uZXhlYyh0aGlzLmdldExvY2F0aW9uKCkpO1xuICAgIHBhcmFtID0gcGFyYW0gPyBwYXJhbVsxXSA6IG51bGw7XG4gICAgaWYgKHBhcmFtICYmIHN0ZXBzICYmIHN0ZXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIGluZGV4ID0gc3RlcHMuZmluZEluZGV4KHN0ZXAgPT4gc3RlcC5pZCA9PT0gcGFyYW0pO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBnZXRMb2NhdGlvbiA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXG4gIHNlbGVjdFBhZ2UgPSAoZXZlbnQsIGluZGV4KSA9PiB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5wcm9wcy5zdGVwcy5sZW5ndGggLSAxKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblN0ZXBDaGFuZ2UgJiYgKHRoaXMuc3RhdGUuY3VycmVudFN0ZXAgIT09IGluZGV4KSkge1xuICAgICAgY29uc3QgcHJldmlvdXNTdGVwSWQgPSB0aGlzLnByb3BzLnN0ZXBzW3RoaXMuc3RhdGUuY3VycmVudFN0ZXBdLmlkO1xuICAgICAgY29uc3QgY3VycmVudFN0ZXBJZCA9IHRoaXMucHJvcHMuc3RlcHNbaW5kZXhdLmlkO1xuICAgICAgdGhpcy5wcm9wcy5vblN0ZXBDaGFuZ2UocHJldmlvdXNTdGVwSWQsIGN1cnJlbnRTdGVwSWQpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudFN0ZXA6IGluZGV4LFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIndpemFyZC1wYWdlc1wiPlxuICAgICAgICA8V2l6YXJkSGVhZGVyXG4gICAgICAgICAgc3RlcHM9e3RoaXMucHJvcHMuc3RlcHN9XG4gICAgICAgICAgc2hvd0hlYWRlclRhYnM9e3RoaXMucHJvcHMuc2hvd0hlYWRlclRhYnN9XG4gICAgICAgICAgY3VycmVudFN0ZXA9e3RoaXMuc3RhdGUuY3VycmVudFN0ZXB9XG4gICAgICAgICAgc2VsZWN0UGFnZT17dGhpcy5zZWxlY3RQYWdlfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGlkPVwid2l6YXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5zdGVwc1t0aGlzLnN0YXRlLmN1cnJlbnRTdGVwXS5jb21wb25lbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8V2l6YXJkRm9vdGVyXG4gICAgICAgICAgc3RlcHM9e3RoaXMucHJvcHMuc3RlcHN9XG4gICAgICAgICAgY3VycmVudFN0ZXA9e3RoaXMuc3RhdGUuY3VycmVudFN0ZXB9XG4gICAgICAgICAgc2VsZWN0UGFnZT17dGhpcy5zZWxlY3RQYWdlfVxuICAgICAgICAgIHNhdmU9e3RoaXMucHJvcHMuc2F2ZX1cbiAgICAgICAgICBjYW5jZWw9e3RoaXMucHJvcHMuY2FuY2VsfVxuICAgICAgICAgIGRpc2FibGVTYXZlPXt0aGlzLnByb3BzLmRpc2FibGVTYXZlfVxuICAgICAgICAgIGRpc2FibGVDYW5jZWw9e3RoaXMucHJvcHMuZGlzYWJsZUNhbmNlbH1cbiAgICAgICAgICBsb2NhbGl6YXRpb25UZXh0cz17dGhpcy5wcm9wcy5sb2NhbGl6YXRpb25UZXh0c31cbiAgICAgICAgICBzaG93UGFnZUluZGljYXRvcj17dGhpcy5wcm9wcy5zaG93UGFnZUluZGljYXRvcn1cbiAgICAgICAgICBzaG93U2F2ZVN1Y2Nlc3M9e3RoaXMucHJvcHMuc2hvd1NhdmVTdWNjZXNzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5XaXphcmQuZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmVTdGVwOiAwLFxuICBzaG93UGFnZUluZGljYXRvcjogdHJ1ZSxcbiAgc2hvd0hlYWRlclRhYnM6IHRydWUsXG4gIGxvY2FsaXphdGlvblRleHRzOiB7XG4gICAgc2F2ZTogJ1NhdmUnLFxuICAgIGNhbmNlbDogJ0Nsb3NlJyxcbiAgICBzYXZlZDogJ1NhdmVkJyxcbiAgfSxcbiAgZGlzYWJsZVNhdmU6IGZhbHNlLFxuICBkaXNhYmxlQ2FuY2VsOiBmYWxzZSxcbiAgc2hvd1NhdmVTdWNjZXNzOiBmYWxzZSxcbiAgb25TdGVwQ2hhbmdlOiBudWxsLFxufTtcblxuV2l6YXJkLnByb3BUeXBlcyA9IHtcbiAgc2F2ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZVNhdmU6IFByb3BUeXBlcy5ib29sLFxuICBjYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVDYW5jZWw6IFByb3BUeXBlcy5ib29sLFxuICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgaGFzUmVxdWlyZWRQcm9wczogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFzUmVxdWlyZWRQcm9wc0Vycm9yczogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgIG5hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIH0pKS5pc1JlcXVpcmVkLFxuICBsb2NhbGl6YXRpb25UZXh0czogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzYXZlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIGNhbmNlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICBzYXZlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgfSksXG4gIGFjdGl2ZVN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNob3dQYWdlSW5kaWNhdG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0hlYWRlclRhYnM6IFByb3BUeXBlcy5ib29sLFxuICBzaG93U2F2ZVN1Y2Nlc3M6IFByb3BUeXBlcy5ib29sLFxuICBvblN0ZXBDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxufTtcbiJdfQ==
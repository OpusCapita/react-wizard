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
  localizationTexts: {
    save: 'Save',
    cancel: 'Close',
    saved: 'Saved'
  },
  disableSave: false,
  disableCancel: false,
  showSaveSuccess: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiV2l6YXJkSGVhZGVyIiwiV2l6YXJkRm9vdGVyIiwiV2l6YXJkIiwiZ2V0TG9jYXRpb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzZWxlY3RQYWdlIiwiZXZlbnQiLCJpbmRleCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJzdGVwcyIsImxlbmd0aCIsInNldFN0YXRlIiwiY3VycmVudFN0ZXAiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50Iiwic3RlcEluZGV4IiwiZ2V0U3RlcEJ5VXJsUGFyYW0iLCJhY3RpdmVTdGVwIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInVuZGVmaW5lZCIsInBhcmFtIiwiZXhlYyIsImZpbmRJbmRleCIsInN0ZXAiLCJpZCIsInJlbmRlciIsImNvbXBvbmVudCIsInNhdmUiLCJjYW5jZWwiLCJkaXNhYmxlU2F2ZSIsImRpc2FibGVDYW5jZWwiLCJsb2NhbGl6YXRpb25UZXh0cyIsInNob3dQYWdlSW5kaWNhdG9yIiwic2hvd1NhdmVTdWNjZXNzIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInNhdmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0Qjs7QUFFQSxPQUFPQyxZQUFQLE1BQXlCLDJCQUF6QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsMkJBQXpCOztBQUVBLE9BQU8seUJBQVA7O0lBRXFCQyxNOzs7QUFDbkIsb0JBQWM7QUFBQTs7QUFBQSxpREFDWiwrQkFEWTs7QUFBQSxVQTZCZEMsV0E3QmMsR0E2QkE7QUFBQSxhQUFNQyxPQUFPQyxRQUFQLENBQWdCQyxJQUF0QjtBQUFBLEtBN0JBOztBQUFBLFVBK0JkQyxVQS9CYyxHQStCRCxV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aXphcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBXaXphcmRIZWFkZXIgZnJvbSAnLi93aXphcmQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgV2l6YXJkRm9vdGVyIGZyb20gJy4vd2l6YXJkLWZvb3Rlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgJy4vd2l6YXJkLmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2l6YXJkIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRTdGVwOiAwLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzdGVwSW5kZXggPSB0aGlzLmdldFN0ZXBCeVVybFBhcmFtKCkgPyB0aGlzLmdldFN0ZXBCeVVybFBhcmFtKCkgOiB0aGlzLnByb3BzLmFjdGl2ZVN0ZXA7XG4gICAgdGhpcy5zZWxlY3RQYWdlKG51bGwsIHN0ZXBJbmRleCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuYWN0aXZlU3RlcCAhPT0gdGhpcy5wcm9wcy5hY3RpdmVTdGVwKSB7XG4gICAgICB0aGlzLnNlbGVjdFBhZ2UodW5kZWZpbmVkLCBuZXh0UHJvcHMuYWN0aXZlU3RlcCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RlcEJ5VXJsUGFyYW0oKSB7XG4gICAgY29uc3QgeyBzdGVwcyB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgaW5kZXggPSBudWxsO1xuICAgIGxldCBwYXJhbSA9IC9pbml0aWFsU3RlcD0oW14mXSspLy5leGVjKHRoaXMuZ2V0TG9jYXRpb24oKSk7XG4gICAgcGFyYW0gPSBwYXJhbSA/IHBhcmFtWzFdIDogbnVsbDtcbiAgICBpZiAocGFyYW0gJiYgc3RlcHMgJiYgc3RlcHMubGVuZ3RoID4gMCkge1xuICAgICAgaW5kZXggPSBzdGVwcy5maW5kSW5kZXgoc3RlcCA9PiBzdGVwLmlkID09PSBwYXJhbSk7XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGdldExvY2F0aW9uID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cbiAgc2VsZWN0UGFnZSA9IChldmVudCwgaW5kZXgpID0+IHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLnByb3BzLnN0ZXBzLmxlbmd0aCAtIDEpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRTdGVwOiBpbmRleCxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJ3aXphcmQtcGFnZXNcIj5cbiAgICAgICAgPFdpemFyZEhlYWRlclxuICAgICAgICAgIHN0ZXBzPXt0aGlzLnByb3BzLnN0ZXBzfVxuICAgICAgICAgIGN1cnJlbnRTdGVwPXt0aGlzLnN0YXRlLmN1cnJlbnRTdGVwfVxuICAgICAgICAgIHNlbGVjdFBhZ2U9e3RoaXMuc2VsZWN0UGFnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBpZD1cIndpemFyZC1jb250ZW50XCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuc3RlcHNbdGhpcy5zdGF0ZS5jdXJyZW50U3RlcF0uY29tcG9uZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFdpemFyZEZvb3RlclxuICAgICAgICAgIHN0ZXBzPXt0aGlzLnByb3BzLnN0ZXBzfVxuICAgICAgICAgIGN1cnJlbnRTdGVwPXt0aGlzLnN0YXRlLmN1cnJlbnRTdGVwfVxuICAgICAgICAgIHNlbGVjdFBhZ2U9e3RoaXMuc2VsZWN0UGFnZX1cbiAgICAgICAgICBzYXZlPXt0aGlzLnByb3BzLnNhdmV9XG4gICAgICAgICAgY2FuY2VsPXt0aGlzLnByb3BzLmNhbmNlbH1cbiAgICAgICAgICBkaXNhYmxlU2F2ZT17dGhpcy5wcm9wcy5kaXNhYmxlU2F2ZX1cbiAgICAgICAgICBkaXNhYmxlQ2FuY2VsPXt0aGlzLnByb3BzLmRpc2FibGVDYW5jZWx9XG4gICAgICAgICAgbG9jYWxpemF0aW9uVGV4dHM9e3RoaXMucHJvcHMubG9jYWxpemF0aW9uVGV4dHN9XG4gICAgICAgICAgc2hvd1BhZ2VJbmRpY2F0b3I9e3RoaXMucHJvcHMuc2hvd1BhZ2VJbmRpY2F0b3J9XG4gICAgICAgICAgc2hvd1NhdmVTdWNjZXNzPXt0aGlzLnByb3BzLnNob3dTYXZlU3VjY2Vzc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuV2l6YXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlU3RlcDogMCxcbiAgc2hvd1BhZ2VJbmRpY2F0b3I6IHRydWUsXG4gIGxvY2FsaXphdGlvblRleHRzOiB7XG4gICAgc2F2ZTogJ1NhdmUnLFxuICAgIGNhbmNlbDogJ0Nsb3NlJyxcbiAgICBzYXZlZDogJ1NhdmVkJyxcbiAgfSxcbiAgZGlzYWJsZVNhdmU6IGZhbHNlLFxuICBkaXNhYmxlQ2FuY2VsOiBmYWxzZSxcbiAgc2hvd1NhdmVTdWNjZXNzOiBmYWxzZSxcbn07XG5cbldpemFyZC5wcm9wVHlwZXMgPSB7XG4gIHNhdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVTYXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkaXNhYmxlQ2FuY2VsOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3RlcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29tcG9uZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGhhc1JlcXVpcmVkUHJvcHM6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc1JlcXVpcmVkUHJvcHNFcnJvcnM6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLmlzUmVxdWlyZWQsXG4gIH0pKS5pc1JlcXVpcmVkLFxuICBsb2NhbGl6YXRpb25UZXh0czogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzYXZlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIGNhbmNlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICBzYXZlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgfSksXG4gIGFjdGl2ZVN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNob3dQYWdlSW5kaWNhdG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd1NhdmVTdWNjZXNzOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iXX0=
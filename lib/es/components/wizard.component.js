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
  showSaveSuccess: false,
  onStepChange: null
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiV2l6YXJkSGVhZGVyIiwiV2l6YXJkRm9vdGVyIiwiV2l6YXJkIiwiZ2V0TG9jYXRpb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzZWxlY3RQYWdlIiwiZXZlbnQiLCJpbmRleCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJzdGVwcyIsImxlbmd0aCIsIm9uU3RlcENoYW5nZSIsInN0YXRlIiwiY3VycmVudFN0ZXAiLCJwcmV2aW91c1N0ZXBJZCIsImlkIiwiY3VycmVudFN0ZXBJZCIsInNldFN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzdGVwSW5kZXgiLCJnZXRTdGVwQnlVcmxQYXJhbSIsImFjdGl2ZVN0ZXAiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwidW5kZWZpbmVkIiwicGFyYW0iLCJleGVjIiwiZmluZEluZGV4Iiwic3RlcCIsInJlbmRlciIsImNvbXBvbmVudCIsInNhdmUiLCJjYW5jZWwiLCJkaXNhYmxlU2F2ZSIsImRpc2FibGVDYW5jZWwiLCJsb2NhbGl6YXRpb25UZXh0cyIsInNob3dQYWdlSW5kaWNhdG9yIiwic2hvd1NhdmVTdWNjZXNzIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInNhdmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0Qjs7QUFFQSxPQUFPQyxZQUFQLE1BQXlCLDJCQUF6QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsMkJBQXpCOztBQUVBLE9BQU8seUJBQVA7O0lBRXFCQyxNOzs7QUFDbkIsb0JBQWM7QUFBQTs7QUFBQSxpREFDWiwrQkFEWTs7QUFBQSxVQTZCZEMsV0E3QmMsR0E2QkE7QUFBQSxhQUFNQyxPQUFPQyxRQUFQLENB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Q0FBVzJCLGlCQVJoQztBQVNFLDJCQUFtQixLQUFLM0IsS0FBTCxDQUFXNEIsaUJBVGhDO0FBVUUseUJBQWlCLEtBQUs1QixLQUFMLENBQVc2QjtBQVY5QjtBQVRGLEtBREY7QUF3QkQsRzs7O0VBMUVpQzFDLE1BQU0yQyxhOztTQUFyQnZDLE07OztBQTZFckJBLE9BQU93QyxZQUFQLEdBQXNCO0FBQ3BCbEIsY0FBWSxDQURRO0FBRXBCZSxxQkFBbUIsSUFGQztBQUdwQkQscUJBQW1CO0FBQ2pCSixVQUFNLE1BRFc7QUFFakJDLFlBQVEsT0FGUztBQUdqQlEsV0FBTztBQUhVLEdBSEM7QUFRcEJQLGVBQWEsS0FSTztBQVNwQkMsaUJBQWUsS0FUSztBQVVwQkcsbUJBQWlCLEtBVkc7QUFXcEIxQixnQkFBYztBQVhNLENBQXRCIiwiZmlsZSI6IndpemFyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFdpemFyZEhlYWRlciBmcm9tICcuL3dpemFyZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBXaXphcmRGb290ZXIgZnJvbSAnLi93aXphcmQtZm9vdGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCAnLi93aXphcmQuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXphcmQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFN0ZXA6IDAsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHN0ZXBJbmRleCA9IHRoaXMuZ2V0U3RlcEJ5VXJsUGFyYW0oKSA/IHRoaXMuZ2V0U3RlcEJ5VXJsUGFyYW0oKSA6IHRoaXMucHJvcHMuYWN0aXZlU3RlcDtcbiAgICB0aGlzLnNlbGVjdFBhZ2UobnVsbCwgc3RlcEluZGV4KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5hY3RpdmVTdGVwICE9PSB0aGlzLnByb3BzLmFjdGl2ZVN0ZXApIHtcbiAgICAgIHRoaXMuc2VsZWN0UGFnZSh1bmRlZmluZWQsIG5leHRQcm9wcy5hY3RpdmVTdGVwKTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGVwQnlVcmxQYXJhbSgpIHtcbiAgICBjb25zdCB7IHN0ZXBzIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBpbmRleCA9IG51bGw7XG4gICAgbGV0IHBhcmFtID0gL2luaXRpYWxTdGVwPShbXiZdKykvLmV4ZWModGhpcy5nZXRMb2NhdGlvbigpKTtcbiAgICBwYXJhbSA9IHBhcmFtID8gcGFyYW1bMV0gOiBudWxsO1xuICAgIGlmIChwYXJhbSAmJiBzdGVwcyAmJiBzdGVwcy5sZW5ndGggPiAwKSB7XG4gICAgICBpbmRleCA9IHN0ZXBzLmZpbmRJbmRleChzdGVwID0+IHN0ZXAuaWQgPT09IHBhcmFtKTtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZ2V0TG9jYXRpb24gPSAoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuICBzZWxlY3RQYWdlID0gKGV2ZW50LCBpbmRleCkgPT4ge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMucHJvcHMuc3RlcHMubGVuZ3RoIC0gMSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25TdGVwQ2hhbmdlICYmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGVwICE9PSBpbmRleCkpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzU3RlcElkID0gdGhpcy5wcm9wcy5zdGVwc1t0aGlzLnN0YXRlLmN1cnJlbnRTdGVwXS5pZDtcbiAgICAgIGNvbnN0IGN1cnJlbnRTdGVwSWQgPSB0aGlzLnByb3BzLnN0ZXBzW2luZGV4XS5pZDtcbiAgICAgIHRoaXMucHJvcHMub25TdGVwQ2hhbmdlKHByZXZpb3VzU3RlcElkLCBjdXJyZW50U3RlcElkKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRTdGVwOiBpbmRleCxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJ3aXphcmQtcGFnZXNcIj5cbiAgICAgICAgPFdpemFyZEhlYWRlclxuICAgICAgICAgIHN0ZXBzPXt0aGlzLnByb3BzLnN0ZXBzfVxuICAgICAgICAgIGN1cnJlbnRTdGVwPXt0aGlzLnN0YXRlLmN1cnJlbnRTdGVwfVxuICAgICAgICAgIHNlbGVjdFBhZ2U9e3RoaXMuc2VsZWN0UGFnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBpZD1cIndpemFyZC1jb250ZW50XCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuc3RlcHNbdGhpcy5zdGF0ZS5jdXJyZW50U3RlcF0uY29tcG9uZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFdpemFyZEZvb3RlclxuICAgICAgICAgIHN0ZXBzPXt0aGlzLnByb3BzLnN0ZXBzfVxuICAgICAgICAgIGN1cnJlbnRTdGVwPXt0aGlzLnN0YXRlLmN1cnJlbnRTdGVwfVxuICAgICAgICAgIHNlbGVjdFBhZ2U9e3RoaXMuc2VsZWN0UGFnZX1cbiAgICAgICAgICBzYXZlPXt0aGlzLnByb3BzLnNhdmV9XG4gICAgICAgICAgY2FuY2VsPXt0aGlzLnByb3BzLmNhbmNlbH1cbiAgICAgICAgICBkaXNhYmxlU2F2ZT17dGhpcy5wcm9wcy5kaXNhYmxlU2F2ZX1cbiAgICAgICAgICBkaXNhYmxlQ2FuY2VsPXt0aGlzLnByb3BzLmRpc2FibGVDYW5jZWx9XG4gICAgICAgICAgbG9jYWxpemF0aW9uVGV4dHM9e3RoaXMucHJvcHMubG9jYWxpemF0aW9uVGV4dHN9XG4gICAgICAgICAgc2hvd1BhZ2VJbmRpY2F0b3I9e3RoaXMucHJvcHMuc2hvd1BhZ2VJbmRpY2F0b3J9XG4gICAgICAgICAgc2hvd1NhdmVTdWNjZXNzPXt0aGlzLnByb3BzLnNob3dTYXZlU3VjY2Vzc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuV2l6YXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlU3RlcDogMCxcbiAgc2hvd1BhZ2VJbmRpY2F0b3I6IHRydWUsXG4gIGxvY2FsaXphdGlvblRleHRzOiB7XG4gICAgc2F2ZTogJ1NhdmUnLFxuICAgIGNhbmNlbDogJ0Nsb3NlJyxcbiAgICBzYXZlZDogJ1NhdmVkJyxcbiAgfSxcbiAgZGlzYWJsZVNhdmU6IGZhbHNlLFxuICBkaXNhYmxlQ2FuY2VsOiBmYWxzZSxcbiAgc2hvd1NhdmVTdWNjZXNzOiBmYWxzZSxcbiAgb25TdGVwQ2hhbmdlOiBudWxsLFxufTtcblxuV2l6YXJkLnByb3BUeXBlcyA9IHtcbiAgc2F2ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZVNhdmU6IFByb3BUeXBlcy5ib29sLFxuICBjYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVDYW5jZWw6IFByb3BUeXBlcy5ib29sLFxuICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgaGFzUmVxdWlyZWRQcm9wczogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFzUmVxdWlyZWRQcm9wc0Vycm9yczogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgIG5hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSkuaXNSZXF1aXJlZCxcbiAgfSkpLmlzUmVxdWlyZWQsXG4gIGxvY2FsaXphdGlvblRleHRzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHNhdmU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgY2FuY2VsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIHNhdmVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICB9KSxcbiAgYWN0aXZlU3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgc2hvd1BhZ2VJbmRpY2F0b3I6IFByb3BUeXBlcy5ib29sLFxuICBzaG93U2F2ZVN1Y2Nlc3M6IFByb3BUeXBlcy5ib29sLFxuICBvblN0ZXBDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxufTtcbiJdfQ==
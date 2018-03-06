/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Wizard from '../../src';


describe('Wizard component', () => {
  const INITIAL_ACTIVE_STEP = 2;
  const saveWizard = () => {};
  const cancelWizard = () => {};
  const steps = [1, 2, 3].map(i => ({
    id: `${i}`,
    name: `Page ${i}`,
    component: <div>My wizard page {i}</div>,
  }));

  const wrapper = mount((
    <Wizard
      activeStep={INITIAL_ACTIVE_STEP}
      save={saveWizard}
      cancel={cancelWizard}
      steps={steps}
    />
  ));

  it('is rendered', function () {
    expect(wrapper).to.exist;
    const tabs = wrapper.find('#wizard-header li');
    expect(tabs).to.be.length(steps.length);
  });

  it('Active step is OK', function () {
    const expectedState = {
      currentStep: INITIAL_ACTIVE_STEP,
    };
    expect(wrapper.state()).to.eql(expectedState);
  });

  it('selectPage works fine', function () {
    const wizard = wrapper.instance();
    const expectedState = {
      currentStep: 1,
    };
    wizard.selectPage(null, 1);
    expect(wrapper.state()).to.eql(expectedState);
  });

  it('getStepByUrlParam works fine', function () {
    wrapper.instance().getLocation = () => '/?initialStep=3';
    const index = wrapper.instance().getStepByUrlParam();
    expect(index).to.equal(2);
  });
});

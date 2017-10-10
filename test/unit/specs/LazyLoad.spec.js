import Vue from 'vue';
import What from '../../../src/js/views/What';

describe('What.vue', () => {
  it('should render custom message', () => {
    const Constructor = Vue.extend(What);
    const vm = new Constructor().$mount();
    expect(vm.$el.textContent.trim())
      .to.equal('Trying out the first route with Vue! By Divyam Rastogi.');
  });
});

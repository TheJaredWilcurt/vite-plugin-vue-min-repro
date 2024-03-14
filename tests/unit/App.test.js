import { shallowMount } from '@vue/test-utils';

import App from '../../src/App.vue';

describe('App.vue', () => {
  test('Shallow mount', async () => {
    const wrapper = shallowMount(App);

    expect(true)
      .toEqual(true);
  });
});

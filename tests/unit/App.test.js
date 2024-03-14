import { shallowMount } from '@vue/test-utils';

import HelloWorld from '../../src/App.vue';

describe('App.vue', () => {
  test('Shallow mount', async () => {
    const wrapper = shallowMount(HelloWorld);

    expect(true)
      .toEqual(true);
  });
});

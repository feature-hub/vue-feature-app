import {FeatureAppDefinition} from '@feature-hub/core';
import {DomFeatureApp} from '@feature-hub/dom';
import Vue, {CreateElement, VNode} from 'vue';
import {ThisTypedComponentOptionsWithArrayProps} from 'vue/types/options';

import App from './App.vue';

export interface InstanceConfig {
  name: string;
}

const featureAppDefinition: FeatureAppDefinition<DomFeatureApp> = {
  id: 'test:hello-world',

  create: env => ({
    attachTo(el: HTMLElement): void {
      new Vue({
        el,
        shadowRoot: el.getRootNode(),
        render(h: CreateElement): VNode {
          return h(App, {props: env.instanceConfig as InstanceConfig});
        }
      } as ThisTypedComponentOptionsWithArrayProps<Vue, {}, {}, {}, never>);
    }
  })
};

export default featureAppDefinition;

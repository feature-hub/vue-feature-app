import {FeatureAppDefinition} from '@feature-hub/core';
import {DomFeatureApp} from '@feature-hub/dom';
import {VNode, h, createApp, App as Application} from 'vue';

import MyApp from './App.vue';


export interface InstanceConfig {
  name: string;
}

const featureAppDefinition: FeatureAppDefinition<DomFeatureApp> = {
  id: 'test:hello-world',

  create: env => ({
    attachTo(el: HTMLElement): void {
      console.log('attachTo', env);

      const app: Application = createApp({
        data() {
          return {
            test: true
          };
        },
        render(): VNode {
          return h((MyApp as any), (env.instanceConfig as any));
        }
      })

      app.mount(el);
    }
  })
};

export default featureAppDefinition;

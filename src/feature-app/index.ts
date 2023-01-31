import {FeatureAppDefinition} from '@feature-hub/core';
import {DomFeatureApp} from '@feature-hub/dom';
import {App as Application, createApp} from 'vue';

import MyApp from './App.vue';


export interface InstanceConfig {
  name: string;
}

const featureAppDefinition: FeatureAppDefinition<DomFeatureApp> = {
  create: env => ({
    featureAppId: 'test:hello-world',
    attachTo(el: HTMLElement): void {
      const app: Application = createApp((MyApp as any), (env.config as any))
      app.mount(el);
    }
  })
};

export default featureAppDefinition;

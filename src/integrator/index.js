import {createFeatureHub} from '@feature-hub/core';
import {
  defineFeatureAppLoader
} from '@feature-hub/dom';
import {loadAmdModule} from '@feature-hub/module-loader-amd';

const {featureAppManager} = createFeatureHub('test:integrator', {
  moduleLoader: loadAmdModule
});

defineFeatureAppLoader(featureAppManager);

const featureAppLoader = document
  .getElementsByTagName('feature-app-loader')
  .item(0);

if (featureAppLoader) {
  featureAppLoader.instanceConfig = {
    name: 'Feature Hub'
  };
}

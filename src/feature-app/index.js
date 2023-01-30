import {createApp, h} from 'vue';

import App from './App.vue';

const featureAppDefinition = {
  id: 'test:hello-world',

  create: env => ({
    attachTo(el) {
      console.log('attachTo', env);

      const app = createApp({
        data() {
          return {
            test: true
          };
        },
        render() {
          return h(App, env.instanceConfig);
        }
      });

      app.mount(el);
    }
  })
};

export default featureAppDefinition;

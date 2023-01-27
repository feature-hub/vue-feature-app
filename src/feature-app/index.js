import Vue from 'vue';


import App from './App.vue';


const featureAppDefinition= {
  id: 'test:hello-world',

  create: env => ({
    attachTo(el) {
      new Vue({
        el,
        shadowRoot: el.getRootNode(),
        render(h) {
          return h(App, {props: env.instanceConfig});
        }
      });
    }
  })
};

export default featureAppDefinition;

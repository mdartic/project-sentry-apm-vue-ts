import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from "@sentry/integrations";
import { Integrations } from "@sentry/apm";

Sentry.init({
  dsn: 'https://c66594db39164ca7831994d0ea68d117@o421199.ingest.sentry.io/5340581' ,
  integrations: [
    new Integrations.Tracing(),
    new VueIntegration({
      Vue,
      tracing: true
    })
  ],
  tracesSampleRate: 1.0 // Be sure to lower this in production
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

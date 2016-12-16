import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Form from './Form.vue';
import About from './About.vue';
import Career from './Career.vue';
import Contact from './Contact.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Form },
  { path: '/aboutus', component: About  },
  { path: '/career', component: Career  },
  { path: '/contact', component: Contact  }
];

const router = new VueRouter ({
  routes,
  mode: 'history'
});

new Vue ({
  el: '#app',
  router,
  render: h => h(App)
});

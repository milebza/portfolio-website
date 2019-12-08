import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Services from './views/Services.vue';
import Portfolio from './views/Portfolio.vue';
import ArtProjects from './views/ArtProjects.vue';
import CodeDesignProjects from './views/CodeDesignProjects.vue';
import ZineProjects from './views/ZineProjects.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/what-can-i-do',
      name: 'services',
      component: Services
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/art-projects',
      name: 'artProjects',
      component: ArtProjects
    },
    {
      path: '/code-design-projects',
      name: 'codeDesignProjects',
      component: CodeDesignProjects
    },
    {
      path: '/zine-projects',
      name: 'zineProjects',
      component: ZineProjects
    },
    {
      path: '/say-hi',
      name: 'contact',
      component: Contact
    }
  ]
});

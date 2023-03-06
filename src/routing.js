import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { name: 'homePage', path: '/' },
    { name: 'aboutPage', path: '/about' },
    { name: 'blogPage', path: '/blog' },
    { name: 'faqPage', path: '/faq' },
  ],
});

export default router;

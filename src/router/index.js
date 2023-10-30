import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue';
import PageNotFoundView from '../views/PageNotFoundView.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    alias: '/login'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFoundView
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  console.warn(to, "beforeEach", from);
  const getData = JSON.parse(window.localStorage.getItem('loggedInUser'));
  if (getData) {
    const isUserLoggedIn = getData?.expiry > Date.now();
    if (!isUserLoggedIn) {
      window.localStorage.removeItem('loggedInUser');
    }
    return isUserLoggedIn;
  } else {
    if(to.name === 'login' || to.name === 'NotFound'){
      return true;
    } else {
      router.push('/');
      return true;
    }
  }
})

export default router

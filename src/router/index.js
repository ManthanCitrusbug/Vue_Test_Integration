import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import Header from '@/components/Header.vue';
import PageNotFoundView from '../views/PageNotFoundView.vue';

const HomeViewComponent = () => import('../views/HomeView.vue')
const AboutViewComponent = () => import('../views/AboutView.vue')
const AddNewViewComponent = () => import('../views/AddNewBookView.vue')

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
  {
    path: '/home',
    name: 'home',
    components: {
      default: HomeViewComponent, header: Header
    },
    // component: HomeView
  },
  {
    path: '/add-new-book',
    name: 'addNewBook',
    components: {
      default: AddNewViewComponent, header: Header
    },
    // component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    components: {
      default: AboutViewComponent, header: Header
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
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

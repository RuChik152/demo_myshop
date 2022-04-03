import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Cart from "@/views/Cart";
import Delivery from "@/views/info/Delivery";
import InfoPay from "@/views/info/InfoPay";
import Contact from "@/views/info/Contact";
import About from "@/views/info/About";
import Profile from "@/views/info/Profile";
import Mains from "@/views/info/Mains";
import Catalog from "@/views/Catalog";
import itemTypeProduct from "@/components/itemTypeProduct";
import User from "@/views/User";
import UserProfile from "@/views/UserProfile";
import UserPosts from "@/views/UserPosts";
import test from "@/components/test";
import CatalogItemList from "@/views/CatalogItemList";
import CatalogProductElement from "@/views/CatalogProductElement";
import ProductPage from "@/views/ProductPage";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'mains',
        component: Mains
      }
    ]
  },
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // при совпадении пути с шаблоном /user/:id/profile
        // в <router-view> компонента User будет показан UserProfile
        path: 'profile',
        component: UserProfile
      },
      {
        // при совпадении пути с шаблоном /user/:id/posts
        // в <router-view> компонента User будет показан UserPosts
        path: 'posts',
        component: UserPosts
      }
    ]
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/catalog/:id/',
    name: 'catalog',
    component: Catalog,
    children: [
      {
        path: ':name',
        name: 'name_category',
        component: CatalogProductElement
      }
    ],
  },
  {
    path: '/catalog/:id/:name/product_page/:item_id',
    name: 'product_page',
    component: ProductPage,
    props: true
  },
  {
    path: '/info_pay',
    component: InfoPay
  },
  {
    path: '/delivery',
    component: Delivery
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/profile',
    component: Profile
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5d80dd1b = () => interopDefault(import('..\\pages\\albums_index.vue' /* webpackChunkName: "pages/albums_index" */))
const _107723b2 = () => interopDefault(import('..\\pages\\composers_index.vue' /* webpackChunkName: "pages/composers_index" */))
const _378bc9ba = () => interopDefault(import('..\\pages\\movies_index.vue' /* webpackChunkName: "pages/movies_index" */))
const _77db7ac4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _0290ab72 = () => interopDefault(import('..\\pages\\albums\\_slug.vue' /* webpackChunkName: "pages/albums/_slug" */))
const _a339908a = () => interopDefault(import('..\\pages\\composers\\_slug.vue' /* webpackChunkName: "pages/composers/_slug" */))
const _69e352b3 = () => interopDefault(import('..\\pages\\movies\\_slug.vue' /* webpackChunkName: "pages/movies/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/albums_index",
    component: _5d80dd1b,
    name: "albums_index"
  }, {
    path: "/composers_index",
    component: _107723b2,
    name: "composers_index"
  }, {
    path: "/movies_index",
    component: _378bc9ba,
    name: "movies_index"
  }, {
    path: "/",
    component: _77db7ac4,
    name: "index"
  }, {
    path: "/albums/:slug?",
    component: _0290ab72,
    name: "albums-slug"
  }, {
    path: "/composers/:slug?",
    component: _a339908a,
    name: "composers-slug"
  }, {
    path: "/movies/:slug?",
    component: _69e352b3,
    name: "movies-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

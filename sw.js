/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-39c031d9a362a25b2853.js"
  },
  {
    "url": "styles.4d21c7e60998a9b10831.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-305b3707783ccc9d7ca6.js"
  },
  {
    "url": "app-45d4e0889f9493c2fe40.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "959dfaf055d620500397d7c3462b35a9"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-fd4fb51a6fac1c18bdde.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "4dfd97450350b1699e44c46c71e1db37"
  },
  {
    "url": "polyfill-31bd25ec256a9117a66a.js"
  },
  {
    "url": "a9a7754c-9853ecc6232410f8def6.js"
  },
  {
    "url": "cb1608f2-9e8ef9f692b1456390c2.js"
  },
  {
    "url": "dc88408d3ff7eca40f92b7844b0df82fe276bd8a-2eec4025a7afe1923eb1.js"
  },
  {
    "url": "783efeeb279ed2812efbfe706b9e84f36e7b67a3-2a5e1e5b19c1d99889ff.js"
  },
  {
    "url": "component---src-pages-projects-js-0b300c050a3e3a7cfc1d.js"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "c228d7518ad2050a4a0eb63d8373e1d8"
  },
  {
    "url": "component---src-pages-about-js-8473217db9c28e2e49f6.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "2f83d9c8fc42d67d58ff1d65f3ed3daf"
  },
  {
    "url": "page-data/sq/d/1772527931.json",
    "revision": "63896ff94d3f4602c8954bf961326137"
  },
  {
    "url": "page-data/sq/d/978222640.json",
    "revision": "31dddebe13c3f812d560a4a00999099a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/dmitrii-frolov`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/dmitrii-frolov/app-45d4e0889f9493c2fe40.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/dmitrii-frolov/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)

var appShell = ["index.html",
    "index.css",
    "script.js",
    "about.html",
    "features.html",
    "/img/logo-szomb.png",
    "/img/icons/house-solid-gray.svg",
    "/img/icons/info-solid-gray.svg",
    "/img/icons/star-solid-gray.svg",
    "/img/parallax/parallax-background-home.png",
]

const VERSION = "v01"
const CACHE_NAME = `S-Zomb-${VERSION}`

self.addEventListener("install",function(e){
    e.waitUntil(async()=>{
        const localCache = await caches.open(CACHE_NAME);
        localCache.addAll(appShell)
    })()
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
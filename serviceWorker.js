var appShell = ["home.html",
    "index.css",
    "script.js",
    "/img/icons/arrow-trend-up-solid-gray.svg",
    "/img/icons/house-solid-gray.svg",
    "/img/icons/info-solid-gray.svg",
    "/img/icons/star-solid-gray.svg",
    "/img/News/new1.jpg",
    "/img/News/new2.png",
    "/img/News/new3.png",
    "/img/parallax/parallax-background-home.png",
    "/img/logo-szomb.png"
]

const VERSION = "v01"
const CACHE_NAME = `S-Zomb-${VERSION}`

self.addEventListener("install",function(e){
    e.waitUntil(async()=>{
        const localCache = await caches.open(CACHE_NAME);
        localCache.addAll(appShell)
    })()
})
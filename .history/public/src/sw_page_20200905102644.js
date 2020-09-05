const cacheName = "v1";

const cacheAssets = [
  "css/styles.css",
  "css/styles.scss",
  "css/styles.css.map",
  "js/app.js",
  "js/main.js",
  "public/index.html",
  "public/logo.png",
];

// call install event
self.addEventListener("install", (e) => {
    console.log(`Service Worker: installed`);
    
    e.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            console.log('Service Worker: Cching Files');
            cache.addAll(cacheAssets)
        })
        .then(() => self.skipWaiting())
    )
});

// call install event
self.addEventListener("activate", (e) => {
  console.log(`Service Worker: Activated`);
});

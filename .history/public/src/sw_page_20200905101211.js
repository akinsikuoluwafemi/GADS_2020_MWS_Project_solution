const cacheName = "v1";

const cacheAssets = [
  "public/css/styles.css",
  "public/css/styles.scss",
  "public/css/styles.css.map",
  "public/js/app.js",
  "public/js/main.js",
  "public/index.html",
  "public/logo.png",
];

// call install event
self.addEventListener("install", (e) => {
  console.log(`Service Worker: installed`);
});

// call install event
self.addEventListener("activate", (e) => {
  console.log(`Service Worker: Activated`);
});

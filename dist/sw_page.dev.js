"use strict";

var cacheName = "v1";
var cacheAssets = ["css/styles.css", "css/styles.scss", "css/styles.css.map", "app.js", "main.js", "index.html", "logo.png"]; // call install event

self.addEventListener("install", function (e) {
  console.log("Service Worker: installed");
  e.waitUntil(caches.open(cacheName).then(function (cache) {
    console.log("Service Worker: Caching Files");
    cache.addAll(cacheAssets);
  }).then(function () {
    return self.skipWaiting();
  }));
}); // call install event

self.addEventListener("activate", function (e) {
  console.log("Service Worker: Activated"); // remove unwanted caches

  e.waitUntil(caches.keys().then(function (cacheNames) {
    return Promise.all(cacheNames.map(function (cache) {
      if (cache !== cacheName) {
        console.log("Service Worker: Clearing Old Cache");
        return caches["delete"](cache);
      }
    }));
  }));
}); // call fetch event, this is where the offline func happens

self.addEventListener("fetch", function (e) {
  console.log("Service Worker: Fetching "); // check if the cache storage is not empty or there is a request

  e.respondWith(fetch(e.request)["catch"](function () {
    return caches.match(e.request);
  }));
});
"use strict";

// make sure service workers are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw_page.js").then(function (reg) {
      return console.log(reg);
    })["catch"](function (err) {
      return console.log("Service worker: Error :".concat(err));
    });
  });
}
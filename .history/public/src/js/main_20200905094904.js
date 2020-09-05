// make sure service workers are supported

if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../sw_page.js')
            .then(reg => console.log(reg))
            .catch(err => console.log(`Service worker: Error `err))
    })
}
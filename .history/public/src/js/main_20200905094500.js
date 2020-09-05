// make sure service workers are supported

if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('../sw_page.js')
    })
}
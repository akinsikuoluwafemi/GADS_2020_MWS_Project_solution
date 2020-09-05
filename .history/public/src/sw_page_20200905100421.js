const cacheName = 'v1';

const cacheAssets = [
    'styles.css',
    'styles.scss',
    'sty'
]



// call install event
self.addEventListener('install', (e) => {
    console.log(`Service Worker: installed`)
})


// call install event
self.addEventListener('activate', (e) => {
    console.log(`Service Worker: Activated`)
})


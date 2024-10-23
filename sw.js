const cacheName = 'srhs-athletics-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/path/to/icon-192x192.png',
  '/path/to/icon-512x512.png'
];

// Install the service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetch the cached assets
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

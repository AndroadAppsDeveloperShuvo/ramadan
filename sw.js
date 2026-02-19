const cacheName = 'ramadan-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png' // আপনার লোগোর নাম যদি icon.png হয়
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});

const cacheName = 'ramadan-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// ইনস্টল এবং ক্যাশ করা
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// অফলাইনে চালানো
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});

let arquivos = [
  "/",
  "src/App.css",
  "src/index.css",
  "src/main.css",
  "src/App.js",
  "src/App.test.js",
  "src/index.js",
  "src/setupTests.js",
  "src/main.js",
  "src/adicionarEnvolvido.js",
  "src/components/Header.js",
  "src/Passos/PrimeiroPasso.js",
  "src/Passos/SegundoPasso.js",
  "src/Passos/TerceiroPasso.js",
  "src/Passos/QuartoPasso.js",
  "src/Passos/PassoFinal.js",
  "public/sw/registra.js",
  "public/brazao192.png",
  "public/brazao512.png",
  "public/favicon.ico"

]


// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {   
  window.addEventListener('load', () => {

    const swUrl = `/service-worker.js`;

    navigator.serviceWorker.register('/registra.js')
      .then(function (registration) {
      checkValidServiceWorker(swUrl, config);
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      registerValidSW(swUrl, config);
      console.log('ServiceWorker registration failed: ', err);
    });
  });

  window.addEventListener("fetch", function (event) {

    let pedido = event.request
    let promiseResposta = caches.match(pedido).then(respostaCache => {
      let resposta = respostaCache ? respostaCache : fetch(pedido)
      return resposta

      var respostaCache = resposta.clone();

    })

    event.respondWith(promiseResposta)

  });

  register.addAll(arquivos); //Adicionei para carregar os arquivos

}


function registerValidSW(swUrl, config) {
navigator.serviceWorker
  .register(swUrl)
  .then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log(
              'New content is available and will be used when all ' +
                'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
            );
            alert("Instalado");

            // Execute callback
            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');

            // Execute callback
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
           }
        }
      };
    };
  })
  .catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl, {
  headers: { 'Service-Worker': 'script' },
})
  .then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');
    if (
      response.status === 404 ||
      (contentType != null && contentType.indexOf('javascript') === -1)
    ) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  })
  .catch(() => {
    alert("Aplicativo rodando em modo offline");
    console.log(
      'No internet connection found. App is running in offline mode.'
    );
  });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}

(() => {
  const style = document.createElement('style');
  style.textContent = `
    .pwa-install{position:fixed;left:50%;transform:translateX(-50%);bottom:72px;z-index:70;border:0;border-radius:999px;min-height:44px;padding:0 16px;background:#123c35;color:#fff;font:800 12px -apple-system,BlinkMacSystemFont,"Segoe UI","Hiragino Sans","Noto Sans JP",sans-serif;box-shadow:0 10px 28px rgba(18,60,53,.24);cursor:pointer}
    .pwa-install[hidden]{display:none}
    .offline-pill{position:fixed;top:max(8px,env(safe-area-inset-top));left:50%;transform:translateX(-50%);z-index:80;background:#d9892f;color:#fff;border-radius:999px;padding:7px 11px;font:850 11px -apple-system,BlinkMacSystemFont,"Segoe UI","Hiragino Sans","Noto Sans JP",sans-serif;box-shadow:0 7px 20px rgba(0,0,0,.16)}
    @media(display-mode:standalone){.pwa-install{display:none!important}}
  `;
  document.head.appendChild(style);

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js', { scope: './' }).catch(() => {});
    });
  }

  let installPrompt = null;
  const installButton = document.createElement('button');
  installButton.type = 'button';
  installButton.className = 'pwa-install';
  installButton.textContent = 'ホーム画面に追加';
  installButton.hidden = true;
  document.body.appendChild(installButton);

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
    installButton.hidden = false;
  });

  installButton.addEventListener('click', async () => {
    if (!installPrompt) return;
    installButton.hidden = true;
    await installPrompt.prompt();
    await installPrompt.userChoice.catch(() => null);
    installPrompt = null;
  });

  window.addEventListener('appinstalled', () => {
    installPrompt = null;
    installButton.remove();
  });

  let offlinePill = null;
  function updateConnection() {
    if (!navigator.onLine) {
      if (!offlinePill) {
        offlinePill = document.createElement('div');
        offlinePill.className = 'offline-pill';
        offlinePill.textContent = 'オフライン表示中';
        document.body.appendChild(offlinePill);
      }
    } else if (offlinePill) {
      offlinePill.remove();
      offlinePill = null;
    }
  }

  window.addEventListener('online', updateConnection);
  window.addEventListener('offline', updateConnection);
  updateConnection();
})();

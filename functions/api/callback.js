/**
 * Cloudflare Pages Function: canjea el código de GitHub por un token y se lo
 * entrega a la ventana de Decap CMS que abrió el popup de login.
 */
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });
  const data = await res.json();

  const status = data.access_token ? 'success' : 'error';
  const payload = JSON.stringify(
    data.access_token ? { token: data.access_token, provider: 'github' } : { error: data.error_description || 'error' },
  );

  // Protocolo de Decap: el popup anuncia "authorizing" y espera respuesta del
  // panel. Sólo se entrega el token al propio sitio para que otra página que
  // abra este popup no pueda robarlo.
  const html = `<!doctype html><script>
    const msg = 'authorization:github:${status}:' + ${JSON.stringify(payload)};
    window.addEventListener('message', (e) => {
      if (e.origin !== ${JSON.stringify(url.origin)}) return;
      window.opener.postMessage(msg, e.origin);
      window.close();
    });
    window.opener.postMessage('authorizing:github', '*');
  </script>`;

  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}

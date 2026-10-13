/**
 * Cloudflare Pages Function: inicia el login de GitHub para Decap CMS.
 * Requiere las variables de entorno GITHUB_CLIENT_ID y GITHUB_CLIENT_SECRET.
 */
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const authorize = new URL('https://github.com/login/oauth/authorize');
  authorize.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
  authorize.searchParams.set('redirect_uri', `${url.origin}/api/callback`);
  authorize.searchParams.set('scope', 'repo,user');
  authorize.searchParams.set('state', crypto.randomUUID());
  return Response.redirect(authorize.toString(), 302);
}

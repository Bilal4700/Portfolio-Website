// Redirect /skills -> /about
export function GET(request) {
  const url = new URL(request.url);
  url.pathname = "/about";
  return Response.redirect(url, 307);
}




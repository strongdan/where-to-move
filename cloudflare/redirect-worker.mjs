const CANONICAL_ORIGIN = 'https://wheretomove.placesignals.com';

export default {
  async fetch(request) {
    const incoming = new URL(request.url);
    const destination = new URL(CANONICAL_ORIGIN);

    destination.pathname = incoming.pathname;
    destination.search = incoming.search;

    return Response.redirect(destination.toString(), 308);
  },
};

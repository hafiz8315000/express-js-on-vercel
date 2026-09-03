export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response(
        `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Jidar Decor</title>
          </head>
          <body>
            <h1>Jidar Decor</h1>
            <p>Website is working on Cloudflare Workers!</p>
          </body>
        </html>
        `,
        {
          headers: {
            "content-type": "text/html;charset=UTF-8"
          }
        }
      );
    }

    return new Response("Not Found", { status: 404 });
  }
};

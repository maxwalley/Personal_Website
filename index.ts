const server = Bun.serve({
    port: 3000,
    fetch(req) {
      return new Response(Bun.file("example.html"));
    },

    //This is the way to do it without buns special response overload
    /*fetch(req) {
      return new Response(Bun.file("example.html").stream(), {
        headers: {
          'Content-Type': 'text/html',
        },
      });
    },*/
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);
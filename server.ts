import { serve } from "https://deno.land/std/http/server.ts";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const hi = encoder.encode(" ^_^ ");

(async () => {
  let server = serve(":8000");

  for await (let request of server) {
    request.respond({ body: hi });
    const body = await request.body();
    const text = decoder.decode(body);
    const { yo } = JSON.parse(text);
    console.dir({ yo });
  }
})();

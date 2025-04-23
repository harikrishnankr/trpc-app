import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./router";

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
console.log("Listening to 3000...");

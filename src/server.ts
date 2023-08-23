import fastify from "fastify";
import cookie from "@fastify/cookie";

const app = fastify();

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server Running");
  });

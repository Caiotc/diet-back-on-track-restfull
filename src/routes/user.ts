import { FastifyInstance } from "fastify";
import { setup } from "../database";
import { z } from "zod";
import crypto, { randomUUID } from "node:crypto";

export async function UserRoutes(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    let sessionId = request.cookies.session_id;

    if (!sessionId) {
      sessionId = randomUUID();
      reply.cookie("sessionId", sessionId, {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 7, //7 days
      });
    }
  });
}

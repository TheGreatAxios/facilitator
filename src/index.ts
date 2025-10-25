import { Context, Hono } from "hono";
import { logger as honoLogger } from "hono/logger";
import { isProduction } from "./config";
import { createFacilitatorHandler as createEVMHandler } from "@faremeter/payment-evm/exact";
import { createFacilitatorRoutes } from "@faremeter/facilitator";
import { getLogger, configure, getConsoleSink } from "@logtape/logtape";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { requestId } from "hono/request-id";
import { secureHeaders } from "hono/secure-headers";
import { handlersByChain } from "./handlersByCHain";

export const logger = getLogger(["facilitator"]);

await configure({
    sinks: { console: getConsoleSink() },
    loggers: [
      {
        category: ["logtape", "meta"],
        lowestLevel: isProduction ? "info" : "debug",
        sinks: ["console"],
      },
      { category: "faremeter", lowestLevel: isProduction ? "info" : "debug", sinks: ["console"] },
    ],
  });

const app = new Hono();

app.use(
    honoLogger((message: string, ...rest: string[]) => {
      logger.info([message, ...rest].join(" "));
    }),
);

app.use(cors({
  origin: "*"
}));

app.use(prettyJSON());
app.use(requestId());
app.use(secureHeaders());

app.get("/healthz", (c: Context) => {
  return c.json({
    timestamp: Date.now(),
    uptime: process.uptime(),
    status: "healthy"
  })
});

// Complex, but grabs all tokens dynamically from config once
const handlers = await Promise.all(handlersByChain.map(async (chain) => await Promise.all(chain.tokens.map(async (token) => await createEVMHandler(chain.info, token.privateKey, token.token)))));

app.route(
    "/",
    createFacilitatorRoutes({
        handlers: handlers.flat(),
        timeout: {
            getRequirements: 5000,
        },
    })
)

export default app;
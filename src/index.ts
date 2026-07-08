import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.get("/", async () => {
  return {
    name: "Zeus-NG",
    version: "1.0.0",
    status: "Running 🚀",
  };
});

const start = async () => {
  try {
    await app.listen({
      host: "0.0.0.0",
      port: Number(process.env.PORT) || 3000,
    });

    console.log("Zeus-NG Started");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

import { createClient, RedisClientType } from "redis";
export const redisClient: RedisClientType = createClient({
  url: process.env.REDIS_URL ?? "redis://localhost:6379",
});

redisClient.on("error", (err) => {
  console.error("redis client error: ", err);
});
redisClient.connect();
export default redisClient;

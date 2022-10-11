import Redis from 'ioredis';

const redis = new Redis({
  host: 'redis',
  keyPrefix: 'bree-test-job:',
});

async function main() {
  console.log('test job started');
}  

await main();
await redis.quit();
process.exit(0);

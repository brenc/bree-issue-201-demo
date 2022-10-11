import Redis from 'ioredis';
import { forEach } from 'modern-async';
import fetch from 'node-fetch';
import * as dns from 'node:dns/promises';

const resolver = new dns.Resolver();

const redis = new Redis({
  host: 'redis',
  keyPrefix: 'bree-test-job:',
});

async function main() {
  console.log('test job started');


  let addresses;
  try {
    addresses = await resolver.resolve4('web');
  } catch (err) {
    console.error(`error resolving hosts: ${err.message}`);
    return;
  }

  console.log(addresses);

  await forEach(addresses, async (address) => {
    console.log(`fetching status from ${address}`);

    let data;
    let response;
    try {
      response = await fetch(`http://${address}/`);
      data = await response.text();
      // console.log('%o', data);
    } catch (err) {
      console.error(`erroring collecting status from ${address}: ` +
        `${err.message}`);
      return;
    }
  })
}  

await main();
await redis.quit();
process.exit(0);

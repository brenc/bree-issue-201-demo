import Graceful from '@ladjs/graceful';
import Bree from 'bree';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const bree = new Bree({
  defaultExtension: 'mjs',
  jobs: [
    {
      name: 'test-job',
      interval: '1s',
    },
  ],
  root: path.join(__dirname, 'jobs'),
});

const graceful = new Graceful({ brees: [bree] });
graceful.listen();

console.log('starting...');
await bree.start();
const Bree = require('bree');
const Graceful = require('@ladjs/graceful');
// const logger = require('./logger');

const bree = new Bree({
  jobs: [
    {
      name: 'test-job',
      interval: '1s',
    },
  ],
  // logger,
});

const graceful = new Graceful({ brees: [bree] });
graceful.listen();

// logger.error('starting...');
console.log('starting...');
await bree.start();
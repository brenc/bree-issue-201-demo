FROM node:16-buster-slim as job-runner

WORKDIR /app

CMD ["yarn", "start"]
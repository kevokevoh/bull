import queues  from './queues';

import { queueKeys } from './keys';

// function getRedisConfig(redisUrl) {
//   const redisConfig = url.parse(redisUrl);
//   return {
//     host: redisConfig.hostname || 'localhost',
//     port: Number(redisConfig.port || 6379),
//     database: (redisConfig.pathname || '/0').substr(1) || '0',
//     password: redisConfig.auth ? redisConfig.auth.split(':')[1] : undefined
//   };
// }
const firstqueueName = Object.keys(queueKeys)[0];
try {
    queues[firstqueueName].add(
        {
            foo: 'bar',
            bazenga: 'freeee'
        },
        { delay: 5000 });
} catch (e) {
    console.error(e);
}

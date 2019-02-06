import Queue from 'bull';

import { queueKeys, REDIS_URL } from './keys';

const queueNames = Object.keys(queueKeys);

const queues = {};
try {
    queueNames.forEach(function(queue) {
        queues[queue] = new Queue(
            queue
            // REDIS_URL
        );
    });
} catch(e) {
    console.error(e);
}

export default queues;

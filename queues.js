import Queue from 'bull';

import { queueKeys } from './keys';

const queueNames = Object.keys(queueKeys);

const queues = {};
try {
    queueNames.forEach(function(queue) {
        queues[queue] = new Queue(
            queue
        );
    });
} catch(e) {
    console.error(e);
}

export default queues;

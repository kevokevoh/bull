import cluster  from 'cluster';

import { queueKeys } from './keys';

const firstqueueName = Object.keys(queueKeys)[0];

export const processorInitialisers = {
    [firstqueueName]: (job, done) => {
        let progress = 0;
        let i;
        for (i = 0; i < 5; i++) {
            progress += 5;
            job.progress(progress);
        };
        const result = 'Done to the fullest';
        console.log(`Worker ${cluster.worker.id} is processing me.`);
        done(null, result);
    }
};

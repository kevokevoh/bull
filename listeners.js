import { queueKeys } from './keys';

const firstqueueName = Object.keys(queueKeys)[0];

export const listenersInitialisers = {
    [firstqueueName]: {
        completed: (job, result) => {
            console.log(`Job with id ${job.id} has been completed`);
        },
        progress: (job, progress) => {
            console.log(`Job ${job.id} is ${progress}% ready!`);
        }
    }
};

import cluster  from 'cluster';

import queues  from './queues';

import { processorInitialisers } from './processors';

import { listenersInitialisers } from './listeners';

var numWorkers = 3;

if(cluster.isMaster){
    for (let i = 0; i < numWorkers; i++) {
        cluster.fork();
    }
    cluster.on('online', function(worker) {
        console.log('worker ' + worker.process.pid + ' is online');
    });
    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    Object.entries(queues).forEach(([queueName, queue]) => {
        console.log(`Worker ${cluster.worker.id} listening to '${queueName}' queue`);
        queue.process(processorInitialisers[queueName]);
        queue.on('completed', listenersInitialisers[queueName].completed);
        queue.on('progress', listenersInitialisers[queueName].progress);
    });
};



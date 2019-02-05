import queues  from './queues';

import { processorInitialisers } from './processors';

import { listenersInitialisers } from './listeners';

Object.entries(queues).forEach(([queueName, queue]) => {
  console.log(`Worker listening to '${queueName}' queue`);
    queue.process(processorInitialisers[queueName]);
    queue.on('completed', listenersInitialisers[queueName].completed);
    queue.on('progress', listenersInitialisers[queueName].progress);
});


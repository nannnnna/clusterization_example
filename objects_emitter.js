const EventEmitter = require('events');

class EmitterOne extends EventEmitter {}
class EmitterTwo extends EventEmitter {}

const emitterOneInstance = new EmitterOne();
const emitterTwoInstance = new EmitterTwo();

emitterOneInstance.on('message', (message) =>
    console.log('Emitter one message: ', message)
);
emitterOneInstance.on('error', (error) =>
    console.log('Emitter one error: ', error)
);

emitterTwoInstance.on('message', (message) =>
    console.log('Emitter two message: ', message)
);
emitterTwoInstance.on('error', (error) =>
    console.log('Emitter two error: ', error)
);

emitterOneInstance.emit(
    'error',
    'Node js EventEmitter in action.'
);
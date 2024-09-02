const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('message', (message) =>
    console.log('Message: ', message)
);
emitter.on('error', (error) =>
    console.log('Error: ', error)
);

emitter.emit('message', 'Node js EventEmitter in action.');
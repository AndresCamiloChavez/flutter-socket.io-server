const { io } = require('../index');

io.on('connection', client => {
    console.log('Cliente Conenctado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
    //on escuchar
    client.on('mensaje', (payload) => {
        console.log('Mensaje!!', payload);

        io.emit('mensaje', { admin: 'nuevo mensaje' });
    });
});
let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./dbConnection');
let router = require('./routers/router');
const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/view'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);

// io.on('connection', (socket) => {
//     console.log('user connected');
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });

//     setInterval(() => {
//         x = parseInt(Math.random() * 10);
//         socket.emit('number', x);
//         console.log('Emmiting Number ' + x);
//     }, 1000)
// });

// Sample data for search suggestions
const items = [
    'Foocery delivery',
    'Classibazar',
    'Classileads',
    'Classiestate',
    'Khrouch',
    'Gurug',
    'SIMs',
    'Apple',
    'Coles',
    'Woolsworth'
];

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('search query', (query) => {
        if (query) {
            const results = items.filter(item =>
                item.toLowerCase().includes(query.toLowerCase())
            );
            socket.emit('search results', results);
        } else {
            socket.emit('search results', []);
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

http.listen(port, () => {
    console.log('express server started');
});
import * as dotenv from 'dotenv';
import * as io from 'socket.io-client';
import { ConnectionPool, Request } from 'mssql';
dotenv.config();
const pool = new ConnectionPool(process.env.CONNECTION_STRING);
const token = process.env.FB_TOKEN;
const socket: SocketIOClient.Socket = io(`${process.env.SERVER_URL}`, { query: { token } });
console.log('connecting... ', process.env.SERVER_URL);
socket.on('connect', function () {
    console.log('Connected to server!');
});
socket.on('data-request', async function (data) {
    console.log('eo date', data);
    await pool.connect();
    const request = new Request(pool);
    const dbData = await request.query(data);
    socket.emit('data-response', dbData);
});
socket.on('disconnect', function () {
    console.log('disko nekted');
});

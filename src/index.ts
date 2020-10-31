import * as dotenv from 'dotenv';
import * as io from 'socket.io-client';
import { ConnectionPool, Request } from 'mssql';
import firebase from 'firebase/app';
import 'firebase/auth';

dotenv.config();

async function bootstrap() {
    const app = firebase.initializeApp({
        apiKey: 'AIzaSyB4L2ujEtbLHKgzk1_LiDuM6UQO4M5NZkE',
        authDomain: 'nq-framework.firebaseapp.com',
        projectId: 'nq-framework',
        appId: '1:384505471856:web:3c58fbc64af47987ae65b5',
    });

    const userCredential = await app
        .auth()
        .signInWithEmailAndPassword(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    const token = await userCredential.user.getIdToken();
    const pool = new ConnectionPool(process.env.CONNECTION_STRING);
    const socket: SocketIOClient.Socket = io(`${process.env.SERVER_URL}`, { query: { token } });
    console.log('connecting... ', process.env.SERVER_URL);
    socket.on('connect', function () {
        console.log('Connected to server!');
    });
    socket.on('data-request', async function (data) {
        console.log('eo date', data);
        try {
            await pool.connect();
            const request = new Request(pool);
            const dbData = await request.query(data);
            socket.emit('data-response', dbData);
        } catch (err) {
            socket.emit('data-response', { status: ' kitica', poruka: err });
        }
    });
    socket.on('disconnect', function () {
        console.log('disko nekted');
    });
}
bootstrap().catch((err) => {
    console.error(err);
});

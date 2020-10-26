import * as eventSource from 'eventsource';

// console.clear();

const token = 'test token goes here';
const sse = new eventSource('https://server.nqframework.com/v1/actions/receive?token=' + token);
// const sse = new eventSource('http://localhost:3000/v1/actions/receive?token=' + token);
sse.addEventListener('message', (event) => {
    console.log('data ', event);
});
// sse.onmessage = (event) => {
//     console.log('data ',event);
// }
console.log('started up');

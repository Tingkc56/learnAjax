const { request } = require('express');
const express = require('express');

const app = express();

app.get('/server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置相应体
    response.send('Hello AJAX GET');
});

app.post('/server',(request,response)=>{

    response.setHeader('Access-Control-Allow-Origin','*');

    response.send('Hello AJAX POST');
});

app.all('/json-server',(request,response)=>{

    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');

    //响应一个数据对象
    const data = {
        name: 'just antoine'
    };
    //由于send不能直接读对象，只能读string，所以必须转化
    let str = JSON.stringify(data);

    response.send(str);
});

// app.all('/axios-server',(request,response)=>{

//     response.setHeader('Access-Control-Allow-Origin','*');
//     const data = {name: 'tingting'};
//     response.send(JSON.stringify(data));
// });


app.all('/fetch-server',(request,response)=>{

    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {name: 'tingting'};
    response.send(JSON.stringify(data));
});




app.listen(8000,()=>{
    console.log('on service, port 8000 listenning..... ');
});
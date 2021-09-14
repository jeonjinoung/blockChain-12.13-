// const express = require('express');
// const path = require('path');
// const app = express();

// app.set('port', process.evn.PORT||3000);

// // app.get('/' (req,res) => res.send('Hello World!'));
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

// app.get('/a', (req,res) => {
//     res.sendFile(path.join(__dirname, '/a.html'));
// });

// app.get('/b', (req,res) => {
//     res.sendFile(path.join(__dirname, '/b.html'));
// });

// app.listen(app.get('port'), ()=> {
//     console.log(app.get('port'), '사용');
// });

// //190~~198page 지금해보기

// //npm init  // 첫번재로 npm 다운로드
// //npm install express // 두번째로 express 다운로드
// //npm -g nodemon // 세번째로 노드몬 다운로드


const express = require('express');

const app = express;

app.use((req,res) =>{
    let output = [];
    for(let i = 0; i < 3; i++){
        output.push({
            count:i,
            name: 'name - ' + i,
        })
    }
    res.send(output);
});

app.listen(3000,()=>{
    console.log('대기중')
})

//세션과 쿠키.. 차이점.... 교재.. 꼭!!!0
//템플릿 엔진?(node.js)//어떤종류가 있는지?
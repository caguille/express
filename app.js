let express= require('express');
let app = express();
const path= require('path');

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/index.html'));
});

app.listen (3000, ()=>
console.log ('servisor corriendo')
);

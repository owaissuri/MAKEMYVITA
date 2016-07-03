var express = require('express'),
app = express();

app.get('/',function(req,res){
res.sendfile('F:/code/nodeJS/views/v/main.html');
});

app.listen(8080,function(){
console.log("i am Listening");
})

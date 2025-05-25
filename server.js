const express = require('express');
const app = express();

const domains = ['http://localhost:8080'];

app.use('/',express.static(__dirname));

app.listen(process.env.PORT || 8080, function(){
  console.log(`listening on ${process.env.PORT} or 8080`);
});

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

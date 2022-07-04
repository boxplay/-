//node 启动httpServer
const http = require('http'),
fs = require('fs'),path=require('path')
const server = http.createServer((req, res) => {
  switch (path.extname(path.resolve(req.url))) {
    case '.js':
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      break;
    case '.ico':
      res.writeHead(200, { "Content-Type": "application/octet-stream" });
      break;
    default:
      res.writeHead(200, { 'Content-Type': 'text/html' });
      break;
  }
  
  fs.readFile(path.resolve()+req.url,(err,data)=>{
    if(data !== undefined){
      res.write(data);
      res.end();
    }else{
      res.end('ok')
    }
    
  })
});

server.listen(8099,()=>{
  console.log('server is running at :8099')
});
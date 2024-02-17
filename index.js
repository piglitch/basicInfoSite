const http = require('http');
const fs = require('fs');
//const path = require('path');

const server = http.createServer((req, res) => {
   const filePath = req.url === '/' ? 'index.html' : req.url + '.html';
   fs.readFile(filePath, (err, content) => {
    if(err){
        console.log('filepath: ', filePath, `req: ${req.url}`)
        if (err.code == 'ENOENT') {
            // Page not found
            fs.readFile('404.html', (err, cont) =>{
                res.writeHead(404, { 'content-Type': 'text/html' });
                res.end(cont, 'utf8');
            })
        }        
    } else{
        console.log('filepath: ', filePath, `req: ${req.url}`)
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.end(content);
    }
   })
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import { createServer } from 'http';
import { readFile } from 'fs';

const server = createServer((req, res) => {
   const filePath = req.url === '/' ? 'index.html' : req.url + '.html';
   readFile(filePath, (err, content) => {
    if(err){
        if (err.code == 'ENOENT') {
            // Page not found
            readFile('404.html', (err, cont) =>{
            res.writeHead(404, { 'content-Type': 'text/html' });
            res.end(cont, 'utf8');
            })
        }        
    } else{
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.end(content);
    }
   })
});

const PORT = 5173;

server.listen(PORT, () => console.log(`Server is up on port ${PORT}`));

const server = require('./API/server.js');
const port = 5010;

server.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
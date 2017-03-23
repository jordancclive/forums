const server = require('./app');

const port = process.env.PORT || 1234;
server.listen(port, ()=>{console.log(`Listening on port ${port}`)});

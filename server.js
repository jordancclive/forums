const server = require('./app');

const port = process.env.PORT || 2345;
server.listen(port, ()=>{console.log(`Listening on port ${port}`)});

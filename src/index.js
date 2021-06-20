var http = require("http");

const httpServer = http.createServer(handleServer).listen(8081);


function handleServer(req, res) {
    if (req.url==="/welcome") {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Welcome to Dominos!'); //write a response to the client
        res.end();
    }
     if (req.url==="/contact") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const data = JSON.stringify({
        phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
        });
        res.write(data); //write a response to the client
        res.end();
    }else if (req.url!="/welcome" && req.url!="/contact" ) {
        res.writeHead(404);
//         res.write("404"); 
        res.end();
    }



   
}

module.exports = httpServer;

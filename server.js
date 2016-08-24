const port = process.env.PORT || '8080';
const host = process.env.HOST || '0.0.0.0';
const express = require('express');
const app = express();

app.listen(port,host);
console.log("Listening on : "+host+":"+port);

const express = require('express');

const path = require('path');

const app = express();

// Serve only the static files form the dist directory

app.use(express.static('./dist/webproject4'));



app.get('/*', function (req, res) {

  res.sendFile(path.join('./dist/webproject4/index.html'));

});

app.listen(process.env.PORT || 8080);

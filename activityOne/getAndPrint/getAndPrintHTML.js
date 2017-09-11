
var https = require('https');

function getAndPrintHTMLChunks (options) {

https.get('https://'+ options.host + options.path, function(res){

  res.setEncoding('utf8');

  let rawData = '';
  res.on('data', (chunk) => {
    rawData = chunk;
  });

  res.on('end', () => {
    callback(rawData);
  });

});

};


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTMLChunks(requestOptions);
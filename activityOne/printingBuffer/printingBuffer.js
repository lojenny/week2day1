var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get('https://'+requestOptions.host + requestOptions.path, function(res){
  res.setEncoding('utf8');

  let rawData = '';
  res.on('data', (chunk) => {
    rawData = chunk;
  });

  res.on('end', () => {
    console.log(rawData);
});

});

};

getAndPrintHTML();
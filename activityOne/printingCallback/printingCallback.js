var https = require('https');

function printHTML (html) {
  console.log(html);
}


function getHTML (options, callback) {

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
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
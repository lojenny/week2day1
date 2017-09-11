var https = require('https');

function printHTML (html) {
  console.log(html);
}

module.exports = function getHTML (options, callback) {

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
  /* Your code here */
};

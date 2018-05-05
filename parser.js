const mapper = require('./mapper');
const csv = require('csv-parser');
const fs = require('fs');

module.exports.parse = filename => {
  let result = [];
  fs
    .createReadStream(filename)
    .pipe(csv())
    .on('data', function(data) {
      result.push(data);
    })
    .on('end', function() {
      fs.writeFile('output/test7.json', JSON.stringify(result), err => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    });
};

module.exports.parse('map_master_v2.csv');

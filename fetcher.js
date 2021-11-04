const fs = require('fs')
const request = require('request');

const url = process.argv[2]
const filePath = process.argv[3]

const getData = function (url,callback, filePath) {
  request(url, function (error, response, body) {
    if (!response){
      console.log(error);
    }
      else {
        console.log('Got information')
        callback(body, filePath)
      }
  });

}

const writeData = function (body, filePath) {
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err)
      return
    } else {
      const length = (new TextEncoder().encode(body)).length
      console.log (`Downloaded and saved ${length} bytes to ${filePath}`)
    }
})
};

getData(url, writeData,filePath) 

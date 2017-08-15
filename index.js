// function emojis() {
//   var emojiArray = [];
//   var emoji = require('node-emoji');
//    for ( var i = 0; i <= 20; i++ ) {
//     emojiArray.push(emoji.random().emoji);
//     console.log(emojiArray[i]);
//   };
// };
// emojis();

const http = require('http');
const emoji = require('node-emoji');
const server = http.createServer((req, res) => {
  res.write(emoji.random().emoji);
  res.end();
});

server.listen(8001);

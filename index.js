function emojis() {
  var emojiArray = [];
  var emoji = require('node-emoji');
   for ( var i = 0; i <= 20; i++ ) {
    emojiArray.push(emoji.random().emoji);
    console.log(emojiArray[i]);
  };
};
emojis();

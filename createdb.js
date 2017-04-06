// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/chat');

// var schema = mongoose.Schema({
//   name: String
// });
// schema.methods.meow= function() {
//   console.log(this.get('name'));
// }

// var Cat = mongoose.model('Cat', schema);

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//     kitty.meow();
//   }
// });
var mongoose = require('./lib/mongoose');
var User = require('./models/user').User;


 mongoose.connection.on('open', function() {
  
  var db = mongoose.connection.db;
  db.dropDatabase(function(err) {
    if (err) throw err;

    console.log('ok');
    mongoose.disconect();
  })
 });
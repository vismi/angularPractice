var MongoClient = require( 'mongodb' ).MongoClient;

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( "mongodb://localhost:27017/test", function( err, db ) {
      _db = db;
      console.log("In the connect func====================================Inside mongoUtil"+_db);
      return callback( err );
    } );
  },

  getDb: function() {
  	console.log("This is getDb method"+_db);
  	return _db;
  }
};
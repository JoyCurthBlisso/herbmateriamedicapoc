var orm = require('../config/orm.js');

var herb = {
    
    selectAll: function(cb) {
      orm.selectAll('herb', function(res) {
        cb(res);
      });
    },
  
   
    insertOne: function(cols, vals, cb) {
      orm.insertOne('herb', cols, vals, function(res) {
        cb(res);
      });
    },
 
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne('herb', objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

module.exports = herb;
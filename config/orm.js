var sequelize = require("./connection.js");

module.exports = function(){
    function selectAll(){
        sequelize.findAll({ }).then(function(dbTodo) {
            res.json(dbTodo);
          });
    }
    function insertOne(name){
        sequelize.create({
            burger_name: name,
            devoured: 0,
        });
    }
    function updateOne(name, devoured){
        sequelize.update({  
            burger_name: name,
            devoured: devoured
        });

    }
}
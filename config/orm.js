var connection = require ("../config/connection.js")

// I assumed i would be a number since the data base runs on a primary key

// function selectAll(){
//     var arr = [];

//     for (var i = 0; i < number; i++) {
//         arr.push("?");
//     }
//     return arr.toString();
// }
// function insertOne(devoured){
//     var arr = [];
//     for (var key in ob){
//         var value =ob[key];
//         // of (Object.isDevoured.call(key)) {
        
//             if (typeof value === "string" && value.index(" ")>= 0){
//                 valie = "'" + value + "'"
//             }
//             arr.push(key + "=" + value);
//         }
//     }
//     return arr.toString();
// }

// function updateOne(){
//     var arr = [];
//     for (var key in ob){
//         var value =ob[key];
//         of (Object.isDevoured.call(ob, key)) {
        
//             if (typeof value === "string" && value.index(" ")>= 0){
//                 valie = "'" + value + "'"
//             }
//             arr.push(key + "=" + value);
//         }
//     }
//     return arr.toString();
// }

var orm = {
    all: function(insertInTable, callBack){
        var queryString = "select * from " + insertInTable + ";";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            callBack(result);
        });
    
    },

    create: function(table, cols, vals, callBack){
        var queryString = "insert into " + table;

        queryString += "(";
        queryString += cols.toString();
        queryString += ")";
        // I think I am missing some but I am not sure what to put
   
        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if(err){
                throw err;
            }
            callBack(result);
        });

    
    },
    
}

orm.all("burgers", function(req,res){
    console.log(res)
})
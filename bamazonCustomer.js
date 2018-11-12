var inquirer = require("inquirer");
var mysql = require("mysql");
var Table = require("cli-table")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root", 
    database: "Bamazon_db"
});

connection.query('SELECT * FROM Products', function(err, res){
    if(err) throw err;
    console.log('                          _.~"~._.~"~._.~Welcome to BAMAZON~._.~"~._.~"~._                          ')
    console.log("----------------------------------------------------------------------------------------------------")
    console.log("                              HERE ARE ALL THE ITEMS AVAILABLE FOR SALE:                            ");
    console.log("----------------------------------------------------------------------------------------------------");

    var table = new Table({
        head: ['ID', 'Product Name', 'Department', 'Price', 'Stock Quantity']
    });

    for (var i = 0; i < res.length; i++) {
        table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price.toFixed(2), res[i].stock_quantity]);
    }

    console.log(table.toString());

    inquirer.prompt([{
        name: "item_id",
        type: "input",
        message: "What is the item ID you would like to buy?",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        name: "stock_quantity",
        type: "input",
        message: "How many of this item would you like to buy?",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }]).then(function(answer) {
        var chosenId = answer.item_id - 1
        // var chosenProduct = res[chosenId]
        var chosenQuantity = answer.stock_quantity
        if (chosenQuantity < res[chosenId].stock_quantity) {
            console.log("Your total for " + "(" + answer.stock_quantity + ")" + " - " + res[chosenId].product_name + " is: " + res[chosenId].price.toFixed(2) * chosenQuantity);
            connection.query("UPDATE products SET ? WHERE ?", [{
                StockQuantity: res[chosenId].stock_quantity - chosenQuantity
            }, {
                id: res[chosenId].item_id
            }], function(err, res) {
                //console.log(err);
                
            });

        } else {
            console.log("Sorry, insufficient Quanity at this time. All we have is " + res[chosenId].stock_quantity + " in our Inventory.");
           
        }
    })
})



    
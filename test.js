const mysql2 = require("mysql2");
const SQL = require("./app");
require('colors')

let data = {
    host: '...',
    database: '...',
    user: '...',
    password: '...',
    port: 3306
}

const connection = mysql2.createConnection({
    host: data.host,
    database: data.database,
    user: data.user,
    password: data.password,
    password1: data.password,
    password2: data.password,
    password3: data.password,
    port: data.port
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


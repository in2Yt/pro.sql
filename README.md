# pro.sql

- This package was created by NoonServ.com 
- This package gives you the best SQL shortcuts at no cost
- NoonServ Support Team

## Installation

```sh
npm i pro.sql
npm i mysql2
```

## Playback Method

1 - Create an app.js file

2 - You need to add the following codes

```js
const mysql2 = require("mysql2");
const SQL = require("pro.sql");
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

... // Add required commands here! such as( createTable, deleteTabel, add, get, and more... )

```

### Create Table

```js
(async () => {
    let data = await SQL.createTable(connection, 'users', ['name', 'email', 'password'])
    return console.log(data) // { code: 0, message: 'TABLE_CREATED' }
})();
```

### Delete Table

```js
(async () => {
    let data = await SQL.deleteTable(connection, 'users')
    return console.log(data) // { code: 0, message: 'TABLE_DROP' }
})();
```

### Add

```js
(async () => {
    let data = await SQL.add(connection, 'users', { name: 'Jake Smith', email: 'name@email.com', password: '123456' });
    return console.log(data) // { code: 0,  message: 'INSERT_ADD', result: ResultSetHeader { ... } }
})();
```

### Get

```js
(async () => {
    let data = await SQL.get(connection, 'users', 1);
    return console.log(data) // { code: 0, message: 'INSERT_GET', result: { ... } }
})();
```

### All

```js
(async () => {
    let data = await SQL.all(connection, 'users',)
    return console.log(data) // { code: 0, message: 'INSERT_ALL', result: [ { ... }, { ... }, { ... } ] }
})();
```

### Update

```js
(async () => {
    let data = await sql.update(connection, 'users', 'name', 'NoonServ', 1)
    return console.log(data) // { code: 0, message: 'INSERT_UPDATE', result: ResultSetHeader { ... } }
})();
```

### Delete

```js
(async () => {
    let data = await sql._delate(connection, 'users', 1)
    return console.log(data) // { code: 0, message: 'INSERT_DELETE', result: ResultSetHeader { ... } }
})();
```

### Note

- If data.code is 0, it means the process is successful, if it is 1, it means there is an error, and to extract the error data.error
- You need to add a 'mysql2' cage to your sql connection first

```
npm i mysql2
```

### Support

- Discord: in2_yt
- whatsapp: +201001193011
- e-Mail: mohamed_hisham@noonserv.com

[![Discord Presence](https://lanyard.cnrad.dev/api/1229109763950907456)](https://discord.com/users/1229109763950907456)

require('colors')

async function createTable(sql, database = String, value = []) {

    var textValue = value;
    var set_value = '(id INT AUTO_INCREMENT PRIMARY KEY, ';
    var number = null
    textValue.forEach(add)

    async function add(item) {
        if (number === null) {
            set_value += `${item} VARCHAR(255), `
            number = 1
        } else if (number === textValue.length - 1) {
            set_value += `${item} VARCHAR(255))`
        } else {
            set_value += `${item} VARCHAR(255), `
            number += 1
        }
    }

    var Create_SQL_Tabel = `CREATE TABLE ${database} ${set_value}`;
    try {
        const [result] = await sql.promise().query(Create_SQL_Tabel);
        return { code: 0, message: 'TABLE_CREATED' }
    } catch (error) {
        if (error?.message === `Table '${database}' already exists`) return { code: 0, message: 'TABLE_CREATED' }
        return console.error(error), { code: 1, message: 'TABLE_CREATED', error: error };
    }

}

async function deleteTable(sql, name = String) {
    var Delete_SQL_Table = `DROP TABLE \`${name}\``

    try {
        const [result] = await sql.promise().query(Delete_SQL_Table);
        return { code: 0, message: 'TABLE_DROP' }
    } catch (error) {
        if (error?.message === `ER_BAD_TABLE_ERROR`) return { code: 1, message: 'TABLE_DROP' }
        return console.error(error), { code: 1, message: 'TABLE_DROP', error: error };
    }
}

async function add(sql, database = String, Data = String) {
    let Insert_SQL = `INSERT INTO ${database} SET ?`;
    try {
        const [result] = await sql.promise().query(Insert_SQL, Data);
        return { code: 0, message: 'INSERT_ADD', result: result }
    } catch (error) {
        return console.error(error), { code: 1, message: 'INSERT_ADD', error: error };
    }
}

async function get(sql, database, id = String) {
    let Get_SQL = `SELECT * FROM ${database} WHERE id = ${id}`
    try {
        const [result] = await sql.promise().query(Get_SQL);
        return { code: 0, message: 'INSERT_GET', result: result[0] }
    } catch (error) {
        return console.error(error), { code: 1, message: 'INSERT_GET', error: error };
    }
}

async function all(sql, database) {
    let All_SQL = `SELECT * FROM ${database}`
    try {
        const [result] = await sql.promise().query(All_SQL);
        return { code: 0, message: 'INSERT_ALL', result: result }
    } catch (error) {
        return console.error(error), { code: 1, message: 'INSERT_GET', error: error };
    }
}

async function update(sql, database, Name, to, id) {
    var Update_SQL = `UPDATE \`${database}\` SET \`${Name}\` = '${to}' WHERE \`${database}\`.\`id\` = ${id}`;
    try {
        const [result] = await sql.promise().query(Update_SQL);
        return { code: 0, message: 'INSERT_UPDATE', result: result }
    } catch (error) {
        return console.error(error), { code: 1, message: 'INSERT_UPDATE', error: error };
    }
}

async function delete_(sql, database, id) {
    var Delete_SQL = `DELETE FROM ${database} WHERE \`${database}\`.\`id\` = ${id}`
    try {
        const [result] = await sql.promise().query(Delete_SQL)
        return { code: 0, message: 'INSERT_DELETE', result: result }
    } catch (error) {
        return console.error(error), { code: 1, message: 'INSERT_DELETE', error: error };
    }
}

module.exports = {
    createTable: createTable,
    deleteTable: deleteTable,
    add, get, all, update,
    _delate: delete_
};
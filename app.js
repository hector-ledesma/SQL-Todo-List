const mysql = require("mysql");
const connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'me',
    password: 'password',
    database: 'list'
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

listItems = connection.query('SELECT * FROM items', (err, result, field) => {
    if (err) throw err;

    console.log("This is result: ");
    result.forEach((res) => {
        console.log(res.item);
    })
})


connection.end((err) => {

});

export { listItems };
const maria = require("mysql");
const conn = maria.createConnection({
    host: "localhost",
    port: 3306,
    user: "limc",
    password: "data19",
    database: "testProject",
});
module.exports = conn;

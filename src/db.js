const mysql = require("mysql2");

const dbConfig = {
  host: "db",
  user: "test",
  password: "some_pass",
  database: "nodedb"
}

const connection = mysql.createConnection(dbConfig);

function insertPerson() {
  const query = "INSERT INTO people (name) VALUES ('Gabriel')";
  return new Promise(resolve => connection.query(query, (err, result) => {
    if (err) return reject(err);
    return resolve();
  }));
}

/**
 * 
 * @returns {Promise<{ id: number, name: string }[]>}
 */
function listPeople() {
  const query = "SELECT * FROM people";
  return new Promise((resolve, reject) => connection.query(query, (err, result) => {
    if (err) return reject(err);
    return resolve(result);
  }));
}

module.exports = { insertPerson, listPeople };


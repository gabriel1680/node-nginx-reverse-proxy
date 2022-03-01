const mysql = require("mysql2");

const dbConfig = {
  host: "db",
  user: "test",
  password: "some_pass",
  database: "nodedb"
}

const connection = mysql.createConnection(dbConfig);

function getRandomName() {
  const names = ["Gabriel", "Guilherme", "Julia", "Caio", "Nina", "Cebolinha"];
  const randomInt0To5 = Math.floor(Math.random() * 6);
  return names[randomInt0To5];
}

function insertPerson() {
  const query = `INSERT INTO people (name) VALUES ('${getRandomName()}')`;
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


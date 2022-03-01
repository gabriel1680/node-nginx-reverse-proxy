const { insertPerson, listPeople } = require("../db");

const overviewController = res => {
  const html = `
    <h1>Overview</h1>
    <br/>
    <p>This project is using an nginx server as reverse proxy for a node application with mysql and dockerize</p>
  `;
  return res.end(html);
}

const indexController = async res => {
  await insertPerson();
  const people = await listPeople();
  let html = `<h1>FullCycle Rocks </h1>`;
  html += people.map(person => `<p>id: ${person.id}, name: ${person.name}</p>`).join('');
  return res.send(html);
}

module.exports = { overviewController, indexController };
const { insertPerson, listPeople } = require("../db");
const fs = require("fs");
const path = require("path");

function readHtml(fileName) {
  const viewsDir = path.join(__dirname, "..", "views");
  return fs.readFileSync(path.join(viewsDir, `${fileName}.html`)).toString();
}

const overviewController = res => {
  return res.end(readHtml("overview"));
}

const indexController = async res => {
  await insertPerson();
  const people = await listPeople();
  let content = `<h1>FullCycle Rocks</h1>`;
  content += people.map(person => `<p>id: ${person.id}, name: ${person.name}</p>`).join('');
  const html = readHtml("index");
  return res.end(html.replace("{{content}}", content));
}

module.exports = { overviewController, indexController };
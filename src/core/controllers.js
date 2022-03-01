const overviewController = res => {
  const html = `
    <h1>Overview</h1>
    <br/>
    <p>This project is using an nginx server as reverse proxy for a node application</p>
  `;
  return res.end(html);
}

const indexController = res => {
  return res.end("<h1>FullCycle Rocks</h1>");
}

module.exports = { overviewController, indexController };
const Express = require('express');

const port = 8080;
const app = Express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Listening on port: ${[port]}`);
});

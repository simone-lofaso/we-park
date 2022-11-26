import app from './app';

const port = 8000;
app.listen(port, process.env.IPHOST || 'localhost', () => {
  console.log(`Listening on http://${process.env.IPHOST}:${port}`);
});

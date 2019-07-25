const server = require('./server/server.js');

const PORT = process.env.PORT || 3003;
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening on port ${PORT}`);
});

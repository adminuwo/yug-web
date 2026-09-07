let sseClients = [];

const addClient = (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  sseClients.push(res);

  // Send initial ping to keep-alive
  res.write(': ping\n\n');

  req.on('close', () => {
    sseClients = sseClients.filter(client => client !== res);
  });
};

const sendRealtimeLead = (eventType, data) => {
  const payload = JSON.stringify({ eventType, data });
  sseClients.forEach(client => {
    client.write(`data: ${payload}\n\n`);
  });
};

module.exports = {
  addClient,
  sendRealtimeLead
};

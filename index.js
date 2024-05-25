import express from 'express';
import ip from 'ip';

const app = express();
const ipAddress = ip.address();

const port = 80

app.get('/', (req, res) => {
  res.send(`<h1>Dummy Express listing on ${ipAddress}</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
  console.log(`Network access via: http://${ipAddress}:${port}`);
})
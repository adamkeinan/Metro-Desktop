// metroapp.js
require('dotenv').config()
const metroapp = require('http').createServer((req, res) => res.send('Ahoy!'));
const PORT = process.env.PORT || 8000;

const {
    NODE, ENV, PORT, HOST
}=process.env

app.listen(PORT, () => {
  console.log(`Server is listening on port ${8000}`);
});

console.log(
  NODE, ENV, PORT, HOST
)
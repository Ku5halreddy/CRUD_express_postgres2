const { Client } = require("pg");
const client = new Client({
  connectionString: "postgresql://postgres:postgres@localhost/fishesapp"
});

client.connect();

module.exports = client;

const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1150',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// client.query(`SELECT * FROM memo`, (err,res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err);
//   }

// });

module.exports = client;
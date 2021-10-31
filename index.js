const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
// mongo user : lizen123
// pass: ffAl5syTOpc8TQiO

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yvumd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
      try{
        await client.connect();
        console.log('bal koro')
      }
      finally{
        
      }
}
run().catch(console.dir);
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('hello world')
  client.close();
});
app.get('/', (req, res) => {
    res.send('Hello HAHA World hey!')
  });
  app.listen(port, () => {
    console.log(`localhost:${port}`)
  });


const MongoClient = require('mongodb').MongoClient;
const pass = "Contra3477"
const uri = "mongodb+srv://ismaelstrey:Contra3477@cluster0.td9af.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
client.connect(async (err) => {
  const collection = client.db("grades").collection("students");

  const databaselist = await client.db().admin().listDatabases()
  databaselist.databases.forEach(db=> console.log(db.name))
  // console.log(databaselist)
  if(err){ console.log(err)}
  client.close();
});

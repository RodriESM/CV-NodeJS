const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

console.log(process.env.MONGO_URI)
async function connectToDatabase(collectionName) {
  const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  try {
    await client.connect();
    console.log("Connected to MongoDB successfully");

    const db = client.db(process.env.MONGO_DB_NAME);
    const collection = db.collection(collectionName);
    return collection;
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
}

module.exports = {
  connectToDatabase
};
import 'dotenv/config.js';
import pkg from 'mongodb';
import dns from 'node:dns';
const { MongoClient } = pkg;

dns.setServers(['8.8.8.8','1.1.1.1']);

// Replace the placeholder with your Atlas connection string
const uri = process.env.DB_URI; 
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function connectToAtlas() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB Atlas!");
    // Perform database operations here
    // await listDatabases(client); 
  } catch (e) {
    console.error('Connection failed:', e);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

connectToAtlas();
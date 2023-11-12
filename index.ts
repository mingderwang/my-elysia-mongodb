import { MongoClient, Db } from 'mongodb';

interface User {
  username: string;
  email: string;
  password: string;
}

async function createTable() {
  const url = 'mongodb://127.0.0.1:27017';
  const dbName = 'db2';
  const collectionName = 'users';

  // Connect to MongoDB
  const client = new MongoClient(url, {});
  await client.connect();

  // Access the database
  const db: Db = client.db(dbName);

  // Create a collection (table) if it doesn't exist
  await db.createCollection(collectionName);

  console.log(`Collection '${collectionName}' created successfully.`);

  // Close the connection
  await client.close();
}

// Call the function to create the table
createTable().catch(console.error);

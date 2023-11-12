import { MongoClient, Db } from 'mongodb';

interface User {
  name: string;
  age: number;
  email: string;
}

async function createTable() {
  const url = 'mongodb://localhost:27017';
  const dbName = 'your_database_name';
  const collectionName = 'users';

  // Connect to MongoDB
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
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

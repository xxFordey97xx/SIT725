var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;

app.listen(port,()=>{
console.log("App listening to: "+port)
})

// Mongodb implementation
const { MongoClient, ServerApiVersion } = require("mongodb");


// Replace the placeholder with your Atlas connection string
const uri = "mongodb://localhost:27017/";

async function insertData() {
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access the database and collection
        const db = client.db("myDB");
        const collection = db.collection("pizzaMenu");

        const pizzas = [
            { name: "Margherita", ingredients: ["tomato", "mozzarella", "basil"], price: 8.99 },
            { name: "Pepperoni", ingredients: ["tomato", "mozzarella", "pepperoni"], price: 9.99 },
            { name: "Veggie Supreme", ingredients: ["tomato", "bell peppers", "onion", "olives"], price: 10.49 }
        ];

        // Insert the data
        const result = await collection.insertMany(pizzas);
        console.log(`${result.insertedCount} documents inserted:`, result.insertedIds);
    } catch (err) {
        console.error('Error inserting data:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}


async function fetchAllData() {
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access the database and collection
        const db = client.db("myDB");
        const collection = db.collection("pizzaMenu");

        // Fetch all documents from the collection
        const data = await collection.find().toArray();

        // Print the data
        console.log(data);
    } catch (err) {
        console.error('Error fetching data:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}

async function runFunctions() {
    await insertData();
    fetchAllData();
}

// // Run the function
// insertData();
// // Run the function
// fetchAllData();

runFunctions();
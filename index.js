/*!
 * express
 * MIT Licensed
 */

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { connectToDatabase } = require('./database');
const { ObjectId } = require('mongodb');
const cors = require('cors');

const app = express();
// Enable CORS for all routes
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

// Endpoint to retrieve all profiles
app.get('/profiles', async (req, res) => {
  try {
    const collection = await connectToDatabase('profiles');
    const result = await collection.find().toArray();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Endpoint to retrieve all estudios
app.get('/estudios/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const collection = await connectToDatabase('profiles');

    // Query for the document with the specified _id
    const query = {_id: new ObjectId(id)};
    
    // Execute the query and retrieve the result as an array of objects
    const resultJson = await collection.find(query).toArray();
    
    // Retrieve the related documents for estudios
    const estudiosCollection = await connectToDatabase('estudios');
    const estudiosResult = await estudiosCollection.find({_id: new ObjectId(resultJson[0].estudios[0])}).toArray();

    res.json(estudiosResult);
    
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Endpoint to retrieve all experiencias
app.get('/experiencias/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const collection = await connectToDatabase('profiles');

    // Query for the document with the specified _id
    const query = {_id: new ObjectId(id)};
    
    // Execute the query and retrieve the result as an array of objects
    const resultJson = await collection.find(query).toArray();
    
    // Retrieve the related documents for experiencias
    const experienciasCollection = await connectToDatabase('experiencias');
    const experienciasResult = await experienciasCollection.find({_id: {$in: resultJson[0].experiencias}}).toArray();

    res.json(experienciasResult);
    
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Endpoint to retrieve all intereses
app.get('/intereses/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const collection = await connectToDatabase('profiles');

    // Query for the document with the specified _id
    const query = {_id: new ObjectId(id)};
    
    // Execute the query and retrieve the result as an array of objects
    const resultJson = await collection.find(query).toArray();
    
    // Retrieve the related documents for intereses
    const interesesCollection = await connectToDatabase('intereses');
    const interesesResult = await interesesCollection.find({_id: {$in: resultJson[0].intereses}}).toArray();

    res.json(interesesResult);
    
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Endpoint to retrieve all aptitudes
app.get('/aptitudes/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const collection = await connectToDatabase('profiles');

    // Query for the document with the specified _id
    const query = {_id: new ObjectId(id)};
    
    // Execute the query and retrieve the result as an array of objects
    const resultJson = await collection.find(query).toArray();
    
    // Retrieve the related documents for aptitudes
    const aptitudesCollection = await connectToDatabase('aptitudes');
    const aptitudesResult = await aptitudesCollection.find({_id: {$in: resultJson[0].aptitudes}}).toArray();

    res.json(aptitudesResult);
    
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});


// Endpoint to retrieve all hobbies
app.get('/hobbies/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const collection = await connectToDatabase('profiles');

    // Query for the document with the specified _id
    const query = {_id: new ObjectId(id)};
    
    // Execute the query and retrieve the result as an array of objects
    const resultJson = await collection.find(query).toArray();
    
    // Retrieve the related documents for hobbies
    const hobbiesCollection = await connectToDatabase('hobbies');
    const hobbiesResult = await hobbiesCollection.find({_id: {$in: resultJson[0].hobbies}}).toArray();

    res.json(hobbiesResult);
    
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});


// Endpoint to retrieve a specific profile by ID
app.get('/profiles/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const collection = await connectToDatabase('profiles');
    const result = await collection.findOne({_id: new ObjectId(id)});
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Endpoint to create a new profile
app.post('/profiles', async (req, res) => {
  try {
    const data = req.body;
    const collection = await connectToDatabase('profiles');
    const result = await collection.insertOne(data);
    res.json(result.ops[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});


// Endpoint to update an existing profile
app.put('/profiles/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const collection = await connectToDatabase('profiles');
    const result = await collection.findOneAndUpdate({_id: new ObjectId(id)}, {$set: data}, {returnOriginal: false});
    res.json(result.value);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});


// Endpoint to delete an existing profile
app.delete('/profiles/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const collection = await connectToDatabase('profiles');
    const result = await collection.findOneAndDelete({_id: new ObjectId(id)});
    res.json(result.value);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Export the Express API
module.exports = app;
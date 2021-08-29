import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const initialFormState = { name: '', description: '' }

const apiName = 'sensors';
const path = 'https://m6t068kzie.execute-api.eu-west-1.amazonaws.com/staging/sensors'; 
const myInit = { // OPTIONAL
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {  // OPTIONAL
        name: 'param',
    },
};

function App() {

  useEffect(() => {
    API
      .get(apiName, path, myInit)
      .then(response => {
        // Add your code here
      })
      .catch(error => {
        console.log(error.response);
    }); 
  }, []);


  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  

  return (
    <div className="App">
      <h1>My Notes App</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

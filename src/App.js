import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const initialFormState = { name: '', description: '' }

const apiName = 'sensors';
// const path = 'https://m6t068kzie.execute-api.eu-west-1.amazonaws.com/staging/sensors'; 
const path = '/sensors'; 
// const myInit = { // OPTIONAL
//     headers: {}, // OPTIONAL
//     response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
//     queryStringParameters: {  // OPTIONAL
//         name: 'param',
//     },
// };

let myInit = {
  body: {}
}

function App() {

  useEffect(() => {
    API
      .get(apiName, path, myInit)
      .then(response => {
        console.log("got here");
        console.log(response)
          })
      .catch(error => {
        console.log("some type of error")
        console.log(error)
        console.log(error.response);
    }); 
    console.log("here1")
  }, []);
  console.log("here2")

  // async function createNote() {
  //   await API.graphql({ query: createNoteMutation, variables: { input: formData } });
  //   if (formData.image) {
  //     const image = await Storage.get(formData.image);
  //     formData.image = image;
  //   }
  //   setNotes([ ...notes, formData ]);
  //   setFormData(initialFormState);
  // }

  

  return (
    <div className="App">
      <h1>My Notes App</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import 'filepond/dist/filepond.min.css';

class App extends Component {

  handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    axios.post('http://localhost:8080/file', formData, config).then(response => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <>
        <h1>File Upload</h1>
        <form
          className="file-upload"
          action="http://localhost:8080/file"
          method="POST"
          encType="multipart/form-data"
          onSubmit={this.handleSubmit}>

          <label htmlFor="avatar">Profile Picture</label>
          <input id="avatar" type="file" name="avatar" />

          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default App;

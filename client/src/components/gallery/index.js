import React from 'react';
import './styles.css';
import API from '../../services/API';

export default function Gallery () {

  const handleGetClick = async () => {
    API.findAll()
      .then(res => {
        console.log(res)
      })
      .catch(err => console.error(err))
  }

  const handleUploadClick = async (e) => {
    console.log(e);

    API.save()
      .then(res => {
        console.log(res)
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <h1>My Puzzle Gallery</h1>
      <form encType='multipart/form-data'>
        <input type='file' name='picFile' />
        <br />
        <br />
        <button onClick={handleUploadClick}>Upload a picture</button>
      </form>
      <br />
      <br />
      <button onClick={handleGetClick}>Get pictures</button>
      <br />
      <br />
      <img src='https://placekitten.com/640/360' alt='kitten' />
    </div>
  );
}

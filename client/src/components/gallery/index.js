import React, { useState } from 'react';
import './styles.css';
import API from '../../services/API';


export default function Gallery () {
  const [picFile, setPicFile] = useState([]);

  const handleGetClick = async () => {
    API.findAll()
      .then(res => {
        console.log(res)
      })
      .catch(err => console.error(err))
  }

  const handleUploadClick = async (e) => {
    e.preventDefault();
    // console.log(picFile);

    // create new formData instance
    const form = new FormData();

    // append single file to formData instance
    form.append(
      'picFile',
      picFile.selectedFile
    )

    // log items in formData object
    for (const element of form) {
      console.log(element);
    }

    // send formData obj to axios function
    API.save(form)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.error(err))
  }

  const onFileChange = (e) => {
    // console.log(`e.target.files[0]`, e.target.files[0])
    setPicFile({ selectedFile: e.target.files[0] });
  }

  return (
    <div>
      <h1>My Puzzle Gallery</h1>
      <form encType='multipart/form-data'>
        <input type='file' name='picFile' onChange={onFileChange} />
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

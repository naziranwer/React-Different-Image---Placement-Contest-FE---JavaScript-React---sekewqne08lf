import React from 'react'
import '../styles/App.css';
import programmingGif from '../assests/programming.gif';

const GIF = () => {
  return (
    <img src={programmingGif} alt="programming-gif" className='import-image' height={200}/>
  )
}

const App = () => {
  const imageUrl='https://piscum.photos/id/400/200';
  return (
    <div id="main">
      <h1>Add images in 2-different ways.</h1>
      <GIF />
      <img src={imageUrl} alt='A random image' className='url-image' />
    </div>
  )
}


export default App;

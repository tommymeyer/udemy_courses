import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () => {
  return (
    <div>
      <div>
        <p className='f3 content center'>
          {'This Magic Brain will detect faces in your pictures. Give it a try!'}
        </p>
      </div>

      <div className='pa4 br3 shadow-5 form center'>
        <input className='f4 pa2 w-70' type="text"/>
        <button className='w-30 grow f4 link dib white bg-light-purple'>Detect</button>
      </div>
    </div>
  )
}


export default ImageLinkForm;
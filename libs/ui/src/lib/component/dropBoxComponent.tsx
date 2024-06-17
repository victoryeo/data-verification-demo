import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {Dropbox}  from './Dropbox';

export const DropBox = () => {
const[showModal, setShowModal] = useState(false)


  return (
   
  <>
  <Dropbox />

  {/* <button onClick={()=> setShowModal(true)}>show</button> */}

  <Modal show={showModal} className='popup-area'>
    <Modal.Header><Button onClick={()=> setShowModal(false)}>X</Button></Modal.Header>
    <Modal.Body>
      {/* congrats Pop view report start */}
      <div className='congrats-text'>
        Congratulations, the data has been successfully transferred on the blockchain!
        <div className='view-btn'><button className='btn view-report'>View Report</button></div>
      </div>
        {/* congrats Pop view report end*/}
      {/* congrats Pop Download report start*/}
      <div className='congrats-text'>
        <h1>Verification Successful !</h1>
        <p>Both Files Have Matching Values.</p>
        <div className='view-btn'><button className='btn view-report'>Download Report</button></div>
      </div>
      {/* congrats Pop Download report end */}
        {/* congrats Pop rejection start*/}
      <div className='reject-text'>
        <h1>Verification Failed !</h1>
        <p>The Values In Both Files Do Not Match.</p>
        <div className='view-group-btn'>
          <button className='backup-download'>Download Backup Report</button>
          <button className='btn view-report'>Match Data Again</button>
        </div>
      </div>
        {/* congrats Pop rejection end */}
    </Modal.Body>
  </Modal>
      
  </>
  );
};







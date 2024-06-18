import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '@/app/css/FrameModal.css';



const customStyles = {
    overlay: {
        backgroundColor: '#000000f2'
      },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '76%',
      maxWidth: '422px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '20px',
      backgroundColor: '#fff',
      maxHeight: '80%',
    },
  };
  
 
  // Estilos para los botones
  const buttonStyles = {
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: 'none',
    color: '#ffffff',
    marginTop: '10px',
    backgroundColor: '#ec6628',
    borderColor: '#ec6628',
    width: '100%',
    fontWeight: 600,
    fontSize: '1.2rem',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: 1.5
  };

  const formGroup = {
    marginBottom: '1rem'
  }

  const fieldSetStyle = {
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
  }

  const customControlStyle = {
    position: 'relative',
    display: 'block',
    minHeight: '1.5rem',
    fontSize: '0.8rem',
    lineHeight: '1.5'
  }

  const labelStyle = {
    verticalAlign: 'top'
  }

  const linkStyle = {
    color: '#ec6628',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer'
  }

  const selectedBtn = {
    border: '2px solid black'
  }

Modal.setAppElement('body'); // Ajusta según tu necesidad

function FrameModal({ modalIsOpen, closeModal, handleBuy, xBlocks, yBlocks, blockSize }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });

  const [selectedColor, setColor] = useState('black');
  const [selectedSize, setSize] = useState(1);

  const calculateFramePrice =() =>{
    return selectedColor !== 'not'? xBlocks * yBlocks * selectedSize: 0.00;
  }


  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    if (!validateForm()) {
        return;
      }
  }

  function handleColor(color) {
    setColor(color);
  }

  function handleSubmit(event) {
    closeModal();
    handleBuy(event, calculateFramePrice(), selectedColor);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
    >      
      <div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <h2>Select the Perfect Frame for Your Artwork</h2>      
      </div>
      <div className='modal-content' >   
        <div style={{marginTop: '20px', textAlign:'center', display:'flex'}}>
            <button className onClick={() => handleColor('black')} style={selectedColor === 'black' ? selectedBtn : {}}>  <img style={{width: '80px'}} src='images/frame-black.png'/></button>
            <button onClick={() => handleColor('white')} style={selectedColor === 'white' ? {...selectedBtn, marginLeft: '10px'} : {marginLeft: '10px'}}> <img style={{width: '80px'}} src='images/frame-white.png'/></button>
            <button onClick={() => handleColor('nature')} style={selectedColor === 'nature' ? {...selectedBtn, marginLeft: '10px'} : {marginLeft: '10px'}}> <img style={{width: '80px'}} src='images/frame-nature.png'/></button>
            <button onClick={() => handleColor('not')} style={selectedColor === 'not' ? {...selectedBtn, marginLeft: '10px'} : {marginLeft: '10px'}}> <img style={{width: '80px'}} src='images/frame-not.png'/></button>
        </div>

      </div>
   
      <p style={{padding: '15px 0'}}>Choose from our range of high-quality frames to give the final touch to your new art piece.</p>
      <ul className="frame-list">
        {selectedColor === 'black' && 
        <li>
          <h4>Classic Black:</h4>
          <p>Timeless elegance that frames the work with depth and sophistication.</p>
        </li>}
        {selectedColor === 'white' && <li>
          <h4>Modern White:</h4>
          <p>Clean lines and a fresh finish for a contemporary look.</p>
        </li>}
        {selectedColor === 'nature' &&<li>
          <h4>Natural Wood:</h4>
          <p>Warmth and organic texture that complements and accentuates.</p>
        </li>}
      </ul>
      <p style={{padding: '10px 0'}}>Add a 1-inch thick frame now to make your artwork ready to hang and admire.</p>
        <div className='modal-footer'>
            <button style={buttonStyles} onClick={handleSubmit} > { selectedColor !== 'not' ? "Add to Cart $" + calculateFramePrice(): "Checkout"} </button>
        </div>  
     
      </div>


    </Modal>
  );
}



export default FrameModal;

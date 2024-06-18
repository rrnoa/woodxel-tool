import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { CloseSvg } from '@/app/components/icons/SvgIcons';
// Asegúrate de configurar el elemento app para el modal, como se mostró anteriormente

const customStyles = {
    overlay: {
      zIndex: 5
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
      borderTop: '1px solid #cc',
      borderRadius: '4px',
      padding: '20px 0',
      backgroundColor: '#fff'
    },
  };
  
  // Estilos para el formulario
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px', // Espacio entre campos del formulario
  };
  
  // Estilos para los inputs
  const inputStyles = {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    width: '100%'
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
    fontSize: '1rem',
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
    verticalAlign: 'top',
    fontSize: '1rem'

  }

  const linkStyle = {
    color: '#ec6628',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer'
  }

Modal.setAppElement('body'); // Ajusta según tu necesidad

function ContactModal({ modalIsOpen, closeModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);

  const [errors, setErrors] = useState({});

  function validateForm() {
    let formIsValid = true;
    let errors = {};    

    // Nombre: máximo 50 caracteres
    if (formData.name.length > 50) {
      errors.name = "The name cannot be more than 50 characters.";
      formIsValid = false;
    }

    // Email: formato de email
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "The email format is not valid.";
      formIsValid = false;
    }

    // Empresa: máximo 50 caracteres
    if (formData.message.length > 250) {
      errors.company = "The company cannot be more than 50 characters.";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    if (!validateForm()) {
        return;
      }    
    enviarFormulario(formData);
  }

  function enviarFormulario(datos) {

    const formData = new FormData();
  
    for (const key in datos) {
      if (datos.hasOwnProperty(key)) {
          formData.append(key, datos[key]);
      }
    }  
    fetch('https://lignumcd.com/wp-json/pixel-it/send-contact/', {
    //fetch('https://lignumcd.local/wp-json/pixel-it/send-contact/', {
      method: 'POST',     
      body: formData,
    })
    .then(response => {
      if (!response.ok) {
        // Si el servidor responde, pero con un código de estado HTTP que indica un error (como 404 o 500),
        // lanzamos un error que será capturado por el bloque .catch()
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      else {
        setSending('false');
        closeModal();
        setSending(false);
      }
      return response.json();
    })
    .catch((error) => {
      alert('Connection error. Restart the application.');
      console.error('Error:', error);
    });
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
    >      
     
      <div style={{height: '100%', padding: '0 20px'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <h2 style={{marginBottom: '40px'}}>Contact Us</h2>
      <button disabled={sending} onClick={()=>{closeModal(), setSending(false)}} style={{backgroundColor:'#ffffff', width:'35px', height:'35px', position:'absolute', top: 0, right:0, border: 0}}><CloseSvg/></button>
      </div>
   
      <form onSubmit={handleSubmit}>
        <div style={formGroup}>          
          <input
            disabled={sending}
            className='lead-text-input'
            type="text"
            name="name"
            required="required"
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Name'
            style={inputStyles}
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </div>
        <div style={formGroup}>          
          <input
            disabled={sending}
            className='lead-text-input'
            type="email"
            name="email"
            required="required"
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Email'
            style={inputStyles}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>
        <div style={formGroup}>
          <textarea
            disabled={sending}
            className='lead-text-input'
            name="message" // Asegúrate de que el nombre coincida con la clave en tu estado formData
            required="required"
            value={formData.message}
            onChange={handleInputChange}
            placeholder='Message'
            style={{...inputStyles, height: '100px'}} // Puedes ajustar el estilo según sea necesario
          />
          {errors.company && <div style={{ color: 'red' }}>{errors.company}</div>}
        </div>        
        <div style={{width: '100%'}}>
          <button disabled={sending} type="submit" style={buttonStyles}>{`${sending? 'Sending...': 'Send'}`}</button>
        </div>
      </form>
      </div>
    
    </Modal>
  );
}



export default ContactModal;

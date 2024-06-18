import React, { useEffect, useState } from 'react';

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";

// Asegúrate de configurar el elemento app para el modal, como se mostró anteriormente
  

function ModalContact({ modalIsOpen, closeModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);  

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
    enviarFormulario(formData);
  }

  function enviarFormulario(datos) {

    const formData = new FormData();
  
    for (const key in datos) {
      if (datos.hasOwnProperty(key)) {
          formData.append(key, datos[key]);
      }
    }  
    fetch('https://woodxel.com/wp-json/pixel-it/send-contact/', {
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
      setSending(false);
    });
  }

  const handleCloseModal = () => {
    setSending(false);
    closeModal();
    }

  return (
    <>
    <Modal 
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        placement="top-center"
        radius='sm'
      >
        <ModalContent className='mx-3'>
            <>
              <ModalHeader className="flex flex-col gap-1">{ !sending ? "Contact Us":""}</ModalHeader>
              <form onSubmit={handleSubmit}>
              <ModalBody>                
                { !sending ? <>
                    <Input
                    radius='sm'
                    autoFocus
                    label="Name"
                    placeholder="Enter your name"
                    variant="bordered"
                    name="name"
                    isRequired={true}
                    value={formData.name}
                    onChange={handleInputChange}
                    />

                    <Input
                    radius='sm'
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                    name="email"
                    isRequired={true}
                    value={formData.email}
                    onChange={handleInputChange}
                    />
                    <Textarea
                        radius='sm'
                        label="Message"
                        variant="bordered"
                        placeholder="Enter your message"
                        disableAnimation
                        disableAutosize
                        isRequired={true}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        classNames={{                        
                            input: "resize-y min-h-[40px]",
                        }}
                    /> 
                </>:
                <div className='gap-1'>
                    <p className='py-1'>
                        Thank you for your message! We&apos;ll get back to you soon.
                    </p>
                    <p className='py-1'>
                        Best,
                    </p>
                    <p className='py-1'>
                        Woodxel Team
                    </p>
                    </div>                
                 }                                   
              </ModalBody>
              <ModalFooter>               
                <Button radius='sm' color="primary" type="submit" isLoading={sending}>
                  Send
                </Button>                
              </ModalFooter>
              </form>
            </>
        
        </ModalContent>
      </Modal>      
    </>
  );
}



export default ModalContact;

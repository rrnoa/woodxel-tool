import React, { useState } from 'react';
import {Modal, ModalContent, Checkbox, ModalBody, ModalFooter, Button, ModalHeader} from "@nextui-org/react";

const OnboardingModal = ({ isOpen,  onContinue }) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);

 
  const handleContinueClick = () => {
    onContinue();
  };

  const onDontShow = (e) => {
    setDontShowAgain(e.target.checked)
    if (e.target.checked) {
      localStorage.setItem('onboardingShown', 'no');
    }      
  }


  return (
    <Modal isOpen={isOpen}  placement="center" radius='sm' hideCloseButton={true}>
        <ModalContent className='mx-3'>
        <ModalHeader >{""}</ModalHeader>
          <ModalBody>           
            <p>For a better user experience use the desktop version.</p>
            <Checkbox
            radius='sm'
              classNames={{
                label: "text-small",
              }}
              checked={dontShowAgain}
              onChange={(e) => onDontShow(e)}
              >
                Do not show this message again.
            </Checkbox> 
          </ModalBody>
          <ModalFooter>               
            <Button radius='sm' color="primary" onClick={handleContinueClick}>
              Continue
            </Button>                
          </ModalFooter>
        </ModalContent>
    </Modal>
  );
};

export default OnboardingModal;

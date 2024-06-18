import Link from 'next/link'
import React, { useState } from 'react'
import ModalContact from './ModalContact';

function FooterPage() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(e) {
        e.preventDefault();
		setIsOpen(true);
	  }
	
	function closeModal() {
		setIsOpen(false);
	}
  return (
    <div className='footer-simple-pages'>
        <ModalContact 
            modalIsOpen={modalIsOpen} 
            closeModal={closeModal}  
	    />
        {/* <!-- footer area start  */}
        <footer>
            <div className="container" style={{padding: '0 50px'}}>
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="f-logo">
                            <ul>
                                <li><a href='/'> <img src="woodxel-resources/images/woodxel-h-3.png" alt=""/></a></li>
                                <li> Lignum Custom Woodwork<br/> 8211 NW 74th ST. Miami, FL
                                <br/><a href="mailto:info@lignumcd.com">support@woodxel.com</a>
                                <br/><a href="tel:786.472.1833">786.472.1833</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="footer-center">
                        <ul style={{textAlign: 'center'}}>
                            <li><a href="about-woodxel" target="_blank">About Woodxel</a></li>
                            <li><a href="terms" target="_blank">Terms & Conditions</a></li>
                            <li><a href="privacy" target="_blank">Privacy Policy</a></li>
                            <li><a href="#" onClick={openModal}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="inicio" style={{visibility: 'hidden'}}>Inicio</div>                        
                    
                </div>
            </div>
        </footer>
        {/* <!-- footer area end */}

        {/* <!-- copyright */}
        <div className="copytight" style={{backgroundColor: '#7AA197'}}>
            <div className="contianer">
                <p>Woodxel © 2024. All rights reserved.</p>
            </div>
        </div>
        {/* <!-- copyright */}
    </div>
  )
}


export default FooterPage

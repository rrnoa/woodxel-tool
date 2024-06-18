import React, { useRef, useState } from 'react'
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import "../libs/svg2pdf.umd.min.js";
import pako from 'pako';
import ModalDownload from './ModalDownload.js';
import {Tooltip, Button} from "@nextui-org/react";


const Export3d = ({exportGroup, handleLoading, mobile, setCurrentStep}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	
	function closeModal() {
		setIsModalOpen(false);
	}
    
	const onclickHandler = (event) => {
        event.preventDefault();
		setIsModalOpen(true);
    }

	/* const compressModel = () => {
		const exporter = new GLTFExporter();
        exporter.parse(
			exportGroup, 
			async (gltf) => {
			// gltf es un objeto JSON que representa tu escena
			const output = JSON.stringify(gltf, null, 2);
			const compressedData = pako.gzip(output, { level: 9 });
			downloadJSON(compressedData, 'model3D-'+Date.now()+'.gltf.zip');
			},// called when there is an error in the generation
			function ( error ) {	
				console.log( 'An error happened wen creating model', error );	
			},
			{maxTextureSize: 256}
		);
	}  */

	const compressModel = () => {
		const exporter = new GLTFExporter();
		exporter.parse(
			exportGroup, 
			async (gltf) => {
				// gltf es un objeto JSON que representa tu escena
				const output = JSON.stringify(gltf, null, 2);
				const compressedData = pako.gzip(output, { level: 9 });
				downloadJSON(compressedData, 'model3D-' + Date.now() + '.gltf'); // Agrega '.gltf' antes de '.zip'
			}, // called when there is an error in the generation
			function ( error ) {   
				console.log('An error happened when creating model', error);  
			},
			{maxTextureSize: 256}
		);
	} 

    /* const downloadJSON = (compressedData, filename) => {
		
		const blob = new Blob([compressedData], { type: 'application/zip' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}; */

	const downloadJSON = (compressedData, baseFilename) => {
		const filename = baseFilename + '.zip'; // Agrega '.zip' al final
		const blob = new Blob([compressedData], { type: 'application/zip' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	};

  return (
	<>
	<ModalDownload 
		isModalOpen={isModalOpen}
		closeModal={closeModal}  
		compressModel = {compressModel}
	/>
	{mobile && (
		<button id="woodxel_panel_3d" onClick={onclickHandler}>			
			<span>
				Get Your FREE 3D Model
            </span>
		</button>
	)}
	{!mobile && (
		<Tooltip showArrow={true} color="secondary" content="Download now your Free 3d model" radius='sm'>
		<Button  color="secondary" radius="sm" className="text-base font-bold" id="woodxel_panel_3d" onClick={onclickHandler}>			
				Get Your FREE 3D Model         
		</Button>
		</Tooltip>				
	)}	
	</>	
  )
}

//Export3d.propTypes = {}

export default Export3d
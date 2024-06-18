"use client";
import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import * as THREE from 'three';
import Cropper from "react-easy-crop";
import "react-easy-crop/react-easy-crop.css";
/* import '@/app/css/tooltips-style.css'; */
import '@/app/css/style.css';
import Scene3d from "@/app/components/Scene3d";
import BuyPanel from '@/app/components/BuyPanel';
import 'tippy.js/dist/tippy.css'; // optional
import getCroppedImg from '@/app/libs/cropImage';
import { Locked, Undo,Unlocked, UploadPreview, ScrollSvg, CropArea, Rotate3dSvg, Back, CloseInfo, InfoSvg } from '@/app/components/icons/SvgIcons';
import Export3d from '@/app/components/Export3d';
import { Blocks } from 'react-loader-spinner';
import '@/app/css/Info.css'

import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import ProductDetails from '@/app/components/ProductDetails';
import {Button, ButtonGroup} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Tooltip} from "@nextui-org/react";



export default function Main() {
	const [invalidWidth, setInvalidWidth] = useState(false);
	const [invalidHeight, setInvalidHeight] = useState(false);
	const inputRef = useRef();
	const [showPlaceholderW, setShowPlaceholderW] = useState(true);
	const [showPlaceholderH, setShowPlaceholderH] = useState(true);

	const [isInfoOpen, setInfoOpen] = useState(false);

	const [showScrollIcon, setShowScrollIcon] = useState(true);
	const [showRotateIcon, setShowRotateIcon] = useState(true);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [showTips, setShowTips] = useState(false);
	const [currentTip, setCurrentTip] = useState(1);
	const [uploadedImage, setUploadedImage] = useState("");
	const [previewImage, setPreviewImage] = useState(null);
	const imageReady = useRef();
	const beforeView = useRef();

	const [currentStep, setCurrentStep] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	const [theme, setTheme] = useState('light'); // Valor predeterminado
	
	const [pixelInfo, setPixelInfo] = useState({ // informacion de la imagen pixelada
		colorsArray: [],
        pixelatedImage: "",
        colorDetails: []
	});	

	const [productImg, setProductImg] = useState();

  // Definir tus filtros y las imágenes de muestra para cada uno  

	const [activeButton, setActiveButton] = useState("crop"); 
	const [rotation, setRotation] = useState(0);
	const [contrast, setContrast] = useState(100);
	const [brightness, setBrightness] = useState(100);

	const [currentState, setCurrentState] = useState("upload");//upload,crop,view	
    
    /*Opciones del crop */
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [crop, setCrop] = useState({ x: 0, y: 0});
    const [zoom, setZoom] = useState(1);
	
	const [exportGroupRef, setExportGroupRef] = useState();

	const [blockSize, setBlockSize] = useState(1);//1,2,3	
	
	const cropperRef = useRef(null);

	const croppedAreaPixelsRef = useRef(null);

	const isSliderChangeRef = useRef(false);

	const sceneRef = useRef();
	const renderRef = useRef();
	const btnSizeClick = useRef(false); ///para saber si se ha hehco click sobre alguno de los botones 1,2,3

	// Efecto para actualizar el atributo data-theme
	useEffect(() => {		

		sceneRef.current = new THREE.Scene();
		renderRef.current = new THREE.WebGLRenderer({ antialias: true});

	},[]);

	// Función para avanzar al siguiente paso
	const goToNextStep = () => {
		setCurrentStep(prevStep => prevStep + 1);
	};

	// se utiliza para cuando se termine de dibujar moverse al paso proximo
	const goToStep4 = () => {
		setCurrentStep(4);
	};
	
	  // Función para retroceder al paso anterior
	const goToPreviousStep = () => {
		setCurrentStep(prevStep => prevStep - 1);
	};

	// Actualiza el estado cuando el recorte se completa
	const onCropComplete = (croppedArea, croppedAreaPixels) => {
		croppedAreaPixelsRef.current = croppedAreaPixels;
		if (!isSliderChangeRef.current) {//asegurance que cuandos e aha slider no se actualizae la iamgen
			updatePreviewImage();
		} 
	};

	const updatePreviewImage = async () => {
		if (!cropperRef.current) {
			return;
		}
		const croppedImage = await getCroppedImg(uploadedImage, croppedAreaPixelsRef.current, rotation);
		setPreviewImage(croppedImage);
	};
	// Estilos para aplicar brillo, contraste y rotación en tiempo real
	const imageStyle = {
		filter: `brightness(${brightness}%) contrast(${contrast}%)`,		
		transition: 'filter 0.3s ease, transform 0.3s ease'
	  };


	/** cuando se sube una imagen */
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setIsLoading(true);
			// Dimensiones y calidad de compresión máximas
			const maxWidth = 1280;
			const maxHeight = 1280;
			const quality = 0.7; // Compresión al 70%

			// Llame a la función de redimensionamiento y compresión
			resizeAndCompressImage(file, maxWidth, maxHeight, quality, (compressedBlob) => {
				// Continúe con el procesamiento aquí
				const img = URL.createObjectURL(compressedBlob);
				setUploadedImage(img);
				setPreviewImage(img);
				setIsLoading(false); // Finalizar el indicador de carga
				setCurrentState("dimensions");
				setCurrentStep(2);
				setCurrentTip(2);
				// Reset para cuando se carga desde el preview
				setRotation(0);
				setContrast(100);
				setBrightness(100);     
				setWidth("");
				setHeight("");
				setCrop({ x: 0, y: 0});
				setZoom(1);
				setBlockSize(1);
				setShowPlaceholderW(true);
				setShowPlaceholderH(true);

				//downloadResizedImage(compressedBlob);
			});
		}
	};

	/**
	 * Cambio en las dimensiones
	 */
	const handleWidth = (event) => {
		let { min, max, value } = event.target;	
		if (value < 24 || value > 300) {
			setInvalidWidth(true);
		}
		else {
			setInvalidWidth(false);
		}
		setWidth(Number(value));
	};
	
	const handleInputAdjustment = (event, input) => {
		let { min, max, value } = event.target;
		value = Math.max(Number(min), Math.min(Number(max), Number(value)));

		if(input == "width") {
			setWidth(value);
		} 
		else {
			setHeight(value);
		}
	}
	
	const handleHeight = (event) => {
		let { min, max, value } = event.target;
		if (value < 24 || value > 300) {
			setInvalidHeight(true);
		} else {
			setInvalidHeight(false);
		}

		setHeight(Number(value));
	};
	
	//cuando se hace click sobre el candado
	const handleInputsLock = () => {		
		//setActiveButton("crop");
		setCurrentState("crop");
		//setCurrentTip(6);
		goToNextStep();
	};	

	/**
	 * Cambia tamaño de bloques
	 */
	const handlerBlockSize = (size) =>{
		setIsLoading(true);
		if(showTips) { btnSizeClick.current = true};
		setBlockSize(size);		
	}
	/**
	 * Click sobre uno de los botones de edicion
	 */
	const editBtnHandler = (btn) => {
		setActiveButton(btn);
		if(btn !== "crop") {
			setCurrentState("imagen-edit");
		} else {
			setCurrentState("crop");
		}
	}	

	//Cuando se preciona el boton de mostrar el 3d
	const handleView = async () => {
		setIsLoading(true);
		imageReady.current = await getCroppedImg(uploadedImage, croppedAreaPixelsRef.current, rotation, brightness, contrast);
		beforeView.current = currentState; //almacena el estado antes de hacer el view
		goToNextStep();
	}

	const PreviewImg = () => {
		const imageSrc = previewImage || "images/default.jpeg";
		const isDefaultImage = (imageSrc === "images/default.jpeg");
	
		return (			
			<img
			style={imageStyle} 
			src={imageSrc} 
			alt="Preview" 
			//className={isDefaultImage ? "default" : "crop"}
		/>
		);
	}	

	const handleExportGroupRef = (group)=>{
		setExportGroupRef(group);
	}

	const handleInfoOpen = () => {
		setInfoOpen((pre) => pre = !pre);
	}
	
  return (
		<div className='app-container'>
			<header className="header-area">
				<div className="header-item">
					<div className="header-item-inner">
						<a href="/"><img src="woodxel-resources/images/woodxel-red.png" alt=""/></a>					
					</div>					
				</div>
				
			</header>
			<div className="step-area" >
				<input style={{display: 'none'}} ref={inputRef} type="file" onChange={handleImageChange} accept="image/*" title=""/>			
				<div className="step-area-inner">
					<div className="step-item" >						
							<div className="step-item-inner" onMouseDown = {()=> {if(showRotateIcon) setShowRotateIcon(false);}}>								
								{(
									<div className="spinner" style={{ backgroundColor: theme === 'light'?'#ffffff':'#121212', display: isLoading ? "flex" : "none" }}>
										<Blocks
										visible={true}
										height="80"
										width="80"
										ariaLabel="blocks-loading"
										wrapperStyle={{}}
										wrapperClass="blocks-wrapper"
										/>
									</div>
								)}
								{currentStep==1 && (
									<>							
										<input className='drop' type="file" onChange={handleImageChange} accept="image/*" title=""/>										
										<div className="step-item-inner2" >
											<UploadPreview/>
											<p style={{fontWeight: '700'}}>STEP 1: Upload your media or drop it here</p>
										</div>
									</>
								)}								
								
								{currentStep == 2 && (
									<>									
									<img 
										src={uploadedImage} 
										alt="Preview" 
										style={{maxHeight: '100%'}}
									/>
									</>
								)}
								{currentStep == 3 && (
									<>
									<PreviewImg/>
									</>
								)}							
								
								{currentStep === 4 && (
									<>
									<Scene3d 
											width={width * 0.0254}
											height={height * 0.0254}
											blockSize={blockSize * 0.0254}
											croppedImg = {imageReady.current}
											onGroupRefChange={handleExportGroupRef}//cuando se cree el grupo en la escena 3d
											theme={theme}
											setPixelInfo = {setPixelInfo}
											setProductImg = {setProductImg}
											handleLoading = {setIsLoading}
											sceneRef = {sceneRef.current }
											renderRef = {renderRef.current}
											goToNextStep = {goToStep4}
											btnSizeClick = {btnSizeClick.current}
									/>
										
										<Export3d 
										exportGroup={exportGroupRef}
										handleLoading = {setIsLoading}
										setCurrentStep = {setCurrentStep}
										/>
										{showRotateIcon && 
										<div className='rotate-3d' onMouseEnter={()=> setShowRotateIcon(false)}>
											<Rotate3dSvg/>
										</div>}
									</>
																	
								)}

								<div className="tool-bar">
								<Tooltip showArrow={true} color="secondary" content="Upload a new image" radius='sm'>
									<Button isIconOnly variant="ghost" className="bg-white shadow-md" radius="sm" onClick={() => { if (inputRef.current) inputRef.current.click()}}>
										<UploadPreview size={24}/>
									</Button>  
								</Tooltip>
								<Tooltip showArrow={true} content="Show product information" color="secondary" radius="sm"> 
									<Button isIconOnly variant="ghost" radius="sm" className="bg-white shadow-md" onClick={handleInfoOpen}>
										<InfoSvg size={24}/>
									</Button>
								</Tooltip> 									
								</div>

								
							</div>
					</div>
					<div className="step-item2">
					<SlidingPane
						className="info-panel"
						overlayClassName="some-custom-overlay-class"
						isOpen={isInfoOpen}
						width='30%'
						title="Product Details"
						onRequestClose={() => {						
							setInfoOpen(false);
						}}
						closeIcon = {<CloseInfo/>}
					>
						<ProductDetails/>
					</SlidingPane>
					
						<div className='step-item2-inside'>
						
						<div className={`step-item2-inner2 step-item2-inner10 ${currentStep === 1 || currentStep !== 2 || (showTips && currentTip == 2)? "step inactive" : ""}`}>
							<h2>STEP 2: Panel dimensions</h2>							

								<div className="inputs">
												
									<Input
									radius="sm"
									type="number"
									label="Width"
									placeholder={showPlaceholderW?"min 24\"":" "}
									labelPlacement='outside'
									classNames={{														
										inputWrapper: "pr-1 max-w-[85px]"														
									}}
									variant="bordered"
									onChange={handleWidth}
									onFocus={(even)=>{even.target.select(); setShowPlaceholderW(false)}}
									isInvalid = {invalidWidth}
									value = {width || ""}
									/>							
															
									<Input
									radius="sm"
									min="24" 
									max="300"
									type="number"
									label="Height"
									labelPlacement='outside'
									placeholder={showPlaceholderH?"min 24\"":" "}											
									variant="bordered"
									classNames={{														
										inputWrapper: "pr-1 max-w-[85px]"														
									}}
									onChange={handleHeight}
									onFocus={(even)=>{even.target.select(); setShowPlaceholderH(false)}}
									isInvalid = {invalidHeight}
									value = {height || ""}
									/>

									<Tooltip color='secondary' showArrow={true} content="Confirm" radius="sm">
										<Button 
										onClick={handleInputsLock} 
										isIconOnly 
										aria-label="Lock" 
										variant='bordered' 
										size='md' 
										radius='sm' 
										className='bg-white border-gray-300 border-solid border-1'
										isDisabled={invalidWidth || invalidHeight || width === "" || height === ""|| isLoading}>
											{currentStep == 2 ? <Unlocked/> : <Locked/>}
										</Button>    							
									
									</Tooltip>												
											
								</div>
			
						</div>
						<div className={`step-item2-inner3 step-item2-inner10 ${currentStep === 1 || currentStep !== 3 || isLoading || (showTips && currentTip == 5)? "step inactive" : ""}`}>
							<div style={{display: 'flex', justifyContent:'space-between', marginBottom: '2.2vh'}}>
								<h2 style={{marginBottom: '0px'}}>STEP 3: Edit your image</h2>								
							</div>
							<div className="step-item2-inner step-item2-inner10" style={{paddingBottom: '0px'}}>						
							
								<div className='step-item2-inner11'>								
								{currentStep < 3 && (
									<div>
										<CropArea/>
									</div>
								)}
								{ currentStep >= 3 && (
									<div 
									onMouseEnter={()=> setShowScrollIcon(false)} 
									onMouseLeave={()=> setShowScrollIcon(true)} 
									style={{width:'80%', height:'80%',display:'flex', justifyContent:'center', alignItems:'center'}}>
									<Cropper
											ref={cropperRef}
											image={uploadedImage}
											rotation={rotation}
											onCropChange={setCrop}
											onCropComplete={onCropComplete}
											crop={crop}
											zoom={zoom}
											zoomSpeed={0.1}
											aspect={width / height}
											onZoomChange={(newZoom) => setZoom(newZoom)}
											style={{ containerStyle: { width: '100%', height: '100%', margin:'auto'}, mediaStyle: imageStyle }}
										/>
									
									{ showScrollIcon && <div id='scroll-mark'>										
										<ScrollSvg/>
									</div>}
									</div>
										
										)}		
								</div>
							
							</div>
							
							
							<div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
								<Tooltip content='Show your 3D panel' showArrow={true} color='secondary' radius="sm">
								<Button color='secondary' className="text-base font-bold" radius='sm' onClick={handleView}>3D Preview</Button>
								</Tooltip>								
								<div style={{display: 'flex'}}>
								<Tooltip content='Back one step' showArrow={true} color='secondary' radius="sm">								
								<Button
									onClick={goToPreviousStep}
									isIconOnly 
									aria-label="Undo" 
									variant='bordered' 
									size='md' 
									radius='sm' 
									className='bg-white border-gray-300 border-solid border-1'
								> 
									<Undo/> 
								</Button>
								</Tooltip>								
								</div>
							</div>
							
						</div>
						<div className={`step-item2-inner5 step-item2-inner10 ${currentStep == 1 || currentStep !== 4 || isLoading || (showTips && currentTip == 8) ? "step inactive" : ""}`}>
							<h2>STEP 4: Select block size</h2>
							<div className='wrapper_edit_buttons'>							
								<div className='buttons-list'>
									<Tooltip content="1” blocks" showArrow={true} color='secondary' radius="sm">
										{/* <button className={blockSize == 1?"active":""} onClick={() => handlerBlockSize(1)}>1”</button> */}
										<Button
										onClick={() => handlerBlockSize(1)}
										color='secondary' 
										radius='sm' 
										isIconOnly
										className='border-gray-300 border-solid border-1 mr-2 text-base font-medium'
										variant={blockSize == 1?"solid":"bordered"}
										>1”</Button>
									</Tooltip>
									<Tooltip radius="sm" showArrow={true} color='secondary' content={(width % 2 !== 0) || (height%2 !==0) ?"Width and height must be 2x multiples ":"2” blocks"}>
										<div>
											{/* <button className={`${blockSize == 2?"active":""} ${(width % 2 !== 0) || (height%2 !==0) ?"inactive":""}`} onClick={() => handlerBlockSize(2)}>2”</button> */}
											<Button
											onClick={() => handlerBlockSize(2)}
											color='secondary' 
											radius='sm' 
											isIconOnly
											className='border-gray-300 border-solid border-1 mr-2 text-base font-medium'
											variant = {blockSize == 2?"solid":"bordered"}
											isDisabled = {(width % 2 !== 0) || (height%2 !==0)}
											>2”</Button>
										</div>
									</Tooltip>									
								</div>
								<Tooltip radius="sm" content='Back one step' showArrow={true} color='secondary'>
								<Button
									onClick={goToPreviousStep}
									isIconOnly 
									aria-label="Undo" 
									variant='bordered' 
									size='md' 
									radius='sm' 
									className='bg-white border-gray-300 border-solid border-1'
								> 
									<Undo/> 
								</Button>
								</Tooltip>							

							</div>
							
						</div>						
						<div className={`step-item2-inner6 ${currentStep !== 4 || isLoading || (showTips && currentTip != 10) ? "step inactive" : ""}`}>
							<h2>STEP 5: Buying Options</h2>
							<BuyPanel
							pixelatedImage = {pixelInfo.pixelatedImage}
							colorsArray = {pixelInfo.colorsArray}
							colorDetails = {pixelInfo.colorDetails}
							blockSize = {blockSize}
							xBlocks = {Math.floor(width / blockSize)}
							yBlocks = {Math.floor(height / blockSize)}
							handleLoading = {setIsLoading}
							productImg = {productImg}
							/>
							
						</div>						
					</div>
					</div>
				</div>
			</div>		
		</div>
  )
}

function resizeAndCompressImage(file, maxWidth, maxHeight, quality, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;

            if (width > height) {
                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            // Compresión de la imagen
            canvas.toBlob(callback, 'image/jpeg', quality);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function downloadResizedImage(blob) {
    // Crear un enlace para la descarga
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "resized-image.png"; // Nombre de archivo predeterminado, puede ajustar según sea necesario
    document.body.appendChild(link); // Agregar el enlace al documento
    link.click(); // Simular click para descargar
    document.body.removeChild(link); // Limpiar y remover el enlace del documento
}

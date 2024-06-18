"use client";
import "@/app/css/bootstrap.min.css";
import "@/app/css/owl.carousel.css";
import "@/app/css/landing2.css";
import "@/app/css/responsive_landing.css";

import { isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';
import  YoutubeEmbed  from '@/app/components/YoutubeEmbed'
import Script from 'next/script';
import FooterPage from "./components/FooterPage";

import {Accordion, AccordionItem} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import faqs from "./components/faqs";

export default function Home() {
    const [is, setIs] = useState(null);

    const initialVisibleCount = 3; // Cantidad inicial de FAQs visibles
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

    const toggleFaqsVisibility = () => {
        if (visibleCount > initialVisibleCount) {
        // Si hay más de 3 FAQs visibles, contrae la lista
        setVisibleCount(initialVisibleCount);
        } else {
        // Si solo hay 3 FAQs visibles, expande la lista para mostrar todas
        setVisibleCount(faqs.length);
        }
    };

    useEffect(() => {
       
        setIs(isMobile);

        if (window.jQuery) {          
         

            $("#owl-csel1").owlCarousel({
                items: 2,
                autoplay: false,
                autoplayTimeout: 3000,
                startPosition: 0,
                rtl: false,
                loop: true,
                margin: 20,
                dots: true,
                nav: true,
                // center:true,
                // stagePadding: 2,
                navText: [
                            '<i class="fa-solid fa-arrow-left-long"></i>',
                            '<i class="fa-solid fa-arrow-right-long"></i>'
                        ],
                navContainer: '.main-content .custom-nav',
                responsive:{
                    0: {
                        items: 1.2,
                        center:true,						
                    },
                    767: {
                        items: 1.9,	
                        center:true,						
                    },
                    1200: {
                        items: 2,						
                    }
                }
    
            });
            
            $("#owl-csel2").owlCarousel({
                items: 2,
                autoplay: true,
                autoplayTimeout: 3000,
                startPosition: 0,
                rtl: false,
                loop: true,
                margin: 10,
                dots: true,
                nav: true,
                // center:true,
                // stagePadding: 2,
                navText: [
                            '<i class="fa-solid fa-arrow-left-long"></i>',
                            '<i class="fa-solid fa-arrow-right-long"></i>'
                        ],
                navContainer: '.main-content2 .custom-nav',
                responsive:{
                    0: {
                        items: 1.3,
                        center:true,						
                    },
                    767: {
                        items: 1.9,	
                        center:true,							
                    },
                    1200: {
                        items: 3,						
                    }
                }
    
            });
       
        }        
       

      }, []);

      const itemClasses = {
        title: "font-semibold text-medium text-inherit text-lg",
      };

    return (    
    <div className="landing-container">
        <Script src="https://kit.fontawesome.com/e7f2043049.js" strategy="lazyOnload" />        
        {/* top section*/}
        <div className="head-wrapper" style={{position: 'relative'}}>
        <video className='video-hero' src='woodxel-resources/video/hero_section_desktop_lq.mp4' autoPlay loop muted playsInline preload="auto"></video>

            {/* <!--  nev area start */}
            <header>
                <nav style={{zIndex: 1, position: 'relative'}}>
                    <div className="logo"><a href="/"><img src="woodxel-resources/images/woodxel-h-3.png" alt=""/></a></div>
                </nav>
                
            </header>
            {/* <!-- hero-area-start */}
            <section className="hero-area">
                <div className="container">
                    <div className="hero-left-wrapper" style={{zIndex: 1, textAlign: 'center', marginBlockStart: 'auto'}}>
                            <div className="hero-left">
                                <h2 className="hidde-m">Transform Your Image Into <br/> A One-of-a-Kind Wooden <br/> Pixel-Art Masterpiece</h2>
                                <h2 className="hidde-b">Transform Your Image <br/> into A One-of-a-Kind<br/> Wooden Pixel-Art <br/>Masterpiece</h2>
                                <p>WoodXEL Empowers Art Collectors, Design Enthusiasts, and Professionals to Transform Images Into Unique, High-End Wooden Art Pieces. Our Cutting-Edge 3D Design Tool and Master Craftsmanship Bring your Digital Visions to Life as Custom Pixel-Art Creations.</p>
                            </div>
                        
                    </div>
                    <div className="hero-btn">
                        <a className={is === null? "inactive": ""} href={is?"mobile":"main"} target="_blank">Start Designing Now</a>
                    </div>
                    <div className="hero-scrool-down" >
                        <a href="#down-sce"><img src="woodxel-resources/images/arrow.png" alt=""/></a>
                    </div>
                </div>
            </section>
        {/* <!-- hero-area-end */}

        </div>

        {/* <!-- From Concept area start */}
        <section className="from-concept-area" id="down-sce">
            <div className="container">
                <div className="from-conc-title">
                    <h2>From Pixels to Masterpiece in 3 Steps</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="form-concept-item">
                            <div className="conts-icon">
                                <img src="woodxel-resources/images/icon1.png" className="img-fluid" alt=""/>
                            </div>
                            <p>Upload your image and customize your design with our user-friendly 3D tool. Adjust size, colors, and materials to create your perfect pixel-art masterpiece.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="form-concept-item">
                            <div className="conts-icon">
                                <img src="woodxel-resources/images/icon2.png" className="img-fluid" alt=""/>
                            </div>
                            <p>Once satisfied with your design, download your free 3D model for previews and presentations. When ready, place your order with a simple click.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="form-concept-item">
                            <div className="conts-icon">
                                <img src="woodxel-resources/images/icon3.png" className="img-fluid" alt=""/>
                            </div>
                            <p>Relax while our expert artisans handcraft your custom wooden art piece. In a few weeks, receive your one-of-a-kind creation, ready to install and enjoy.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* <!-- From Concept area end */}

        {/* <!-- Create Stunning Designs video start  */}
        <section className="design-video-area">
            <div className="container">
                <h2>Witness the WoodXEL Magic</h2>
                {is !== null ? ( // Asegúrate de que 'is' se ha inicializado antes de renderizar
                    is ? 
                    (<YoutubeEmbed embedId="SL1OKCqP3Io" />) : 
                    (<YoutubeEmbed embedId="186uTz0VUQ8" />)
                ) : (
                    <p>Loading...</p> // Puedes personalizar este mensaje o componente para la carga inicial
                )}

             
                <div className="hero-btn" style={{textAlign: 'center'}}>
                    <a className={is === null? "inactive": ""} href={is?"mobile":"main"} target="_blank">Start Designing Now</a>
                </div>
            </div>
        </section>
        {/* <!-- Create Stunning Designs video end */}

        {/* <!-- Designers Choose WoodXEL area start */}
        <section className="from-concept-area">
            <div className="container">
                <div className="from-conc-title">
                    <h2>Why Art Collectors and Design Professionals Choose WoodXEL</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="form-concept-item">
                            <div className="conts-icon">
                                <img src="woodxel-resources/images/icon5.png" className="img-fluid" alt=""/>
                            </div>
                            <p>Intuitive 3D design tool for unlimited customization</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="form-concept-item">
                            <div className="conts-icon">
                                <img src="woodxel-resources/images/icon6.png" className="img-fluid" alt=""/>
                            </div>
                            <p>Free 3D model for easy visualization and presentations</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="form-concept-item">
                            <div className="conts-icon">
                                <img src="woodxel-resources/images/icon7.png" className="img-fluid" alt=""/>
                            </div>
                            <p>Highest quality materials and expert craftsmanship</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="form-concept-item">
                            <div className="conts-icon">
                                <img src="woodxel-resources/images/icon8.png" className="img-fluid" alt=""/>
                            </div>
                            <p>Seamless process from design to installation</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Designers Choose WoodXEL area end */}

        {/* <!-- Testimonials start  */}
        <section className="testimonials-area  overflow-hidden">
            <div className="container">
                <div className="ts-title">
                    <h2>Testimonials</h2>
                </div>
            </div>
            <div className="ts-inner">
                <div className="main-content">
                    <div id="owl-csel1" className="owl-carousel owl-theme">
                        <div>
                            <div className="ts-carousel-item">
                                <p>&quot;I chose WoodXEL for my client&apos;s feature wall because of the unique pixel-art style. The customization process was simple and the final product added a real wow factor to the space.&quot;</p>
                                <ul>                                   
                                    <li>
                                        <h3>Emily S.</h3>
                                        <span>Interior Designer</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="ts-carousel-item">
                                <p>&quot;WoodXEL&apos;s 3D modeling tool was a game-changer for my design presentations. Being able to show clients a realistic preview of the final product made the decision process so much smoother.&quot;</p>
                                <ul>                                    
                                    <li>
                                        <h3>David T.</h3>
                                        <span>Architect</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="ts-carousel-item">
                                <p>&quot;The quality of WoodXEL&apos;s wooden panels is impressive. The precision of the pixel-art design and the richness of the wood grain really elevate the finished piece.&quot;</p>
                                <ul>                                    
                                    <li>
                                        <h3>Rachel M.</h3>
                                        <span>Designer</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="ts-carousel-item">
                                <p>&quot;I love that WoodXEL lets me create truly one-of-a-kind pieces for my clients. The ability to turn any image into a custom wooden panel opens up so many creative possibilities.&quot;</p>
                                <ul>                                    
                                    <li>
                                        <h3>Andrew K.</h3>
                                        <span>Interior Designer</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="owl-theme">
                        <div className="owl-controls">
                            <div className="custom-nav owl-nav"></div>
                        </div>
                    </div>
                </div>
                <div className="ts-btn">
                    <a className={is === null? "inactive": ""} href={is?"mobile":"main"} target="_blank">Unlock Your Creativity</a>
                </div>
            </div>
        </section>
        {/* <!-- Testimonials end */}

        {/* <!-- Why WoodXEL start  */}
        <section className="testimonials-area why-woodxel-area  overflow-hidden">
            <div className="container">
                <div className="ts-title">
                    <h2>Why WoodXEL</h2>
                    <p>At WoodXEL, we&apos;re passionate about enabling artists, designers, and art lovers to transform digital images into extraordinary physical art pieces. Our state-of-the-art platform combines innovative technology with traditional craftsmanship, making it easy for anyone to create stunning, one-of-a-kind wooden pixel-art sculptures. With free, high-quality 3D models for every creation, WoodXEL streamlines your artistic journey from concept to masterpiece. Join our community of art enthusiasts and discover the joy of personalizing your space with custom wooden art.</p>
                </div>
            </div>
            <div className="ts-inner">
                <div className="main-content2">
                    <div id="owl-csel2" className="owl-carousel owl-theme">
                        <div>
                            <div className="Wood-carousel-item">
                                <img src="woodxel-resources/images/img1.jpg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className="Wood-carousel-item">
                                <img src="woodxel-resources/images/img2.jpg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className="Wood-carousel-item">
                                <img src="woodxel-resources/images/img3.jpg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className="Wood-carousel-item">
                                <img src="woodxel-resources/images/img4.jpg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className="Wood-carousel-item">
                                <img src="woodxel-resources/images/img5.jpg" className="img-fluid" alt=""/>
                            </div>
                        </div>

                        
                    </div>
                    <div className="owl-theme">
                        <div className="owl-controls">
                            <div className="custom-nav owl-nav"></div>
                        </div>
                    </div>
                </div>
                <div className="ts-btn">
                    <a className={is === null? "inactive": ""} href={is?"mobile":"main"} target="_blank">Start Designing Now</a>
                </div>                
            </div>
        </section>
        {/* <!-- Why WoodXEL end */}

        {/* <!-- FAQs area start  */}
        <section className="faq-area">
            <div className="container">
                <div className="faqs-title">
                <h2>FAQs</h2>
                </div>
                <Accordion 
                    itemClasses={itemClasses}
                    isCompact={true}
                >
                {faqs.slice(0, visibleCount).map((faq) => (
                    <AccordionItem key={faq.key} title={faq.title}>
                    <div dangerouslySetInnerHTML={{ __html: faq.content }}></div>
                    </AccordionItem>
                ))}
                </Accordion>
                <div style={{ textAlign: 'center', marginTop: '64px' }}>
                <Button radius="sm" auto onClick={toggleFaqsVisibility}>
                    {visibleCount > initialVisibleCount ? 'See Less' : 'See More'}
                </Button>
                </div>
            </div>
            </section>
        {/* <!-- FAQs area end */}

        {/* <!-- footer area start  */}
        <FooterPage/>
        
    </div>
    )
}

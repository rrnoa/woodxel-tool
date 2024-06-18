"use client";
import HeadPage from '@/app/components/HeadPage';
import React from 'react'
import "@/app/css/landing2.css";
import "@/app/css/responsive_landing.css";
import "@/app/css/bootstrap.min.css";
import FooterPage from '@/app/components/FooterPage';

export default function About() {
    return (
        <div className='simple-page-policy'>
            <HeadPage title={"About Woodxel"}/>

            <section className='container' style={{textAlign: 'justify'}}>
            <p>WoodXEL is the latest innovation from Lignum Custom Woodwork, a renowned leader in custom woodworking with over 15 years of experience serving high-end clients such as Hilton, Marriott, and Ritz Carlton. With WoodXEL, we bring our passion for craftsmanship and expertise in woodworking to the world of personalized art, offering a unique platform that transforms your cherished images into breathtaking wooden masterpieces.</p>
            <p>At WoodXEL, we merge cutting-edge technology with the tradition and skill of our master artisans to create pixel art wood panels that are truly one-of-a-kind. Our intuitive design tool allows you to easily customize your artwork while our craftsmen meticulously handcraft each piece using premium hardwoods and eco-friendly finishes.</p>
            <p>As a proud Lignum Custom Woodwork family member, WoodXEL is backed by a company with a proven track record of delivering exceptional quality and customer satisfaction. Lignum&apos;s dedication to precision, attention to detail, and superior service is infused into every WoodXEL project.</p>
            <p>Choose from two distinct options for your WoodXEL art piece:</p>
            <ul>
                <li style={{marginBottom: '10px'}}>1. Unframed Panels: Our unframed pixel art panels, ranging from 24x24 inches to 200x200 inches, offer a contemporary, minimalist aesthetic. These large-scale artworks are composed of multiple wooden panels that seamlessly unite to create your final image. With complimentary shipping within the United States and easy installation, our unframed panels are perfect for any space.</li>
                <li>2. Framed Panels: Elevate your pixel art with our framed WoodXEL panels, available in sizes from 24x24 inches up to 48x60 inches, and various elegant finishes. Our expert artisans meticulously handcrafted each frame to showcase your unique artwork perfectly. Enjoy free shipping on all orders. Please note that the framing price covers fabrication, packing, and shipping of the framed piece.</li>
            </ul>

            <p>At WoodXEL, we are committed to helping you transform your space and express your unique style through the power of personalized art. With the support of Lignum Custom Woodwork&apos;s legacy of excellence and craftsmanship, you can trust that your WoodXEL piece will be an artwork you&apos;ll cherish forever.</p>
            <p>Discover the artistry of WoodXEL and embark on your creative journey today.</p>

            </section>

            <FooterPage/>
        </div>
        )
}
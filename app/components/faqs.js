const faqs = [
    {
      key: "1",
      title: "What is WoodXEL, and how does it work?",
      content: "WoodXEL is an innovative platform that transforms your digital images into stunning, one-of-a-kind wooden pixel art pieces. Simply upload your image, customize your design using our user-friendly 3D tool, and order your custom art piece. Our skilled artisans will then handcraft your design using premium hardwoods, creating a unique masterpiece ready to install and enjoy.",
    },
    {
      key: "2",
      title: "What types of images can I use to create my WoodXEL art piece?",
      content: "You can use almost any digital image to create your WoodXEL art piece, including photographs, digital artwork, logos, and more. For best results, we recommend using high-resolution images with clear details and contrasting colors. If you're unsure about the suitability of your image, feel free to reach out to our support team for assistance.",
    },
    {
      key: "3",
      title: "How do I upload and customize my image with the WoodXEL 3D tool?",
      content: "Uploading and customizing your image with the WoodXEL 3D tool is easy. First, click the \"Upload Image\" button and select your desired image file. Once your image is uploaded, you can use the tool's intuitive controls to adjust the size, colors, materials, and other settings until you've created your perfect pixel-art masterpiece. Our 3D tool provides a real-time preview of your art piece, so you can see exactly how it will look before placing your order.",
    },
    {
      key: "4",
      title: "Is the 3D model really free? Are there any hidden costs?",
      content: "Yes, the 3D model is completely free! Once you've finalized your design using our 3D tool, you can download the 3D model at no cost. There are no hidden fees or obligations associated with downloading the model. You can use the 3D model for previews, presentations, or simply to admire your creation before ordering the physical art piece.",
    },
    {
      key: "5",
      title: "What file format is available for the 3D model download?",
      content: "The 3D model download is available in the GLTF (GL Transmission Format) file format. GLTF is a widely supported 3D file format that is compatible with many 3D viewing and editing applications. This format allows you to easily share, preview, and manipulate your 3D model across various platforms and devices.",
    },
    {
      key: "6",
      title: "Can I use the 3D model for commercial purposes or client presentations?",
      content: "Yes, you are free to use the downloaded 3D model for commercial purposes, including client presentations, portfolio showcases, and marketing materials. However, please note that the 3D model represents the design of your custom WoodXEL art piece and should not be used to create unauthorized reproductions or derivative works.",
    },
    {
      key: "7",
      title: "What sizes are available for the physical WoodXEL art pieces?",
      content: "WoodXEL offers two sizing options for your custom art pieces: <br/>a. Framed pieces: Our framed art pieces range from 24x24 inches (60x60 cm) up to approximately 48x60 inches (120x150 cm). If you choose a framed piece, you'll be responsible for the framing cost and shipping fees. <br/>b. Unframed panels: For larger or more budget-friendly options, we offer unframed art pieces that come in multiple panels for self-installation. With this option, shipping is complimentary within the United States.",
    },
    {
        key: "8",
        title: "What materials are used to create the WoodXEL art pieces?",
        content: "WoodXEL art pieces are crafted using premium hardwoods, including maple, pine, and poplar. We select only the finest wood materials to ensure the durability, stability, and aesthetic appeal of your custom art piece. The wood pixels are carefully arranged and finished with non-toxic, acrylic water-based colors to bring your design to life.",
      },
      {
        key: "9",
        title: "How long does it take to produce and ship my WoodXEL art piece?",
        content: "WoodXEL offers two sizing options for your custom art pieces: <br/>a. Framed pieces: Our framed art pieces range from 24x24 inches (60x60 cm) up to approximately 48x60 inches (120x150 cm). If you choose a framed piece, you'll be responsible for the framing cost and shipping fees. <br/>b. Unframed panels: For larger or more budget-friendly options, we offer unframed art pieces that come in multiple panels for self-installation. With this option, shipping is complimentary within the United States.",
      },
      {
        key: "10",
        title: "Do you offer framing options for the WoodXEL art pieces?",
        content: "Yes, we offer optional framing services for your WoodXEL art pieces up to approximately 48x60 inches (120x150 cm). Our standard framing options include sleek, modern 1-inch or 2-inch frames in black, white, or natural maple finishes. These frames are designed to complement the pixel-art style of your piece and provide a polished, gallery-ready look. Please note that framing costs and shipping fees are the responsibility of the customer. If you prefer a more budget-friendly option or have a larger project in mind, consider our unframed panel option, which comes with free shipping within the United States.",
      },
      {
        key: "11",
        title: "What is the return or refund policy for WoodXEL art pieces?",
        content: "Due to the custom nature of each WoodXEL art piece, we do not offer returns or refunds once the production process has begun. However, if you receive a damaged or defective product, please contact our support team within 7 days of delivery, and we will work with you to resolve the issue and ensure your satisfaction. We take pride in the quality of our products and strive to deliver exceptional customer service.",
      },
      {
        key: "12",
        title: "How do I care for and maintain my WoodXEL art piece?",
        content: "Caring for your WoodXEL art piece is simple. Dust your artwork regularly with a soft, dry cloth to keep it clean and free of debris. Avoid exposing your art piece to direct sunlight, extreme temperatures, or high humidity, as these conditions may cause the wood to warp or discolor over time. If necessary, you can gently clean the surface with a slightly damp cloth, but be sure to dry it immediately to prevent moisture damage.",
      },
      {
        key: "13",
        title: "Can I order a custom size or shape for my WoodXEL art piece?",
        content: "Yes, we welcome custom size and shape requests for WoodXEL art pieces. Our team of skilled artisans can create artwork to fit your specific space and design requirements. To discuss your custom project, please contact our support team with your desired dimensions, shape, and any other relevant details, and we'll provide you with a personalized quote and timeline.",
      },
      {
        key: "14",
        title: "Do you ship internationally, and how much does it cost?",
        content: "Currently, WoodXEL ships only within the United States, and shipping costs vary depending on the size and framing option you choose:<br/>a. Framed pieces: Shipping fees for framed art pieces are the responsibility of the customer and will be calculated based on the size and destination of your order.<br/>b. Unframed panels: Shipping for unframed panel orders is complimentary within the United States.<br/> We are working on expanding our shipping capabilities to include international destinations in the future. If you are located outside the United States and interested in purchasing a WoodXEL art piece, please contact our support team, and we'll do our best to accommodate your request or provide alternative options.",
      },
      {
        key: "15",
        title: "Is there a minimum or maximum size for WoodXEL art pieces?",
        content: "The minimum size for a WoodXEL art piece is 24x24 inches (60x60 cm). This size ensures that the pixel-art design remains visually appealing and the wood pixels are large enough to showcase the intricate details of your image. While we don't have a set maximum size, we recommend keeping the dimensions under 48x48 inches (120x120 cm) for optimal production and shipping. However, if you have a larger project in mind, please contact our support team to discuss your options.",
      },
      {
        key: "16",
        title: "Can I create a WoodXEL art piece from multiple images?",
        content: "Yes, you can create a WoodXEL art piece using multiple images. Our 3D design tool allows you to upload and arrange several images to form a single, cohesive design. This is a great option for creating collages, triptychs, or storytelling sequences. Keep in mind that the overall resolution and visual impact of your art piece will depend on the quality and composition of the individual images you use.",
      },
      {
        key: "17",
        title: "How do I install my WoodXEL art piece once I receive it?",
        content: "The installation process for your WoodXEL art piece depends on the option you choose:<br/>a. Framed pieces: Your framed artwork will arrive ready to hang, with pre-installed hanging hardware and clear instructions for mounting it securely on your wall.<br/>b. Unframed panels: For unframed panel orders, you'll receive your art piece in multiple packages, along with a template and guide to help you arrange and install the panels seamlessly. This option allows for a more customizable and budget-friendly installation.<br/> If you have any questions or concerns about the installation process, our support team is always ready to assist you.",
      },
      {
        key: "18",
        title: "What is the resolution or DPI of the WoodXEL art pieces?",
        content: "The resolution or DPI (dots per inch) of your WoodXEL art piece will depend on the size of the wooden pixels you choose. Our standard pixel sizes are 1 inch (2.54 cm) and 2 inches (5.08 cm). A 1-inch pixel size will result in a higher resolution and more detailed image, while a 2-inch pixel size will create a more abstract, pixelated effect. When designing your art piece, keep in mind that larger pixel sizes may be more suitable for larger overall dimensions, while smaller pixel sizes work well for smaller pieces or highly detailed images.",
      },
      {
        key: "19",
        title: "Can I request a specific wood type or finish for my WoodXEL art piece?",
        content: "At this time, we do not offer the option to request specific wood types or finishes for your WoodXEL art piece. Our standard materials include premium hardwoods like maple, pine, and poplar, which are carefully selected for their durability, stability, and visual appeal. We use a non-toxic, acrylic water-based color finish to ensure the longevity and vibrancy of your artwork. If you have a specific wood type or finish in mind for your project, please contact our support team, and we'll do our best to accommodate your request or suggest alternative options.",
      },
      {
        key: "20",
        title: "How can I contact WoodXEL if I have additional questions or concerns?",
        content: "If you have any questions, concerns, or feedback, we'd love to hear from you! You can reach our friendly support team through the following channels:<br/>- Email: support@woodxel.com<br/>- Phone: 1-800-123-4567 (Monday-Friday, 9 AM - 5 PM EST)<br/>- Live Chat: Visit our website at www.woodxel.com and click on the \"Chat with us\" button to connect with a support representative in real-time.<br/> We strive to provide prompt, helpful, and professional assistance to ensure your WoodXEL experience is exceptional from start to finish.",
      }    
  ];
  
  export default faqs;
  
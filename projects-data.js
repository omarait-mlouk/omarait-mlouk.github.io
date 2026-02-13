const projectsData = {
    projects: [
        {
            id: "deblurgan-v2",
            icon: "🔬",
            title: "DeblurGAN-v2 Image Restoration Platform",
            shortDescription: "Advanced image deblurring with real-time processing",
            description: "Implemented state-of-the-art motion deblurring using DeblurGAN-v2 architecture with Feature Pyramid Networks. The web platform processes images in real-time, achieving significant improvements in image quality metrics.",
            year: "2024",
            category: "AI & Machine Learning",
            tech: ["PyTorch", "Flask", "OpenCV", "Docker"],
            links: [
                { label: "GitHub", url: "https://github.com/omarait-mlouk/deblurgan-v2" },
                { label: "Live Demo", url: "https://deblurgan-demo.herokuapp.com" }
            ],
            featured: true,
            showOnHome: true
        },
        {
            id: "tourism-booking",
            icon: "🏖️",
            title: "Morocco Tourism Booking Platform",
            shortDescription: "Complete Odoo-based tourism platform",
            description: "Developed a comprehensive tourism booking system using Odoo ERP. Features include multi-language support, real-time availability, payment integration, and an admin dashboard for tour operators.",
            year: "2024",
            category: "Web Development",
            tech: ["Odoo 18", "Python", "PostgreSQL", "XML/QWeb"],
            links: [
                { label: "Case Study", url: "#" },
                { label: "View Demo", url: "#" }
            ],
            featured: true,
            showOnHome: true
        },
        {
            id: "tifinagh-ocr",
            icon: "🔤",
            title: "Tifinagh Character Recognition",
            shortDescription: "Character recognition for Amazigh script",
            description: "Built a CNN-based OCR system for recognizing Amazigh script characters, achieving 96% accuracy on handwritten samples.",
            year: "2023",
            category: "AI & Machine Learning",
            tech: ["TensorFlow", "Keras", "NumPy"],
            links: [
                { label: "GitHub", url: "#" },
                { label: "Paper", url: "#" }
            ],
            featured: false,
            showOnHome: true
        },
        {
            id: "neural-style-transfer",
            icon: "🎨",
            title: "Neural Style Transfer",
            shortDescription: "Artistic style transfer using CNNs",
            description: "Implemented artistic style transfer using VGG19 and optimization techniques for real-time style application.",
            year: "2023",
            category: "AI & Machine Learning",
            tech: ["PyTorch", "Streamlit", "PIL"],
            links: [
                { label: "GitHub", url: "#" },
                { label: "Demo", url: "#" }
            ],
            featured: false,
            showOnHome: true
        },
        {
            id: "covid-xray",
            icon: "🫁",
            title: "COVID-19 X-Ray Classifier",
            shortDescription: "Deep learning for medical imaging",
            description: "Developed a deep learning model for detecting COVID-19 from chest X-rays with 94% accuracy using transfer learning.",
            year: "2022",
            category: "AI & Machine Learning",
            tech: ["TensorFlow", "ResNet50", "Flask"],
            links: [
                { label: "GitHub", url: "#" },
                { label: "Article", url: "#" }
            ],
            featured: false,
            showOnHome: true
        },
        {
            id: "face-mask-detection",
            icon: "😷",
            title: "Face Mask Detection",
            shortDescription: "Real-time detection with MobileNet",
            description: "Real-time face mask detection system using MobileNetV2 for deployment on edge devices.",
            year: "2022",
            category: "AI & Machine Learning",
            tech: ["OpenCV", "MobileNet", "TF Lite"],
            links: [
                { label: "GitHub", url: "#" },
                { label: "Video", url: "#" }
            ],
            featured: false,
            showOnHome: true
        },
        {
            id: "unet-segmentation",
            icon: "🧠",
            title: "U-Net Tumor Segmentation",
            shortDescription: "Medical image segmentation with U-Net",
            description: "Implemented U-Net architecture for breast ultrasound tumor segmentation, achieving 49.96% IoU score.",
            year: "2023",
            category: "AI & Machine Learning",
            tech: ["PyTorch", "U-Net", "SimpleITK"],
            links: [
                { label: "GitHub", url: "#" },
                { label: "Report", url: "#" }
            ],
            featured: false,
            showOnHome: false
        },
        {
            id: "autoencoder-study",
            icon: "📊",
            title: "Autoencoder Comparison Study",
            shortDescription: "Autoencoder architectures comparison",
            description: "Comprehensive comparison of autoencoder architectures on Fashion-MNIST for dimensionality reduction.",
            year: "2023",
            category: "AI & Machine Learning",
            tech: ["TensorFlow", "Scikit-learn", "Matplotlib"],
            links: [
                { label: "GitHub", url: "#" },
                { label: "Notebook", url: "#" }
            ],
            featured: false,
            showOnHome: false
        },
        {
            id: "children-book-generator",
            icon: "📚",
            title: "AI Children's Book Generator",
            shortDescription: "AI-powered personalized story generation",
            description: "Platform for generating personalized children's stories using OpenAI's GPT and DALL-E APIs.",
            year: "2023",
            category: "Web Development",
            tech: ["React", "Node.js", "OpenAI API"],
            links: [
                { label: "GitHub", url: "#" },
                { label: "Live Site", url: "#" }
            ],
            featured: false,
            showOnHome: false
        },
        {
            id: "morocco-dashboard",
            icon: "📈",
            title: "Morocco Regional Dashboard",
            shortDescription: "Interactive regional statistics dashboard",
            description: "Interactive data visualization dashboard for Morocco's regional statistics using D3.js.",
            year: "2023",
            category: "Web Development",
            tech: ["D3.js", "JavaScript", "TopoJSON"],
            links: [
                { label: "GitHub", url: "#" },
                { label: "Demo", url: "#" }
            ],
            featured: false,
            showOnHome: false
        },
        {
            id: "transportation-booking",
            icon: "🚗",
            title: "Transportation Booking System",
            shortDescription: "Odoo transportation management module",
            description: "Odoo module for managing transportation routes with interactive maps and real-time booking.",
            year: "2024",
            category: "Web Development",
            tech: ["Odoo", "Leaflet.js", "PostgreSQL"],
            links: [
                { label: "GitHub", url: "#" },
                { label: "Documentation", url: "#" }
            ],
            featured: false,
            showOnHome: false
        }
    ],
    contributions: [
        {
            id: "tensorflow-models",
            title: "TensorFlow Models",
            badge: "15 commits",
            description: "Contributed to the official TensorFlow models repository with improvements to image segmentation models."
        },
        {
            id: "odoo-community",
            title: "Odoo Community",
            badge: "8 modules",
            description: "Developed and maintained several community modules for Odoo 16-18, focusing on tourism and booking systems."
        },
        {
            id: "scikit-learn",
            title: "Scikit-learn",
            badge: "3 PRs merged",
            description: "Documentation improvements and bug fixes for preprocessing modules."
        }
    ]
};

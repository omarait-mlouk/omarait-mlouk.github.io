const projectsData = {
    projects: [
        {
            id: "atlas-retail-dw",
            icon: "📊",
            title: "AtlasRetail Data Warehouse & BI Platform",
            shortDescription: "End-to-end data warehouse with ETL, OLAP analytics, a dashboard and sales forecasting",
            description: "An end-to-end data warehouse and BI platform: a Python ETL pipeline feeds a dimensional warehouse, OLAP queries power the analytics, a Streamlit dashboard presents the results, and an ML model forecasts retail sales.",
            year: "2026",
            category: "Data Engineering",
            tech: ["Python", "SQL", "Streamlit", "Machine Learning"],
            links: [
                { label: "GitHub", url: "https://github.com/omarait-mlouk/atlas-retail-dw" }
            ],
            featured: true,
            showOnHome: true
        },
        {
            id: "deblurgan-v2",
            icon: "🔬",
            title: "DeblurGAN-v2 Image Restoration",
            shortDescription: "Motion deblurring with DeblurGAN-v2, wrapped in a Flask web app",
            description: "A web application around a DeblurGAN-v2 model for motion deblurring. Upload a blurry image by drag and drop, process it on CPU or GPU, compare before and after side by side, and download the result.",
            year: "2025",
            category: "Computer Vision",
            tech: ["PyTorch", "Flask", "GANs"],
            links: [
                { label: "GitHub", url: "https://github.com/omarait-mlouk/deblurGAN" }
            ],
            featured: true,
            showOnHome: true
        },
        {
            id: "tifinagh-recognition",
            icon: "ⵣ",
            title: "Tifinagh Character Recognition",
            shortDescription: "Classifying Amazigh (Tifinagh) characters, from an MLP to LeNet-5",
            description: "A series of models for recognizing Tifinagh characters, the script used to write Amazigh: a multilayer perceptron, a multiclass network on RGB images, and a LeNet-5 convolutional network.",
            year: "2025",
            category: "Computer Vision",
            tech: ["Python", "Neural Networks", "CNN", "Jupyter"],
            links: [
                { label: "LeNet-5", url: "https://github.com/omarait-mlouk/lenet5-tifinagh" },
                { label: "MLP", url: "https://github.com/omarait-mlouk/tifinagh-classification" },
                { label: "RGB model", url: "https://github.com/omarait-mlouk/rgb-classification-tifinagh" }
            ],
            featured: false,
            showOnHome: true
        },
        {
            id: "image-segmentation",
            icon: "🧩",
            title: "Image Segmentation",
            shortDescription: "Deep learning models for pixel-level image segmentation",
            description: "Notebook implementations of image segmentation with deep learning, the companion code to my article on the topic.",
            year: "2025",
            category: "Computer Vision",
            tech: ["Python", "Deep Learning", "Jupyter"],
            links: [
                { label: "GitHub", url: "https://github.com/omarait-mlouk/image-segmentation" },
                { label: "Article", url: "https://omaraitmlouk.medium.com/image-segmentation-explained-the-key-to-pixel-level-understanding-in-computer-vision-d8b1968670b4" }
            ],
            featured: false,
            showOnHome: true
        },
        {
            id: "transfer-learning",
            icon: "🔁",
            title: "Transfer Learning",
            shortDescription: "Reusing pretrained networks for new image tasks",
            description: "Experiments with transfer learning: adapting pretrained convolutional networks to new image classification tasks.",
            year: "2025",
            category: "Computer Vision",
            tech: ["Python", "Deep Learning", "Jupyter"],
            links: [
                { label: "GitHub", url: "https://github.com/omarait-mlouk/transfer-learning" }
            ],
            featured: false,
            showOnHome: false
        },
        {
            id: "cnn-implementation",
            icon: "🧠",
            title: "CNN Implementation",
            shortDescription: "Building convolutional neural networks step by step",
            description: "Convolutional neural networks implemented step by step, alongside experiments with convolution filters on images.",
            year: "2025",
            category: "Computer Vision",
            tech: ["Python", "CNN", "Jupyter"],
            links: [
                { label: "GitHub", url: "https://github.com/omarait-mlouk/CNN-implementation" },
                { label: "Filters", url: "https://github.com/omarait-mlouk/Convolution-Filters-on-Images" }
            ],
            featured: false,
            showOnHome: false
        },
        {
            id: "binary-classification-mlp",
            icon: "🩺",
            title: "Binary Classification with an MLP",
            shortDescription: "Diabetes prediction on the Pima Indians dataset",
            description: "A multilayer perceptron for binary classification on the Pima Indians Diabetes dataset.",
            year: "2025",
            category: "Machine Learning",
            tech: ["Python", "Neural Networks", "Jupyter"],
            links: [
                { label: "GitHub", url: "https://github.com/omarait-mlouk/Binary-Classification-MLP" }
            ],
            featured: false,
            showOnHome: false
        },
        {
            id: "odoo-kickoff",
            icon: "🧱",
            title: "Odoo Kickoff",
            shortDescription: "A starting point for building custom Odoo modules",
            description: "A starter template for new Odoo modules, with setup notes for PostgreSQL and common installation issues.",
            year: "2023",
            category: "Software Development",
            tech: ["Odoo", "Python", "PostgreSQL"],
            links: [
                { label: "GitHub", url: "https://github.com/omarait-mlouk/odoo-kickoff" }
            ],
            featured: false,
            showOnHome: false
        },
        {
            id: "currency-exchange",
            icon: "💱",
            title: "Currency Exchange",
            shortDescription: "Command-line currency converter with live rates",
            description: "A Python command-line tool that converts between currencies using live exchange rates from the Fixer API.",
            year: "2023",
            category: "Software Development",
            tech: ["Python", "REST APIs"],
            links: [
                { label: "GitHub", url: "https://github.com/omarait-mlouk/currency-exchange" }
            ],
            featured: false,
            showOnHome: false
        }
    ],
    contributions: []
};

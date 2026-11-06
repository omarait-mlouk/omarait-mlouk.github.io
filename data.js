// All site content lives here. Edit this file to update the portfolio.

const site = {
    email: "omaraitmlouk.per@gmail.com",
    cv: "resume.pdf",
    links: [
        { label: "GitHub", url: "https://github.com/omarait-mlouk" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/aitmloukomar" },
        { label: "Medium", url: "https://omaraitmlouk.medium.com" },
        { label: "Instagram", url: "https://www.instagram.com/aitmloukomar/" }
    ]
};

// Featured projects get a large card; the rest show in the compact list.
const projects = [
    {
        title: "Federated RAG for Healthcare",
        subtitle: "Master's thesis · in progress",
        description: "A privacy-preserving clinical decision support system. Federated learning lets medical institutions train together while patient data stays on site, and retrieval-augmented generation grounds the answers in each institution's own knowledge.",
        year: "2026",
        tags: ["Federated Learning", "RAG", "PyTorch", "LangChain", "FAISS", "Flower"],
        links: [{ label: "Background article", url: "https://omaraitmlouk.medium.com/federated-learning-the-architecture-of-privacy-preserving-ai-4e9ae0967e43" }],
        featured: true,
        pattern: "federated"
    },
    {
        title: "AtlasRetail",
        subtitle: "Data warehouse & BI platform",
        description: "An end-to-end data platform: a Python ETL pipeline feeds a dimensional warehouse, OLAP queries drive the analytics, a Streamlit dashboard presents them, and an ML model forecasts retail sales.",
        year: "2026",
        tags: ["Python", "SQL", "Streamlit", "Forecasting"],
        links: [{ label: "Code", url: "https://github.com/omarait-mlouk/atlas-retail-dw" }],
        featured: true,
        pattern: "grid"
    },
    {
        title: "DeblurGAN-v2",
        subtitle: "Image restoration web app",
        description: "Motion deblurring with a DeblurGAN-v2 model behind a Flask web app. Drop in a blurry photo, run it on CPU or GPU, compare before and after, and download the result.",
        year: "2025",
        tags: ["PyTorch", "GANs", "Flask"],
        links: [{ label: "Code", url: "https://github.com/omarait-mlouk/deblurGAN" }],
        featured: true,
        pattern: "blur"
    },
    {
        title: "Tifinagh Recognition",
        subtitle: "Classifying the Amazigh script",
        description: "A progression of models for recognizing Tifinagh characters, the script used to write Amazigh: a multilayer perceptron, a multiclass network on RGB images, and a LeNet-5 CNN.",
        year: "2025",
        tags: ["CNN", "LeNet-5", "MLP"],
        links: [
            { label: "LeNet-5", url: "https://github.com/omarait-mlouk/lenet5-tifinagh" },
            { label: "MLP", url: "https://github.com/omarait-mlouk/tifinagh-classification" },
            { label: "RGB", url: "https://github.com/omarait-mlouk/rgb-classification-tifinagh" }
        ],
        featured: true,
        pattern: "glyph"
    },
    {
        title: "Image Segmentation",
        description: "Deep learning models for pixel-level segmentation, the companion code to my article.",
        year: "2025",
        tags: ["Deep Learning"],
        links: [{ label: "Code", url: "https://github.com/omarait-mlouk/image-segmentation" }]
    },
    {
        title: "Transfer Learning",
        description: "Adapting pretrained convolutional networks to new image classification tasks.",
        year: "2025",
        tags: ["Deep Learning"],
        links: [{ label: "Code", url: "https://github.com/omarait-mlouk/transfer-learning" }]
    },
    {
        title: "CNN from Scratch",
        description: "Convolutional networks built step by step, plus experiments with convolution filters.",
        year: "2025",
        tags: ["CNN"],
        links: [{ label: "Code", url: "https://github.com/omarait-mlouk/CNN-implementation" }]
    },
    {
        title: "Diabetes MLP",
        description: "Binary classification with a multilayer perceptron on the Pima Indians Diabetes dataset.",
        year: "2025",
        tags: ["Neural Networks"],
        links: [{ label: "Code", url: "https://github.com/omarait-mlouk/Binary-Classification-MLP" }]
    },
    {
        title: "Odoo Kickoff",
        description: "A starter template for building custom Odoo modules.",
        year: "2023",
        tags: ["Odoo", "Python"],
        links: [{ label: "Code", url: "https://github.com/omarait-mlouk/odoo-kickoff" }]
    },
    {
        title: "Currency Exchange",
        description: "A command-line converter using live rates from the Fixer API.",
        year: "2023",
        tags: ["Python"],
        links: [{ label: "Code", url: "https://github.com/omarait-mlouk/currency-exchange" }]
    }
];

const articles = [
    {
        title: "Federated Learning: The Architecture of Privacy-Preserving AI",
        excerpt: "How hospitals can train a shared model without ever sharing patient data.",
        date: "Mar 2026",
        readTime: "8 min",
        url: "https://omaraitmlouk.medium.com/federated-learning-the-architecture-of-privacy-preserving-ai-4e9ae0967e43"
    },
    {
        title: "Image Segmentation Explained",
        excerpt: "The types of segmentation and the deep learning models behind pixel-level understanding.",
        date: "Feb 2026",
        readTime: "3 min",
        url: "https://omaraitmlouk.medium.com/image-segmentation-explained-the-key-to-pixel-level-understanding-in-computer-vision-d8b1968670b4"
    },
    {
        title: "Multitier Architecture Explained",
        excerpt: "A ground-up guide to n-tier design and how it applies to ERP platforms like Odoo.",
        date: "Feb 2026",
        readTime: "6 min",
        url: "https://omaraitmlouk.medium.com/multitier-architecture-explained-complete-beginner-guide-ad282465b644"
    }
];

const experience = [
    { when: "2024 — now", role: "AI Engineer", where: "AinnovateX · Part-time · Marrakech" },
    { when: "2023 — 2024", role: "Python Developer, Odoo", where: "Flyer.be / Batteria · Casablanca" },
    { when: "2021 — 2023", role: "Software Engineer", where: "AinnovateX" },
    { when: "2019", role: "Full-Stack Developer Intern", where: "Province Administration · Ouarzazate" }
];

const education = [
    { when: "2024 — 2026", role: "Master's, Artificial Intelligence & Applications", where: "Université Ibn Zohr" },
    { when: "2022 — 2023", role: "Licence, Computer Science", where: "Private University of Marrakech" },
    { when: "2018 — 2020", role: "DUT, Computer Science", where: "EST Meknes" }
];

const stack = [
    "PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "Hugging Face",
    "Python", "FastAPI", "Flask", "Odoo", "PostgreSQL",
    "React", "TypeScript", "Docker", "Streamlit", "SQL", "Git"
];

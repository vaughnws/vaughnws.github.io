# VWS Portfolio & Shop

A multi-purpose website package featuring a personal portfolio, e-commerce shop, and a specialized thyroid nodule classifier tool.

## 📑 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Site Structure](#site-structure)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Components](#components)
  - [Portfolio](#portfolio)
  - [Shop](#shop)
  - [Thyroid Nodule Classifier](#thyroid-nodule-classifier)
- [Styling](#styling)
- [Future Goals](#future-goals)
- [Contributing](#contributing)
- [License](#license)

## 🔍 Overview

This website package serves as both a personal portfolio and a functional e-commerce platform. The centerpiece of the portfolio is a machine learning application that classifies thyroid nodules as benign or malignant using TensorFlow.js, demonstrating both web development skills and practical applications of AI in healthcare.

## ✨ Features

- **Responsive Design**: Adapts to various screen sizes and devices
- **Interactive Navigation**: User-friendly menu system
- **Portfolio Showcase**: Display of projects and skills
- **E-Commerce Functionality**: Product browsing, cart management, and checkout process
- **Thyroid Nodule Classifier**: A specialized AI tool for medical image classification
- **Contact Form**: Direct communication channel with visitors
- **Dynamic Styling**: Gradient animations and hover effects

## 🏗️ Site Structure

```
├── index.html           # Main portfolio page
├── Shop.html            # E-commerce product listing
├── Cart.html            # Shopping cart management
├── Checkout.html        # Order processing
├── Classifier.html      # Thyroid nodule classification tool
├── styles.css           # Main portfolio styling
├── styles1.css          # Classifier specific styling 
├── styles2.css          # Shop specific styling
└── Old Versions/        # Previous iterations of the site
```

## 💻 Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling with animations and responsive design
- **JavaScript**: Interactive elements and functionality
- **TensorFlow.js**: Machine learning model deployment and inference
- **Teachable Machine**: Model training interface

## 🛠️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vws-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd vws-portfolio
   ```

3. Open `index.html` in your browser to view the site locally.

## 📱 Usage

- Navigate to `index.html` to explore the portfolio
- Visit `Shop.html` to browse products
- Access `Classifier.html` to use the thyroid nodule classifier
- For the classifier:
  1. Download pre-trained model files from provided Google Drive links
  2. Upload model, weights, and metadata files
  3. Load the model
  4. Upload an ultrasound image for classification

## 🧩 Components

### Portfolio

The portfolio section showcases personal projects, provides information about the developer, and includes a contact form for potential employers or clients.

### Shop

The e-commerce section features:
- Product browsing with search functionality
- Product cards with images, descriptions, and prices
- Shopping cart management
- Checkout process with billing, shipping, and payment information collection

### Thyroid Nodule Classifier

A specialized tool that demonstrates practical application of machine learning:
- Supports uploading pre-trained models of different sizes
- Provides links to sample images for testing
- Displays classification results with probability percentages
- Supports both small models (3,000 images, 500 epochs) and large models (7,000 images, 1,250 epochs)

## 🎨 Styling

Three CSS files are used for different sections of the site:

1. **styles.css**: Main portfolio styling with animated gradient background and modern card-based layout
2. **styles1.css**: Classifier-specific styling with a focus on form elements and tool interfaces
3. **styles2.css**: Shop-specific styling with product cards and checkout form design

## 🚀 Future Goals

### Short-term Improvements
- Implement functional JavaScript for the shop cart system
- Create a backend system to process orders and manage inventory
- Improve mobile responsiveness across all pages
- Add product filtering and sorting options
- Integrate form validation for checkout and contact pages

### Medium-term Enhancements
- Develop a user account system with profiles and order history
- Implement secure payment processing
- Create an admin dashboard for content management
- Improve the classifier with more detailed result visualizations
- Add a blog section for sharing updates and technical articles

### Long-term Vision
- Develop a community forum for discussion about medical imaging AI
- Create an API for the thyroid classifier to be used by other applications
- Expand the classifier to handle multiple medical imaging categories
- Implement progressive web app features for offline functionality
- Build companion mobile applications with native features

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

© 2025 Vaughn-WS. All rights reserved.

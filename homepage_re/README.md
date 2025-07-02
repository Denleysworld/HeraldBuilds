cd homepage_re
npm install
npm start# Herald Builds Homepage - React Version

This is a React conversion of the Herald Builds homepage, using React and React-DOM.

## Features

- Fully responsive design
- Component-based architecture
- Modern React with hooks
- Webpack bundling
- Development server with hot reload

## Installation

1. Navigate to the project directory:
   ```bash
   cd homepage_re
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

**Note**: The Images directory has been copied to the `public/Images` folder to ensure proper asset loading in the React application.

## Running the Application

### Development Mode
```bash
npm start
```
This will start the development server on `http://localhost:3000` and automatically open your browser.

### Production Build
```bash
npm run build
```
This will create an optimized production build in the `dist` folder.

## Project Structure

```
homepage_re/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── DreamSection.jsx
│   │   ├── Features.jsx
│   │   ├── Benefits.jsx
│   │   ├���─ Testimonials.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── index.css       # Main stylesheet
│   ├── App.js              # Main App component
│   └── index.js            # Entry point
├── package.json
├── webpack.config.js       # Webpack configuration
└── README.md
```

## Components

- **Header**: Navigation bar with logo and menu links
- **Hero**: Main banner section with welcome message
- **DreamSection**: Secondary banner about PC building dreams
- **Features**: Feature cards for Build Guides and Troubleshooting
- **Benefits**: Why choose Herald Builds section
- **Testimonials**: User testimonials section
- **Footer**: Contact information and links

## Technologies Used

- React 18.2.0
- React-DOM 18.2.0
- Webpack 5
- Babel
- CSS3 with modern features
- Font Awesome icons
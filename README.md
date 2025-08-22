# House of Yugen - Interactive Pitch Deck

A modern, interactive single-page pitch deck website showcasing the custom voting platform proposal for House of Yugen. Built with React, Framer Motion, and Tailwind CSS.

## ✨ Features

- **Smooth Animations**: Advanced CSS animations and transitions using Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **Interactive Navigation**: Smooth scrolling navigation with active section indicators
- **Luxury Aesthetics**: Premium design that reflects House of Yugen's brand positioning
- **Performance Optimized**: Built with modern React patterns and optimized animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd house-of-yugen-pitch-deck
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Build for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Hero section with main value proposition
│   ├── Vision.jsx      # Current limitations vs. future vision
│   ├── ValueEquation.jsx # Commitment to success metrics
│   ├── TechnicalFoundation.jsx # Technical architecture details
│   ├── InvestmentStructure.jsx # Pricing and commitments
│   ├── SuccessMetrics.jsx # Success objectives and outcomes
│   ├── Roadmap.jsx     # Phased development timeline
│   ├── BackupPlan.jsx  # Risk mitigation strategies
│   ├── NextSteps.jsx   # Action options and timeline
│   └── Navigation.jsx  # Navigation component
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Design System

### Colors
- **Primary Gold**: `#D4AF37` (yugen-gold)
- **Primary Black**: `#0A0A0A` (yugen-black)
- **Dark Gray**: `#1A1A1A` (yugen-dark)
- **Light Gray**: `#2A2A2A` (yugen-gray)
- **Light**: `#F5F5F5` (yugen-light)

### Typography
- **Serif**: Playfair Display (headings)
- **Sans**: Inter (body text)

### Animations
- Fade in/out effects
- Slide animations
- Scale transitions
- Hover effects
- Staggered animations

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Update the navigation sections array
4. Add corresponding navigation item

### Modifying Animations
- Edit `tailwind.config.js` for custom keyframes
- Modify component variants in individual components
- Adjust timing and easing in Framer Motion variants

### Styling Changes
- Modify `src/index.css` for global styles
- Update Tailwind classes in components
- Adjust color scheme in `tailwind.config.js`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Features

- **Lazy Loading**: Components animate in when they come into view
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Smooth Scrolling**: Native smooth scroll behavior
- **Efficient Rendering**: React optimization patterns

## 🎯 Key Sections

1. **Hero**: Main value proposition and call-to-action
2. **Vision**: Current limitations vs. future possibilities
3. **Value Equation**: Success metrics and commitments
4. **Technical Foundation**: Technology stack and features
5. **Investment Structure**: Pricing and client commitments
6. **Success Metrics**: Clear objectives and outcomes
7. **Roadmap**: Phased development approach
8. **Backup Plan**: Risk mitigation strategies
9. **Next Steps**: Action options and timeline

## 🔗 Dependencies

- **React 18**: Modern React with hooks
- **Framer Motion**: Advanced animations and transitions
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **Vite**: Fast build tool and dev server

## 📄 License

This project is created for House of Yugen's custom voting platform proposal.

## 🤝 Support

For questions or customization requests, please contact the development team.

---

**Built with ❤️ for House of Yugen's Digital Transformation**

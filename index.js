document.addEventListener('DOMContentLoaded', function() {
    // Dynamic headline based on time of day
    const mainHeadline = document.getElementById('main-headline');
    const hour = new Date().getHours();
    if (hour < 12) {
        mainHeadline.textContent = "Good Morning! Embrace the Future of Cloud Native!";
    } else if (hour < 18) {
        mainHeadline.textContent = "Good Afternoon! Embrace the Future of Cloud Native!";
    } else {
        mainHeadline.textContent = "Good Evening! Embrace the Future of Cloud Native!";
    }

    // Dynamic features
    const features = [
        "Seamless Cloud Integration",
        "Automated Scaling",
        "Robust Security",
        "AI-Driven Operations",
        "Self-Optimizing Infrastructure",
        "24/7 Support"
    ];
    const featureGrid = document.getElementById('dynamic-features');
    featureGrid.innerHTML = ""; // Clear if any
    features.forEach(feature => {
        const div = document.createElement('div');
        div.className = 'feature-item';
        div.textContent = feature;
        featureGrid.appendChild(div);
    });

    // Animate feature cards
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
        el.style.animation = `slideInFeature 0.8s cubic-bezier(.68,-0.55,.27,1.55) forwards`;
        el.style.animationDelay = `${0.2 + i * 0.2}s`;
    });

    // Dynamic CTA button text based on time
    const mainCta = document.getElementById('main-cta');
    if (hour < 12) {
        mainCta.textContent = "Start Your Morning with Cloud Native!";
    } else if (hour < 18) {
        mainCta.textContent = "Boost Your Afternoon with Cloud Native!";
    } else {
        mainCta.textContent = "Transform Your Evening with Cloud Native!";
    }

    // Dynamic additional info
    const additionalInfo = document.getElementById('additional-info');
    additionalInfo.textContent = "Discover how cloud native solutions can revolutionize your workflow, no matter the time of day!";
});

// SVG Animation
const svgs = document.querySelectorAll('svg');
svgs.forEach((svg, i) => {
    svg.style.opacity = 0;
    svg.style.transform = 'translateY(30px)';
    svg.style.animation = `fadeInSVG 1s 0.7s forwards`;
});

// Keyframes for SVG animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fadeInSVG {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`, styleSheet.cssRules.length);
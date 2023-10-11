// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  const elements = document.querySelectorAll('.animate-text');
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('show');
    }
  });
}

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);

// script.js
const endCount = 3;
const duration = 2000; // Animation duration in milliseconds
const step = endCount / (duration / 5); // 16ms is roughly 1 frame at 60 FPS
const expandScale = 1.2; // Scale factor for expanding

const countElement = document.getElementById('count');

function animateCount(currentCount) {
    if (currentCount <= endCount) {
        countElement.textContent = currentCount.toFixed(1);
        setTimeout(() => {
            animateCount(currentCount + step);
        }, 16); // Call the function approximately every frame
    } else {
        expandNumber();
    }
}

function expandNumber() {
    countElement.style.transform = `scale(${expandScale})`;
}

animateCount(0)



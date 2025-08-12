
document.addEventListener('DOMContentLoaded', () => {
  // Fade-in animation delay for sections
  const fadeElems = document.querySelectorAll('.fade-in');
  fadeElems.forEach((el, i) => {
    el.style.animationDelay = (i * 0.3) + 's';
  });

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.close');
  const galleryImages = document.querySelectorAll('.gallery-grid img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      document.body.style.overflow = 'hidden'; // prevent background scroll
    });
  });

  // Close lightbox on close button click
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Close lightbox on clicking outside image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

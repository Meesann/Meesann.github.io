
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
fadeEls.forEach(el => observer.observe(el));

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const modalClose = document.querySelector(".modal-close");

document.querySelectorAll('.work-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    modalTitle.textContent = this.dataset.title;
    modalImage.src = this.dataset.image;

    const descriptionText = this.dataset.description;

    const formatted = descriptionText
      .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>')
      .split('\n')
      .filter(p => p.trim() !== '')
      .map(p => `<p>${p}</p>`)
      .join('');

    modalDescription.innerHTML = formatted;
    modal.style.display = "flex";
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const darkModeToggle = document.querySelector('#darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});


// const mobileMenuToggle = document.querySelector('#toggle');
// const mobileMenu = document.querySelector('.mobile-menu');

// mobileMenuToggle.addEventListener('change', () => {
//   if (mobileMenuToggle.checked) {
//     mobileMenu.style.display = 'flex';
//   } else {
//     mobileMenu.style.display = 'none';
//   }
// });

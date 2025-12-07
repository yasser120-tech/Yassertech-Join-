// Basic interactivity
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if(!name || !email || !message){
    alert('Tafadhali jaza sehemu zote.');
    return;
  }
  // Default behaviour: open mail client with prefilled message
  const subject = encodeURIComponent(`Ujumbe kutoka ${name} - YASSER TECH`);
  const body = encodeURIComponent(`Jina: ${name}\nBarua pepe: ${email}\n\n${message}`);
  window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
});

// Clear button
document.getElementById('clearBtn').addEventListener('click', () => {
  form.reset();
});

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Auto-play background music
  const bgMusic = document.getElementById('bgMusic');
  bgMusic.play().catch(() => {
    // Autoplay blocked, user will need to click play
    console.log('Autoplay blocked. User interaction required.');
  });

  // Show message button after flowers bloom (6 seconds)
  setTimeout(() => {
    document.getElementById('messageBtn').classList.add('show');
  }, 6000);

  // Message button click handler
  document.getElementById('messageBtn').addEventListener('click', () => {
    document.getElementById('messageContainer').classList.add('show');
  });

  // Close message button
  document.getElementById('closeMessage').addEventListener('click', () => {
    document.getElementById('messageContainer').classList.remove('show');
  });
};
function toggleImage(card) {
    const img = card.querySelector('img');
    const text = card.querySelector('p');
    
    if (img.style.display !== 'none') {
      img.style.display = 'none'; // Hide the image
      text.style.display = 'block'; // Show the text
    } else {
      img.style.display = 'block'; // Show the image
      text.style.display = 'none'; // Hide the text
    }
  }
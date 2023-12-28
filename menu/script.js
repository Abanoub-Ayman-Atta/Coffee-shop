// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Get all drink items
  const drinkItems = document.querySelectorAll('.drink-item');

  // Add event listeners for hover effect
  drinkItems.forEach(function(item) {
      // Initial styles
      item.style.transition = 'transform 0.3s, box-shadow 0.3s';
      item.style.transform = 'scale(1)';
      item.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

      item.addEventListener('mouseenter', function() {
          // Enlarge the item on hover
          item.style.transform = 'scale(1.1)';
          item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      });

      item.addEventListener('mouseleave', function() {
          // Restore the original size on mouse leave
          item.style.transform = 'scale(1)';
          item.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      });
  });
});

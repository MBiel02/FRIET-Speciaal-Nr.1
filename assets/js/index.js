const positionScroll = () => {
  const container = document.querySelector('.container');

  // Retrieve last scroll position from local storage
  const lastScrollX = localStorage.getItem('lastScrollX');
  const lastScrollY = localStorage.getItem('lastScrollY');

  console.log('Last Scroll Position:', lastScrollX, lastScrollY);

  // If last scroll positions are found, scroll to them
  if (lastScrollX !== null && lastScrollY !== null) {
    console.log('Restoring Scroll Position:', lastScrollX, lastScrollY);
    container.scrollTo(parseInt(lastScrollX), parseInt(lastScrollY));
  }

  // Event listener to update scroll position when scrolled
  container.addEventListener('scroll', () => {
    // Store the current scroll position
    localStorage.setItem('lastScrollX', container.scrollLeft);
    localStorage.setItem('lastScrollY', container.scrollTop);
    console.log('Scroll Position Updated:', container.scrollLeft, container.scrollTop);
  });
}

positionScroll();


const helloWorld = () => {
  console.log("Hello World");
};

helloWorld();

const positionScroll = () => {
  const container = document.querySelector('.bodycontainer'); // Update selector to '.content'
  
  // Retrieve last scroll position from local storage
  const lastScrollX = localStorage.getItem('lastScrollX');
  const lastScrollY = localStorage.getItem('lastScrollY');
  console.log('Last Scroll X:', lastScrollX, 'Last Scroll Y:', lastScrollY); // Add console log
  
  // If last scroll positions are found, scroll to them
  if (lastScrollX !== null && lastScrollY !== null) {
    container.scrollTo(parseInt(lastScrollX), parseInt(lastScrollY));
  }
  
  // Event listener to update scroll position when scrolled
  container.addEventListener('scroll', () => {
    // Store the current scroll position
    localStorage.setItem('lastScrollX', container.scrollLeft);
    localStorage.setItem('lastScrollY', container.scrollTop);

    console.log('Scroll event listener is triggered!');
  });
}

positionScroll();







import React from 'react';

function ExploreButton() {
  const handleClick = () => {
    // Scroll to a specific section (e.g., to the 'more' section)
    const element = document.getElementById('more');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={handleClick} className="explore-btn">
      Explore More
    </button>
  );
}

export default ExploreButton;

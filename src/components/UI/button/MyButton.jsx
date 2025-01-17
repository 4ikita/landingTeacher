import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, white, scrollToId, ...props }) => {
  const handleClick = () => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        // Calculate the target scroll position (50px above the element)
        const offset = 200; // Adjust this value as needed
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        // Smooth scroll to the adjusted position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // Highlight the section
        setTimeout(() => {
          element.classList.add('highlight');
        }, 100);

        // Remove the highlight after 2 seconds
        setTimeout(() => {
          element.classList.remove('highlight');
        }, 3000);
      }
    }
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className={white === 'white' ? classes.myWhiteBtn : classes.myGreenBtn}
    >
      {children}
    </button>
  );
};

export default MyButton;
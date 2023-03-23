import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const dueDate = new Date("March 24, 2023, 15:00:00").getTime();
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and countdown date
      const distance = dueDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const countdown = `Due in ${days}d ${hours}h ${minutes}m ${seconds}s`;
      setCountdown(countdown);
    
      // If the count down is finished, display expired
      if (distance < 0) {
          clearInterval(timer);
          setCountdown('DUE');
      }
       
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return <div id="countdown"><p>{countdown}</p></div>;
};

export default Countdown;
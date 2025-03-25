'use client';

import { useEffect, useState } from 'react';



const ServerCounter = ({ start, end, duration ,icon,text}) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return <div className='flex flex-col'>
    {icon}
    <h1 className='text-primary text-2xl font-bold my-3'>{count}+</h1>
    <p  className="text-primary font-semibold text-sm mb-6">{text}</p>
    </div>;
};

export default ServerCounter;
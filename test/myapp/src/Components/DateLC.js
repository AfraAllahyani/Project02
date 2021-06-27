import './StyleDate.css';
import { useState, useEffect } from 'react';

export default function Clock(props) {
  const [date, setDate] = useState(new Date());
 useEffect(() => {
  var timerID = setInterval( () => tick(), 1000 );
  return function cleanup() {
      clearInterval(timerID);
    };
 });
   function tick() {
    setDate(new Date());
   }
   return (
      <div>
    
        <h2 className="Date">Riyadh local time {date.toLocaleTimeString()}.</h2>
      </div>
    );
}




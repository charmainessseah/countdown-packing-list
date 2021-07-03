import React, {useEffect, useState} from "react";

function Countdown({tripDate}) {
    
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        
        if (tripDate != null) {
            localStorage.setItem('endDate', tripDate);
        }
       
        const interval = setInterval(() => {
            
            const date = new Date();
            const timeNow = date.getTime();
            const timeDifference = localStorage.getItem('endDate') - timeNow;
            
            console.log("trip date 2: " + tripDate); // 2
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            console.log(timeDifference);
            
            if (timeDifference < 0 || tripDate == null) {
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            } else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [tripDate]);

    return(
        <div className="countdown">
             <h1>{days} days : {hours} hours : {minutes} minutes : {seconds} seconds</h1>
        </div>
    )
}

export default Countdown;
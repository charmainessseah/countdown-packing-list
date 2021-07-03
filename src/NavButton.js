import React, {useState} from 'react';
import Home from './Home.js';
import SetName from './SetName';
import SetDate from './SetDate';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function NavButton() {

    const [tripName, setTripName] = useState("My Trip");
    const [tripDate, setTripDate] = useState("date");
    const [showDate, setShowDate] = useState(false);


    return(
        <div>
            <Popup className="popup" trigger={<button>set trip name</button>} modal>
                <SetName name={tripName} setName={setTripName}/>
            </Popup>

           <Popup  trigger={<button>set trip date</button>}>
               <DatePicker></DatePicker>
           </Popup>
               
            

            <Home name={tripName} date={tripDate}/>
        </div>
    )
}

export default NavButton;
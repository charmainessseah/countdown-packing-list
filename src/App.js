import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Header.js';
import SetName from './SetName';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Countdown from './Countdown';
import PackingList from './PackingList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripName : "My Trip",
      tripDate : null,
      showSelectDate : false,
    }
  }

  setTripName = (newName) => {
    this.setState({tripName : newName});
  }

  handleChange = (date) => {
    this.setState({tripDate : date.getTime()});
  }

  componentDidMount() {
    const endDate = localStorage.getItem("endDate");

    if (endDate != null) {
      this.setState({tripDate : parseInt(endDate)});
    }

    const name = localStorage.getItem("name");

    if (name != null) {
      this.setState({tripName : name});
    }
  }

  selectDate = () => {
    let currState = this.state.showSelectDate;
    this.setState({showSelectDate : !currState});
  }

  render() {
    return(
      <div className="App">
        {/* <h4 className="setDate">set trip date: </h4>
        <DatePicker className="setDate" selected={this.state.tripDate} onChange={this.handleChange} showTimeSelect
         dateFormat="dd/MM/yyyy" minDate={new Date()}></DatePicker> */}
        <button onClick={this.selectDate} className="date-button">set trip date</button>
        {this.state.showSelectDate ? <DatePicker className="set-date-button" selected={this.state.tripDate} onChange={this.handleChange} showTimeSelect
         dateFormat="dd/MM/yyyy" minDate={new Date()}></DatePicker> : ""}
      
        
        <Popup className="popup" trigger={<button className="set-name-button">set trip name</button>} modal>
          <SetName name={this.state.tripName} setName={this.setTripName}/>
        </Popup>

        <Header name={this.state.tripName}/>
        <Countdown tripDate={this.state.tripDate}/>
        <PackingList />
      </div>
    )
  }
}

// function App() {
  
//   const [tripName, setTripName] = useState("My Trip");
//   const [tripDate, setTripDate] = useState(null);
  

//   const handleChange = (date) => {
//     setTripDate(date.getTime());
//   }

//   return (
//     <div className="App">
      
//       <h4 className="setDate">set trip date: </h4>
//       <DatePicker className="setDate" selected={tripDate} onChange={handleChange} showTimeSelect
//         dateFormat="dd/MM/yyyy" minDate={new Date()}></DatePicker>
     
      
//       <br></br>
//       <Popup className="popup" trigger={<button>set trip name</button>} modal>
//         <SetName name={tripName} setName={setTripName}/>
//       </Popup>

//       <Home name={tripName}/>
//       <Countdown tripDate={tripDate}/>
      
//     </div>
//   );
// }

export default App;

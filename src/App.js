import React, {Component} from 'react';
import './App.css';


class App extends Component {  
  constructor() {
    /*Here we use super() to have access to the constructor of COMPONENT */
    super()
    this.state = {
        ISSData: []
    }
  }

  fetchInfo() {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(resp => resp.json())
      .then(data => this.setState({ ISSData : data }))
      //.then(data => console.log())
      //.then(console.log());  
    //  .then(setTimeout(()=> {this.setState(this.fetchInfo)}, 5000));     
  }

  componentDidMount(){
    this.fetchInfo();
  }

  render() { 
    //const currentlatitude = {ISSData: {"iss_position": {$latitude}}}
    const {ISSData} = this.state;
    const currentTimeStamp = ISSData?.timestamp; 
    const currentLatitude = ISSData?.iss_position?.latitude;
    const currentLongitude = ISSData?.iss_position?.longitude;
    // const currentLongitude =;
    
    //console.log(ISSData.iss_position);

    return (
      <div className="background" >
        <h1>The ISS</h1>
        <div className='contentZone'>
          <h3>ISS Position at Time: {currentTimeStamp}</h3>
          <h2>Latitude: {currentLatitude}</h2>
          <h2>Longitude: {currentLongitude}</h2>
        </div>
      </div>
    );
  }
}

export default App;

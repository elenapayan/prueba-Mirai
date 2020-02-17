import React from 'react';
import '../stylesheets/App.css';
// import { fetchAPI } from '../services/DataService';
import { Switch, Route } from 'react-router-dom';
import UserForm from './UserForm';
import RoomsList from './RoomsList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hotelId: "",
      date: "",
      nights: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  // componentDidMount() {
  //   fetch('https://api-pre.mirai.com/MiraiWebService/availableRate/get?hotelId=10030559&checkin=05/03/2020&nights=2', {
  //     headers: { 'Authorization': `Basic ${btoa('user1:user1Pass')}` }
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('returns:', data);
  //     });
  // }


  // function
  // const f = new Date();
  // document.write(f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());


  isValidated() {
    const { hotelId, date, nights } = this.state;
    // const validDate =
    // const validNigths =
    if (hotelId && date && nights) {
      return true;
    } else {
      return false;
    }
  }

  handleChange(data) {
    this.setState(data)
  }

  handleSearch(ev) {
    const hotelId = parseInt(this.state.hotelId);
    const nights = parseInt(this.state.nights);
    const date = (this.state.date).split("-").reverse().join("/");
    const url = `https://api-pre.mirai.com/MiraiWebService/availableRate/get?hotelId=${hotelId}&checkin=${date}&nights=${nights}`;

    if (this.isValidated() === true) {
      fetch(url, {
        headers: { 'Authorization': `Basic ${btoa('user1:user1Pass')}` }
      })
        .then((response) => response.json())
        .then(data => {
          this.setState({
            data: data.availableRates[hotelId]
          });
        })
      // .catch(error => console.log("error"));
    } else {
      ev.preventDefault();
      return console.log("Lo sentimos, no hay tarifas disponibles");
    }
  }


  render() {
    console.log(this.state.data);
    return (
      <React.Fragment>

        <Switch>
          <Route exact path="/">
            <UserForm handleChange={this.handleChange} hotelId={this.state.hotelId} date={this.state.date} nights={this.state.nights} handleSearch={this.handleSearch} />
          </Route>
          <Route exact path="/roomsList">
            <RoomsList data={this.state.data} />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

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
      checkin: "",
      nights: "",
      validatedForm: ""
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


  formValidated() {
    const hotelId = this.state.hotelId;
    const nights = parseInt(this.state.nights);
    let checkin = this.state.checkin;
    checkin = checkin.split("-").join("");
    const f = new Date();
    const year = (f.getFullYear()).toString();
    let month = (f.getMonth() + 1).toString();
    if (month.length < 2) {
      month = "0" + month;
    }
    const day = f.getDate().toString();
    const date = (year + month + day);
    if (hotelId && (checkin >= date) && (nights >= 1) && (nights <= 30)) {
      this.setState({
        validatedForm: true
      });
    } else {
      this.setState({
        validatedForm: false
      });
    }
  }

  handleChange(data) {
    this.setState(data, () => {
      this.formValidated();
    })
  }

  handleSearch(ev) {
    const hotelId = parseInt(this.state.hotelId);
    const nights = parseInt(this.state.nights);
    const checkin = (this.state.checkin).split("-").reverse().join("/");
    const url = `https://api-pre.mirai.com/MiraiWebService/availableRate/get?hotelId=${hotelId}&checkin=${checkin}&nights=${nights}`;
    if (!!this.state.validatedForm === true) {
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
      return (
        <p>Lo sentimos, no hay tarifas disponibles APP+</p>
      )
    }
  }


  render() {
    console.log(this.state.data);
    console.log(this.state.validatedForm)
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <UserForm handleChange={this.handleChange} hotelId={this.state.hotelId} checkin={this.state.checkin} nights={this.state.nights} handleSearch={this.handleSearch} />
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

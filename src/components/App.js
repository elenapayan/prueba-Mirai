import React from 'react';
import '../stylesheets/App.css';
import { Switch, Route } from 'react-router-dom';
import UserForm from './UserForm';
import ShowRoom from './ShowRoom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false,
      hotelId: "",
      checkin: "",
      nights: "",
      validatedForm: "",
      showResults: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

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

  handleSearch() {
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
          if (data.availableRates[hotelId]) {
            this.setState({
              data: data.availableRates[hotelId],
              showResults: true
            });
          } else {
            this.setState({
              data: false,
              showResults: false
            });
          }
        })
    } else {
      this.setState({
        data: false,
        showResults: false
      });
    }
  }

  handleReset() {
    this.setState({
      data: [],
      hotelId: "",
      checkin: "",
      nights: "",
      validatedForm: ""
    });
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
          <Route path="/ShowRoom">
            <ShowRoom data={this.state.data} showResults={this.state.showResults} validatedForm={this.state.validatedForm} handleReset={this.handleReset} />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

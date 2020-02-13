import React from 'react';
import '../stylesheets/App.css';
// import { fetchAPI } from '../services/DataService';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hotelId: "",
      date: "",
      nights: 0
    }
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeNights = this.handleChangeNights.bind(this);
    this.handleChangeHotel = this.handleChangeHotel.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  // componentDidMount() {
  //   fetch('https://api-pre.mirai.com/MiraiWebService/availableRate/get?hotelId=10030559&checkin=01/03/2020&nights=2', {
  //     headers: { 'Authorization': `Basic ${btoa('user1:user1Pass')}` }
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('returns:', data);
  //     });
  // }



  handleChangeHotel(ev) {
    this.setState({
      hotelId: ev.target.id
    });
  }

  handleChangeDate(ev) {
    this.setState({
      date: ev.target.value
    });
  }

  handleChangeNights(ev) {
    this.setState({
      nights: ev.target.value
    });
  }


  handleSearch(ev) {
    ev.preventDefault();
    const hotelId = parseInt(this.state.hotelId);
    const nights = parseInt(this.state.nights);
    const date = (this.state.date).split("-").reverse().join("/");
    // console.log(date.split("-").reverse().join("/"));
    const url = `https://api-pre.mirai.com/MiraiWebService/availableRate/get?hotelId=${hotelId}&checkin=${date}&nights=${nights}`;

    fetch(url, {
      headers: { 'Authorization': `Basic ${btoa('user1:user1Pass')}` }
    })
      .then((response) => response.json())
      .then(data => {
        this.setState({
          data: data.availableRates[hotelId]
        });
      })
      .catch(error => console.log("error"));
  }

  render() {
    console.log(this.state.data);
    return (
      <React.Fragment>
        <form className="form-container" action="" method="get">
          <fieldset class="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Elige hotel:</legend>
              <div class="col-sm-10">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="44069509">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="44069509"
                      name="hotel"
                      value={this.state.hotelId}
                      onChange={this.handleChangeHotel}
                    />
                    Hotel Baqueira Val de Neu</label>
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="10030559">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="10030559"
                      name="hotel"
                      value={this.state.hotel}
                      onChange={this.handleChangeHotel}
                    />
                    Hotel Moderno</label>
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="100376478">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="100376478"
                      name="hotel"
                      value={this.state.hotel}
                      onChange={this.handleChangeHotel}
                    />
                    Hotel Grand Luxor</label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="date-checkIn">Fecha del check-in</label>
            <div class="col-sm-10">
              <input
                type="date"
                className="form-control"
                id="date-checkIn"
                name="date-checkIn"
                value={this.state.date}
                onChange={this.handleChangeDate} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="nights">Número de noches</label>
            <div class="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="nights"
                name="nights"
                min="1"
                max="30"
                value={this.state.nights}
                onChange={this.handleChangeNights}
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="button" className="btn btn-primary" onClick={this.handleSearch}>Buscar</button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default App;

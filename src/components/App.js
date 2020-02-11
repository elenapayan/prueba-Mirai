import React from 'react';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nights: 1
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(ev) {
    this.setState({
      nights: ev.target.value
    });
  }


  render() {
    return (
      <React.Fragment>
        <header>
          Header
        </header>
        <form className="form-container" action="" method="get">
          <h3>Elige un hotel</h3>
          <div>
            <label htmlFor="hotel1"></label>
            <input
              type="radio"
              className="form-input"
              id="hotel1"
              name="hotel" /> Hotel 1
          </div>
          <div>
            <label htmlFor="hotel2"></label>
            <input
              type="radio"
              className="form-input"
              id="hotel2"
              name="hotel" /> Hotel 2
          </div>
          <div>
            <label htmlFor="hotel3"></label>
            <input
              type="radio"
              className="form-input"
              id="hotel3"
              name="hotel" /> Hotel 3
          </div>
          <label htmlFor="date-checkIn">Fecha del check-in</label>
          <input
            type="date"
            className="form-input"
            id="date-checkIn"
            name="date-checkIn" />
          <label htmlFor="nights">Número de noches</label>
          <input
            type="number"
            className="form-input"
            id="nights"
            name="nights"
            min="1"
            max="30"
            value={this.state.nights}
            onChange={this.handleChange}
          />
          <button>Buscar</button>
        </form>
      </React.Fragment>
    );
  }
}

export default App;

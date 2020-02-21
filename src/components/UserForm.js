import React from 'react';
import { Link } from 'react-router-dom';

function UserForm(props) {

  function handleChangeHotel(ev) {
    props.handleChange({
      hotelId: ev.target.id
    });
  }

  function handleChangeDate(ev) {
    props.handleChange({
      checkin: ev.target.value
    });
  }

  function handleChangeNights(ev) {
    props.handleChange({
      nights: ev.target.value
    });
  }

  return (
    <React.Fragment>
      <form className="form-container" action="" method="get">
        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Elige hotel:</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <label className="form-check-label" htmlFor="44069509">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="44069509"
                    name="hotel"
                    value={props.hotelId}
                    required
                    onChange={handleChangeHotel}
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
                    value={props.hotelId}
                    required
                    onChange={handleChangeHotel}
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
                    value={props.hotelId}
                    required
                    onChange={handleChangeHotel}
                  />
                  Hotel Grand Luxor</label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="date-checkIn">Fecha del check-in</label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="date-checkIn"
              name="date-checkIn"
              value={props.checkin}
              required
              onChange={handleChangeDate}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="nights">Número de noches</label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="nights"
              name="nights"
              min="1"
              max="30"
              value={props.nights}
              placeholder="Ej: 1"
              required
              onChange={handleChangeNights}
            />
          </div>
        </div>
      </form >
      <div className="form-group row">
        <div className="col-sm-10">
          <Link to="/ShowRoom">
            <button className="btn btn-primary" onClick={props.handleSearch}>Buscar</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserForm;

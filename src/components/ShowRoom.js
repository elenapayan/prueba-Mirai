import React from 'react';
import { Link } from 'react-router-dom';

function ShowRoom(props) {
  if (!props.showResults && !!props.validatedForm) return <p>Loading..</p>
  if (props.data) {
    const cheapestRoom = props.data.sort((a, b) => a.netPrice - b.netPrice)[0];
    return (
      <React.Fragment>
        <div className="card">
          <div className="list-group-item">
            <h3 className="list-group-item">Habitación: {cheapestRoom.roomName}</h3>
            <p className="list-group-item">Oferta: {cheapestRoom.offerName ? cheapestRoom.offerName : "No hay oferta disponible"}</p>
            <p className="list-group-item">Régimen: {cheapestRoom.boardName}</p>
            <div className="list-group-item">Ocupación:
            <p className="occupancy-item">Adultos: {cheapestRoom.occupancy.numAdults}</p>
              <p className="occupancy-item">Niños: {cheapestRoom.occupancy.numChilds}</p>
              <p className="occupancy-item">Bebés: {cheapestRoom.occupancy.numBabies}</p>
            </div>
            <p className="list-group-item">Precio: {cheapestRoom.netPrice}€</p>
          </div>
        </div>
        <Link to="/">
          <button className="btn btn-secondary" onClick={props.handleReset}>Volver</button>
        </Link>
      </React.Fragment>
    )
  } else {
    return (
      <div>
        <p className="error-msg">Lo sentimos, no hay tarifas disponibles</p>
        <Link to="/">
          <button className="btn btn-secondary" onClick={props.handleReset}>Volver</button>
        </Link>
      </div>

    )
  }
}

export default ShowRoom;

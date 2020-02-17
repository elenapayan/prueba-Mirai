import React from 'react';


function RoomsDetails(props) {

  return (
    <li className="list-group-item">
      <h3 className="list-group-item">Room: {props.roomName}</h3>
      <p className="list-group-item">Offer: {props.offerName}</p>
      <p className="list-group-item">Board: {props.boardName}</p>
      <div className="list-group-item">Occupancy:
        <p>Adults: {props.occupancyAdults}</p>
        <p>Childs: {props.occupancyChilds}</p>
        <p>Babies: {props.occupancyBabies}</p>
      </div>
      <p className="list-group-item">Price: {props.netPrice}€</p>
    </li>
  )
}

export default RoomsDetails;
import React from 'react';
import RoomsDetails from './RoomsDetails';


function RoomsList(props) {
  console.log(props);
  if (props.data.length > 0) {
    return (
      <ul className="card">
        {props.data.map((room, key) => {
          return (
            <RoomsDetails
              key={key}
              roomName={room.roomName}
              offerName={room.offerName}
              boardName={room.boardName}
              occupancyAdults={room.occupancy.numAdults}
              occupancyChilds={room.occupancy.numChilds}
              occupancyBabies={room.occupancy.numBabies}
              netPrice={room.netPrice}
            />
          )
        })}
      </ul>
    )
  }
  else {
    return (
      <p>Lo sentimos, no hay tarifas disponibles</p>
    )
  }
}

export default RoomsList;

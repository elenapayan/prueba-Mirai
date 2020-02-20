import React from 'react';
import RoomsDetails from './RoomsDetails';


function RoomsList(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <ul className="card">
        {props.data
          .sort((a, b) => a.netPrice - b.netPrice)
          .map((room, key) => {
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
  } else {
    return (
      <p>Lo sentimos, no hay tarifas disponibles roomList</p>
    )
  }
}

export default RoomsList;

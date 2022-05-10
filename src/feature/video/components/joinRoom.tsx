import React, { useContext, useState } from "react";
import "./joinroom.scss";

interface Props {
  joinBreakRoomOrMainRoom?: (value: boolean) => void;
}

const JoinRoom = ({ joinBreakRoomOrMainRoom }: Props) => {
  const [isOneToOne, setIsOneToOne] = useState(false);
  const joinBreakMainRoom = async () => {
    setIsOneToOne(!isOneToOne);
    joinBreakRoomOrMainRoom && joinBreakRoomOrMainRoom(!isOneToOne);
  };
  return (
    <div className="container">
      <button className="joinBreakMainRoom" onClick={joinBreakMainRoom}>
        {isOneToOne ? "Main Room" : "Break Room"}
      </button>
    </div>
  );
};

export default JoinRoom;

import React, { useState } from "react";
import Tickets from "./Components/Tickets";
import TicketGenerator from "./Components/TicketGenerator";

import "./styles/App.css";

function App() {
  const [allTickets, setallTickets] = useState([]);
  const handleSetAllTickets = (numberArray) => {
    setallTickets([...allTickets, numberArray]);
  };

  const deleteTicket = (index) => {
    const newAllTickets = [...allTickets];
    newAllTickets.splice(index, 1);
    setallTickets([...newAllTickets]);
  };

  return (
    <div className="App">
      <TicketGenerator
        handleSetAllTickets={handleSetAllTickets}
        allTickets={allTickets}
      />
      <Tickets allTickets={allTickets} deleteTicket={deleteTicket} />
    </div>
  );
}

export default App;

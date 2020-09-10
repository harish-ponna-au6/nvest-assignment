import React from "react";
import Tickets from "./Components/Tickets";
import TicketGenerator from "./Components/TicketGenerator";

import "./styles/App.css";

function App() {
  const [allTickets, setallTickets] = useState([]);
  return (
    <div className="App">
      <TicketGenerator />
      <Tickets />
    </div>
  );
}

export default App;

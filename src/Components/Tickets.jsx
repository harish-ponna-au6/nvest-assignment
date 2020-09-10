import React from "react";
import "../styles/Tickets.css";

function Tickets() {
  return (
    <div className="Tickets">
      <p>Your Selected Tickets:</p>
      <div className="allTickets">
        <div className="eachTicket">
          <i className="fas fa-trash"></i>
          <span className="ticketId">Ticket #1</span>
          <div className="ticketNumber">
            <div className="number">0</div>
            <div className="number">1</div>
            <div className="number">2</div>
            <div className="number">3</div>
            <div className="number">4</div>
            <div className="number">5</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tickets;

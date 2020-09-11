import React from "react";
import "../styles/Tickets.css";

function Tickets(props) {
  const { allTickets, deleteTicket } = props;
  return (
    <div className="Tickets">
      <p>Your Selected Tickets:</p>
      <div className="allTickets">
        {allTickets.length !== 0 &&
          allTickets.map((ticket, index) => (
            <div key={index} className="eachTicket">
              <i
                onClick={() => deleteTicket(index)}
                className="fas fa-trash"
              ></i>
              <span className="ticketId">Ticket #{index + 1}</span>
              <div className="ticketNumber">
                {ticket.map((number, i) => (
                  <div className="number" key={i}>
                    {number}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Tickets;

import React, { useState } from "react";
import "../styles/TicketGenerator.css";

function TicketGenerator(props) {
  const { handleSetAllTickets, allTickets } = props;

  const [numberArray, setnumberArray] = useState([]);

  const handleSetNumberArray = (e) => {
    if (numberArray.length === 6) return alert("Enter Six Digits Only ");
    if (numberArray[0] === undefined && e.target.innerText === "0")
      return alert("Initial Digit 0 is not allowed ");
    setnumberArray([...numberArray, e.target.innerText]);
  };

  const handleRandomGenerate = () => {
    const number = Math.floor(
      Math.random() * (999999 - 100000) + 100000
    ).toString();
    setnumberArray([...number.split("")]);
  };

  const popNumber = () => {
    const newNumberArray = numberArray;
    newNumberArray.pop();
    setnumberArray([...newNumberArray]);
  };
  const deleteNumber = () => setnumberArray([]);

  return (
    <div className="TicketGenerator">
      <div className="numberPad">
        <div className="numberDisplay">
          {numberArray.join("")}
          {numberArray.length === 0 && (
            <div className="error">Enter 6 Digits</div>
          )}
        </div>
        <div className="numbers">
          <div className="row">
            <div onClick={handleSetNumberArray}>7</div>
            <div onClick={handleSetNumberArray}>8</div>
            <div onClick={handleSetNumberArray}>9</div>
          </div>
          <div className="row">
            <div onClick={handleSetNumberArray}>4</div>
            <div onClick={handleSetNumberArray}>5</div>
            <div onClick={handleSetNumberArray}>6</div>
          </div>
          <div className="row">
            <div onClick={handleSetNumberArray}>1</div>
            <div onClick={handleSetNumberArray}>2</div>
            <div onClick={handleSetNumberArray}>3</div>
          </div>
          <div className="row">
            <div onClick={popNumber}>
              <i className="fas fa-backspace"></i>
            </div>
            <div onClick={handleSetNumberArray}>0</div>
            <div onClick={deleteNumber}>
              <i className="fas fa-trash"></i>
            </div>
          </div>
          <p
            className="addATicket"
            onClick={() => {
              if (allTickets.length >= 5) {
                return alert("Max Five Tickets Only");
              }
              let duplicate = false;
              allTickets.forEach((ele) => {
                if (
                  ele.join("").toString() === numberArray.join("").toString()
                ) {
                  duplicate = true;
                }
              });
              if (duplicate) return alert("Ticket Already Exist");
              if (numberArray.length !== 6) return alert("Enter 6 Digits");
              handleSetAllTickets(numberArray);
              setnumberArray([]);
            }}
          >
            <i className="fas fa-plus"></i>ADD TICKET
          </p>
        </div>
      </div>
      <div className="wheel">
        <p>Click the wheel to generate the random ticket</p>
        <div className="icon">
          <i className="fas fa-dharmachakra" onClick={handleRandomGenerate}></i>
        </div>
        <div className="range">Ticket number range: 100000 - 999999</div>
      </div>
    </div>
  );
}

export default TicketGenerator;

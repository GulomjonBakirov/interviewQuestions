import React, { useState } from "react";

export default function Question12() {
  const [message, setMessage] = useState("");

  const check = (a, b) => {
    isNaN(a) || isNaN(b)
      ? setMessage("Iltimos sonlarni kiriting !!!!")
      : setMessage(
          `P=${2 * (Math.abs(2 * a) + Math.abs(2 * b))} 
          S=${Math.abs(2 * a) * Math.abs(2 * b)}`
        );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value1 = parseFloat(event.target.elements[0].value);
    const value2 = parseFloat(event.target.elements[1].value);
    check(value1, value2);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        // onChange={checkValue}
        className="form-group"
      >
        <input
          className="form-control"
          type="number"
          id="number"
          placeholder="X kordinatasini kiriting"
        />
        <input
          className="form-control"
          type="number"
          id="number"
          placeholder="Y kordinatasini kiriting"
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            margin: "10px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
        <h4>{message}</h4>
      </form>
    </>
  );
}

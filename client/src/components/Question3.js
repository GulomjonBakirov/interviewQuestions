import React, { useState } from "react";

export default function Question3() {
  const [message, setMessage] = useState("");

  const check = (value) => {
    isNaN(value)
      ? setMessage("Iltimos sonni kiriting !!!!")
      : value <= 0
      ? setMessage("Doira diametri musbat bolishi kerak")
      : setMessage(
          `L = ${value * Math.PI}, R=${value / 2} S=${
            value * Math.pow(Math.PI, 2)
          }`
        );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = parseFloat(event.target.elements[0].value);
    check(value);
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
          placeholder="d ni kiritng"
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

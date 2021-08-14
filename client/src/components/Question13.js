import React, { useState } from "react";

export default function Question13() {
  const [message, setMessage] = useState("");

  const check = (a, b, c, d) => {
    isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)
      ? setMessage("Iltimos sonlarni kiriting !!!!")
      : setMessage(
          `^X = ${Math.sqrt(Math.pow(a - c, 2) + Math.pow(b - d, 2))}`
        );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value1 = parseFloat(event.target.elements[0].value);
    const value2 = parseFloat(event.target.elements[1].value);
    const value3 = parseFloat(event.target.elements[2].value);
    const value4 = parseFloat(event.target.elements[3].value);
    check(value1, value2, value3, value4);
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
          placeholder="X1 kordinatasini kiriting"
        />
        <input
          className="form-control"
          type="number"
          id="number"
          placeholder="Y 1kordinatasini kiriting"
        />
        <input
          className="form-control"
          type="number"
          id="number"
          placeholder="X2 kordinatasini kiriting"
        />
        <input
          className="form-control"
          type="number"
          id="number"
          placeholder="Y2 kordinatasini kiriting"
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

import React, { useState } from "react";

export default function Question5() {
  const [message, setMessage] = useState("");

  const check = (a, b, c) => {
    isNaN(a) || isNaN(b) || isNaN(c)
      ? setMessage("Iltimos sonlarni kiriting !!!!")
      : a <= 0 || b <= 0 || c <= 0
      ? setMessage("Paralelipiped tomoni musbat bolishi kerak")
      : setMessage(`V=${a * b * c}, S=${2 * (a * b + b * c + a * c)}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value1 = parseFloat(event.target.elements[0].value);
    const value2 = parseFloat(event.target.elements[1].value);
    const value3 = parseFloat(event.target.elements[2].value);
    check(value1, value2, value3);
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
          placeholder="a ni kiriting"
        />
        <input
          className="form-control"
          type="number"
          id="number"
          placeholder="b ni kiriting"
        />
        <input
          className="form-control"
          type="number"
          id="number"
          placeholder="c ni kiriting"
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

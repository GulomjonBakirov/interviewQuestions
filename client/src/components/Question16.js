import React, { useState } from "react";

export default function Question16() {
  const [message, setMessage] = useState("");

  const check = (a, b, c) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setMessage("Iltimos sonlarni kiriting !!!!");
    } else {
      let x = b;
      let y = a;
      let z = c;
      a = z;
      b = y;
      c = x;

      setMessage(`a=${a} b=${b} c=${c}`);
    }
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
      <form onSubmit={handleSubmit} className="form-group">
        <input
          className="form-control"
          type="number"
          id="number"
          placeholder="A ni kiriting"
        />
        <input
          className="form-control"
          type="number"
          id="number"
          placeholder="B ni kiriting"
        />
        <input
          className="form-control"
          type="number"
          id="number"
          placeholder="C ni kiriting"
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

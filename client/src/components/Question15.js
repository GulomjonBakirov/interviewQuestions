import React, { useState } from "react";

export default function Question15() {
  const [message, setMessage] = useState("");

  const check = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      setMessage("Iltimos sonlarni kiriting !!!!");
    } else {
      let x = b;
      let y = a;
      a = x;
      b = y;
      setMessage(`a=${a} b=${b}`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value1 = parseFloat(event.target.elements[0].value);
    const value2 = parseFloat(event.target.elements[1].value);
    check(value1, value2);
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

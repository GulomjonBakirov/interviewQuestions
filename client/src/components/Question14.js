import React, { useState } from "react";

export default function Question14() {
  const [message, setMessage] = useState("");

  const check = (a, b, c, d, e, f) => {
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e) || isNaN(f)) {
      setMessage("Iltimos sonlarni kiriting !!!!");
    } else {
      const x = Math.sqrt(Math.pow(a - c, 2) + Math.pow(b - d, 2));
      const y = Math.sqrt(Math.pow(a - e, 2) + Math.pow(b - f, 2));
      const z = Math.sqrt(Math.pow(c - e, 2) + Math.pow(d - f, 2));
      const p = (x + y + z) / 2;
      const S = Math.sqrt(p * (p - x) * (p - y) * (p - z));
      setMessage(`S=${S} , P=${p}`);
      console.log(x, y, z);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value1 = parseFloat(event.target.elements[0].value);
    const value2 = parseFloat(event.target.elements[1].value);
    const value3 = parseFloat(event.target.elements[2].value);
    const value4 = parseFloat(event.target.elements[3].value);
    const value5 = parseFloat(event.target.elements[4].value);
    const value6 = parseFloat(event.target.elements[5].value);
    check(value1, value2, value3, value4, value5, value6);
    console.log(value1, value2, value3, value4, value5, value6);
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
        <input
          className="form-control"
          type="number"
          id="number"
          placeholder="X3 kordinatasini kiriting"
        />
        <input
          className="form-control"
          type="number"
          id="number"
          placeholder="Y3 kordinatasini kiriting"
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

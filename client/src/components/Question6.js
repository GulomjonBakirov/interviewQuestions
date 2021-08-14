import React, { useState } from "react";

export default function Question6() {
  const [message, setMessage] = useState("");

  const check = (a, b) => {
    isNaN(a) || isNaN(b)
      ? setMessage("Iltimos son kiriting !!!!")
      : setMessage(
          `o'rta arifmetik = ${(a + b) / 2} , ${
            a <= 0 || b <= 0
              ? `O'rta geometrik uchun 2 la son ham musbat bolishi kerak,`
              : ` O'rta geometrik = ${Math.sqrt(a * b)} ,`
          } ${
            a === 0 || b === 0
              ? "10  va 11 savol uchun sonlardan hech biri 0 ga teng bolishi kerak emas"
              : `C(a+b) =  ${a + b}, C(a*b) = ${a * b}, a^2= ${Math.pow(
                  a,
                  2
                )} ,b^2 = ${Math.pow(b, 2)}, |a|=${Math.abs(a)}, |b|=${Math.abs(
                  b
                )}`
          }
          `
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
      <form onSubmit={handleSubmit} className="form-group">
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

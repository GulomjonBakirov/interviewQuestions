import React, { useState } from "react";

export default function Question9() {
  const [message, setMessage] = useState("");

  const check = (a, b) => {
    isNaN(a) || isNaN(b)
      ? setMessage("Iltimos sonni kiriting !!!!")
      : a <= 0 || b <= 0
      ? setMessage("Aylana yuzi va uzunligimusbat bolishi kerak")
      : setMessage(
          `R1 = ${a / (2 * Math.PI)} S=${
            Math.PI * Math.pow(a / (2 * Math.PI), 2)
          },  R2 = ${Math.sqrt(b / Math.PI)} L=${
            2 * Math.PI * Math.sqrt(b / Math.PI)
          }`
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
          placeholder="13 savol uchun L ni kiritng"
        />
        <input
          className="form-control"
          type="number"
          id="number"
          placeholder="14 savol uchun S ni kiritng"
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

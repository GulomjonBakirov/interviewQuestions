import React, { useState } from "react";

export default function Question11() {
  const [message, setMessage] = useState("");

  const check = (a, b, c) => {
    isNaN(a) || isNaN(b) || isNaN(c)
      ? setMessage("Iltimos sonlarni kiriting !!!!")
      : setMessage(
          `AC=${Math.abs(c - a)} BC=${Math.abs(c - b)} AC+BC =${
            Math.abs(c - a) + Math.abs(c - b)
          } , ${
            c < b && c > a
              ? `AC*BC=${Math.abs(c - a) * Math.abs(b - c)}`
              : `18 savol uchun c a va b ortasida joylashishi kerak`
          } `
        );
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

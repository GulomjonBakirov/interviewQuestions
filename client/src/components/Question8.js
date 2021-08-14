import React, { useState } from "react";

export default function Question8() {
  const [message, setMessage] = useState("");

  const check = (a, b) => {
    isNaN(a) || isNaN(b)
      ? setMessage("Iltimos sonlarni kiriting !!!!")
      : a <= 0 || b <= 0
      ? setMessage("Aylana radiuse musbat bolishi kerak")
      : a < b
      ? setMessage(`R1 > R2 shart qanoatlanitirmadi`)
      : setMessage(
          `S1=${Math.PI * a}, S2=${Math.PI * b}, S3=${Math.PI * (a - b)}`
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
          placeholder="R1 ni kiriting"
        />
        <input
          className="form-control"
          type="number"
          id="number"
          placeholder="R2 ni kiriting"
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

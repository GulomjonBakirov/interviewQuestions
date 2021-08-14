import React, { useState } from "react";

export default function Question4() {
  const [message, setMessage] = useState("");

  const check = (value) => {
    isNaN(value)
      ? setMessage("Iltimos sonni kiriting !!!!")
      : value <= 0
      ? setMessage("Kvadrat tomoni musbat bolishi kerak")
      : setMessage(`V = ${Math.pow(value, 3)}, S=${6 * Math.pow(value, 2)}`);
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
          placeholder="a ni kiritng"
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

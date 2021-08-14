import React, { useState } from "react";

export default function Question7() {
  const [message, setMessage] = useState("");

  const check = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      setMessage("Iltimos son kiriting !!!!");
    } else {
      if (a <= 0 || b <= 0) {
        setMessage("To'gri To`rtburchak katetlari musbat bolishi kerak");
      } else {
        const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        setMessage(`c=${c}, P=${a + b + c}`);
      }
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

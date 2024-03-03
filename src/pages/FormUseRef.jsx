import React, { useRef } from "react";
const FormUseRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const genderRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    console.log(genderRef.current.value);

    // api for create registration form
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input ref={nameRef} type="text" placeholder="Enter name" /> <br />
        <input ref={emailRef} type="email" placeholder="Enter email" /> <br />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter password"
        />{" "}
        <br />
        <select ref={genderRef}>
          <option>Male</option>
          <option>Female</option>
        </select>
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default FormUseRef;

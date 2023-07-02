import React from "react";
import { useState } from "react";

const Debouncing = () => {
  let timer;
  let count = 0;
  

  const debounce = (fn, delay) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };

  const apiCall = () => {
    debounce(() => {
      console.log("API CALL no of times", count++);
    }, 500);
  };

  return (
    <React.Fragment>
      <h1>Debouncing Implementation in React</h1>
      <input type="text" onChange={apiCall} />
    </React.Fragment>
  );
};

export default Debouncing;

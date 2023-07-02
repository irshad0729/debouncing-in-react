import { useState, useEffect } from "react";

const Throttling = () => {
  const [normalCount, setNormalCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);

  let nCount = 0;
  let tCount = 0;
  let isScroll = true;

  const normalCountFunc = () => {
    setNormalCount(nCount++);
  };

  const throttleCountFunc = () => {
    if (isScroll === true) {
      setThrottleCount(tCount++);
      isScroll = false;
      setTimeout(() => {
        isScroll = true;
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", normalCountFunc);
    window.addEventListener("scroll", throttleCountFunc);
    return () => {
      window.removeEventListener("scroll", normalCountFunc);
      window.removeEventListener("scroll", throttleCountFunc);
    };
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <h1 style={{ position: "sticky", top: 0 }}>
        Normal count upon scroll: {normalCount}
        <br />
        Throttle count upon scroll: {throttleCount}
      </h1>
      <h3></h3>
    </div>
  );
};

export default Throttling;

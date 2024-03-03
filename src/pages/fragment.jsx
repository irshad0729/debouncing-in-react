import React from "react";
const FragmentPage = () => {
  return (
    <React.Fragment>
      {Array(1500)
        .fill("")
        .map((e, i) => (
          <div key={i}>{i}</div>
        ))}
    </React.Fragment>
  );
};

export default FragmentPage;

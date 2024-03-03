import { Log } from "irshad-color-log";
import { useEffect } from "react";

const PackageTest = () => {

  useEffect(() => {
    Log.success("Whatever doesn't kill you makes you stronger");
    Log.danger("Watu Izzu Mantasha, Watu Zillu Mantasha");
  }, []);
  
  return (
    <>
      <h1>npm i irshad-color-log</h1>
    </>
  );
};

export default PackageTest;

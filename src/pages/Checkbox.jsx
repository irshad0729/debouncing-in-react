import { Fragment, useState } from "react";
import InputCheckbox from "./components/InputCheckbox";
const Checkbox = () => {
  const [number, SetNumber] = useState('');
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (option) => {
    console.log(number);
    setSelectedValues((prev) => {
      const newSelected = prev.includes(option)
        ? prev.filter((el) => el !== option)
        : [...prev, option];

      if (newSelected.length > number) {
        newSelected.shift();
      }

      return newSelected;
    });
  };
  const handleSelectChange = (event) => {
    SetNumber(event.target.value);
  };

  return (
    <Fragment>
      <h2>Checkbox selection based on input</h2>

      <select id="dropdown" value={number} onChange={handleSelectChange}>
        <option value="">-- Select --</option>
        <option value="1"> 1</option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
        <option value="4"> 4</option>
        <option value="5"> 5</option>
      </select>
      <br />
      <br />
      <br />
      <br />
      <br />

      {Array.from({ length: 5 }, (_, index) => (
        <InputCheckbox
          selectedValues={selectedValues}
          name={`checkbox${index}`}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
    </Fragment>
  );
};

export default Checkbox;

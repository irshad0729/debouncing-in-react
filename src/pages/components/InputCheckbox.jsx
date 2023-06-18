const InputCheckbox = ({ selectedValues, name, handleCheckboxChange }) => {
  return (
    <input
      type="checkbox"
      id={name}
      checked={selectedValues.includes(name)}
      onChange={() => {
        handleCheckboxChange(name);
      }}
    />
  );
};

export default InputCheckbox;

import React from 'react';

const SelectField = ({ name, register, error, options, defaultValue }) => {
  return (
    <>
      <select
        className="form-control select2"
        style={{ width: "100%" }}
        {...register(name)}
        defaultValue={defaultValue}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-danger">{error.message}</span>}
    </>
  );
};

export default SelectField;

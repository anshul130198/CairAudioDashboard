import React from 'react';

const InputField = ({ label, type, placeholder, defaultValue,readOnly, onChange, error,className,name,register }) => {
  return (
     <>
       <input
        type={type}
        className={className}
        placeholder={placeholder}
        {...register(name)}
        defaultValue={defaultValue}
        name={name}
        id={name}
        readOnly={readOnly}
      />
   </>
  );
};

export default InputField;

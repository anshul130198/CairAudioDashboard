import React from 'react';

const InputField = ({ label, type, placeholder, value,readOnly, onChange, error,className,name,register }) => {
  return (
     <>
       <input
        type={type}
        className={className}
        placeholder={placeholder}
        {...register(name)}
        name={name}
        id={name}
        readOnly={readOnly}
      />
   </>
  );
};

export default InputField;

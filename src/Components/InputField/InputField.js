import React from 'react';

const InputField = ({ label, type, placeholder, value, onChange, error,className,name,register }) => {
  return (
     <>
       <input
        type={type}
        className={className}
        placeholder={placeholder}
        {...register(name)}
        name={name}
        id={name}
      />
   </>
  );
};

export default InputField;

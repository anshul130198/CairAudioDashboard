import React from "react";
import styles from "./InputField.module.scss";
// import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import { useFormContext, Controller } from "react-hook-form";
// import ErrorMessage from "../ErrorMessage";

const InputField = ({
  textColor,
  label,
  fieldName,
  placeholder,
  value,
  onChange,
  disabled,
  type,
  onIconClick: propsOnIconClick,
  containerOverrideClassName,
  labelClassName,
  inputOverrideClassName,
  suffixIcon,
  suffixIconText,
  rules,
  register,
  error,
  suffixIconOverrideClassName,
  onEnter,
  info,
  maxlength,
  overrideErrorClassName,
  style,
  min,
  max,
  step,
  readOnly,
  isControllerAllowed = false,
  className,
  ...rest
}) => {
  const { control } = useFormContext();
  const getClassNames = () => {
    const classNames = [styles.input];
    if (inputOverrideClassName) {
      classNames.push(inputOverrideClassName);
    }
    if (disabled) {
      classNames.push(styles.disabledInput);
    }
    if (error) {
      classNames.push(styles.invalid);
    }
    return classNames.join(" ");
  };

  const onIconClick = () => {
    propsOnIconClick && propsOnIconClick();
  };

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      onEnter && onEnter();
    }
  };
  return (
    <>
      {isControllerAllowed ? (
        <Controller
          shouldUnregister={false}
          name={fieldName}
          control={control}
          defaultValue={control?.defaultValues?.fieldName}
          render={({ field, fieldState: { error } }) => (
            <input
              style={{ color: textColor }}
              type={type}
              name={field?.name}
              register={register}
              defaultValue={value}
              onChange={field?.onChange}
              placeholder={placeholder}
              onKeyPress={onKeyPress}
              maxLength={maxlength}
              min={min}
              max={max}
              readOnly={readOnly}
              step={step}
              {...field}
              {...register(fieldName)}
              {...rest}
            />
          )}
        />
      ) : (
        <input
        className={className}
          style={{ color: textColor }}
          type={type}
          name={fieldName}
          register={register}
          defaultValue={value}
          onChange={onChange}
          placeholder={placeholder}
          onKeyPress={onKeyPress}
          maxLength={maxlength}
          min={min}
          max={max}
          readOnly={readOnly}
          step={step}
          {...rest}
        />
      )}
      {suffixIcon && (
        <i
          onClick={onIconClick}
          className={`${suffixIcon} ${
            styles.suffixIcon
          } ${suffixIconOverrideClassName} ${
            propsOnIconClick ? styles.cursor_pointer : ""
          }`}
        />
      )}
      {suffixIconText && (
        <div className={styles.suffixIconText}>{suffixIconText}</div>
      )}
      {/* <ErrorMessage
        error={error}
        overrideErrorClassName={overrideErrorClassName}
      /> */}
    </>
  );
};

InputField.defaultProps = {
  type: "text",
  rules: {},
  onChange: null,
  register: () => {},
  containerOverrideClassName: "",
  labelClassName: "",
  suffixIconOverrideClassName: "",
  suffixIconText: "",
  readOnly: false,
};

export default React.memo(InputField);

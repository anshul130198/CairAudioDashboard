import React, { useEffect, useState } from "react";
import Select from "react-select";
import classes from "./MultiSelectDropdown.module.scss";
import { Controller, useFormContext } from "react-hook-form";
// import ErrorMessage from "../../ErrorMessage/ErrorMessage";

const MultiselectDropdown = (props) => {
  const { control, setValue } = useFormContext();
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      borderColor: props?.error?.length > 0 ? "red" : "#dadce0",
      marginTop: 10,
      padding: 4,
      width: "100%",
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        padding: "10px",
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? "#141e30"
          : isFocused
          ? "#596372"
          : undefined,
        color: isDisabled
          ? "#596372"
          : isSelected
          ? "#141e30"
          : isFocused
          ? "#f2f2f2"
          : "#141e30",
        borderColor: isDisabled
          ? "#f2f2f2"
          : isSelected
          ? "#f2f2f2"
          : isFocused
          ? "#f2f2f2"
          : "#596372",
        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? "#141e30"
              : "#141e30"
            : undefined,
        },
      };
    },
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "white",
        color: "#141e30",
        ":hover": {
          backgroundColor: "red",
          color: "white",
        },
      };
    },
    multiValueLabel: (styles) => ({
      ...styles,
      color: "white",
      backgroundColor: "#141e30",
      borderRadius: 0,
      textTransform: "capitalize",
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: "white",
      backgroundColor: "#141e30",
      ":hover": {
        backgroundColor: "red",
        color: "white",
      },
      borderRadius: 0,
    }),
  };
  let options = [];
  if (props?.data?.data) {
    const newData = props?.data?.data.filter(
      (elem) => elem.totalNoOfQuestions > 0
    );
    newData.map((item) => {
      const opt = { label: item?.name, value: item?._id };
      options.push(opt);
    });
  }
  if (props?.data) {
    options = props?.data;
  }

  return (
    // <div className={`${classes.container} ${props.className}`}>
    <>
      {props?.hideController ? (
        <Controller
          control={control}
          name={props?.fieldName}
          rules={{ required: true }}
          shouldUnregister={false}
          render={({ field, fieldState: { error } }) => (
            <>
              <Select
                key={props.category}
                isMulti={props?.isMulti}
                options={options}
                value={props?.selected}
                isDisabled={props?.disabled}
                onChange={(selectedValue, action) =>
                  props?.handleChange(selectedValue, action)
                }
                placeholder={
                  props?.category.length > 0
                    ? props?.category
                    : "Select an option"
                }
                className={classes.multiSelect}
                getOptionLabel={(option) => option?.label}
                getOptionValue={(option) => option?.label}
                styles={colourStyles}
                {...props}
                // {...control?.register(props?.fieldName?.toString())}
              />

              {error?.message?.length > 0 && (
                // <ErrorMessage
                //   error={error?.message}
                //   overrideErrorClassName={props?.overrideErrorClassName}
                // />
                <p>error</p>
              )}
            </>
          )}
        />
      ) : (
        <>
          <Select
            key={props.category}
            isMulti={props?.isMulti}
            options={options}
            value={props?.selected}
            isDisabled={props?.disabled}
            onChange={(selectedValue, action) =>
              props?.handleChange(selectedValue, action)
            }
            placeholder={
              props?.category.length > 0 ? props?.category : "Select an option"
            }
            className={classes.multiSelect}
            getOptionLabel={(option) => option?.label}
            getOptionValue={(option) => option?.label}
            styles={colourStyles}
            {...props}
          />
          {props?.error?.message?.length > 0 && (
            // <ErrorMessage
            //   error={props?.error?.message}
            //   overrideErrorClassName={props?.overrideErrorClassName}
            // />
            <p>error</p>
          )}
        </>
      )}
      {/* </div> */}
    </>
  );
};

export default React.memo(MultiselectDropdown);

import React from "react";

export interface FieldSetProps
  extends React.ComponentPropsWithoutRef<"fieldset"> {
  isRequired?: boolean;
  errorMessage?: string;
  label: string;
}

export const FieldSet = React.forwardRef<HTMLFieldSetElement, FieldSetProps>(
  (
    {
      children,
      className,
      label,
      isRequired = false,
      errorMessage,
      ...htmlProps
    },
    ref,
  ) => {
    console.log("errorMessage", errorMessage, isRequired, className, label);
    return (
      <fieldset
        ref={ref}
        {...htmlProps}
        className={`${className} flex flex-col gap-2 group ${errorMessage ? "[&>input]:border-red-500" : ""}`}
      >
        <label
          className={`${isRequired ? "after:content-['*']" : ""} after:p-2`}
        >
          {label}
        </label>
        {children}
        {errorMessage && (
          <span className="text-red-errors">{errorMessage}</span>
        )}
      </fieldset>
    );
  },
);

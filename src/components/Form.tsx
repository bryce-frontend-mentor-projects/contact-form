import React from "react";

export type FormProps = React.ComponentPropsWithoutRef<"form">;

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, ...htmlProps }, ref) => {
    return (
      <form
        {...htmlProps}
        ref={ref}
        className={`${className ?? ""} tablet:grid tablet:grid-cols-2 mobile:flex mobile:flex-col gap-x-[16px] tablet:gap-y-[24px] desktop:w-[730px] tablet:w-[690px]`}
      />
    );
  },
);

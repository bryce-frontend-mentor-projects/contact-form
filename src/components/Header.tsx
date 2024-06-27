import React from "react";

export type HeaderProps = React.ComponentPropsWithoutRef<"header">;

export const Header = ({ className, ...htmlProps }: HeaderProps) => {
  return <h1 {...htmlProps} className={`${className} text-heading`} />;
};

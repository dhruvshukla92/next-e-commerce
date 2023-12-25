import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: Props) => {
  return <div className={`${className}  mx-auto  px-8 py-10`}>{children}</div>;
};

export default Container;

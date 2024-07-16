import React from "react";

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <main className="max-w-screen-lg w-full flex flex-col space-y-12 relative">
      {children}
    </main>
  );
};

export default Main;

import * as React from 'react';

const contextCreator = ({ initValue, name, children }) => {
  const ctx = React.createContext(name);

  return (
    <ctx.Provider value={initValue}>
      {children}
    </ctx.Provider>
  );
};

export default contextCreator;

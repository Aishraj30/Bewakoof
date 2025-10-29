import React from 'react';

export const lazyWithDelay = (importFunc, delay = 1000) => {
  return React.lazy(() =>
    Promise.all([
      importFunc(),
      new Promise(resolve => setTimeout(resolve, delay)),
    ]).then(([moduleExports]) => moduleExports)
  );
};

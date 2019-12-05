import React from 'react';

// export const PaperScopeContext = React.createContext();
//
// export default WrappedComponent => props => (
//   <PaperScopeContext.Consumer>
//     {context => <WrappedComponent {...props} {...context} />}
//   </PaperScopeContext.Consumer>
// );

export const contexts = {};

export const createPaperScopeContext = id => {
  if (contexts[id] === undefined) {
    contexts[id] = React.createContext();
  }
  return contexts[id];
};

export const renderWithPaper = (id, render) => {
  if (contexts[id] === undefined) {
    contexts[id] = React.createContext();
  }
  const context = contexts[id];
  return (
    <context.Consumer>
      {({ paper }) => render(paper)}
    </context.Consumer>
  );
};

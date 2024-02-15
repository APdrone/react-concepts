# Rendering the root component and strict mode:

we can add index.js file (src\index.js) and use the same file to render our App component

```ts
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello React</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
```

# debugging

# props immutabiltity and one way data flow

Props are used to pass data from parent component to child components(down the component tree)

props are read-only

revisit this video

# Rules of JSX:

revisit this video

import React from 'react';
// import logo from './logo.svg';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  const [swaggerUrl, setSwaggerUrl] = React.useState('');

  async function fetchPetStoreUrl() {

  }

  React.useEffect(() => {
    setTimeout(() => {
      setSwaggerUrl("https://petstore.swagger.io/v2/swagger.json");
    }, 4000)
  }, []);
  return (
    <React.Fragment>
      {swaggerUrl ? (
        <SwaggerUI url={swaggerUrl} />
      ) : (
        <p>Fetching Swagger URL</p>
      )}
    </React.Fragment>
  )
}

export default App;

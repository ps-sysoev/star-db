import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./components/app/app";

// import SwapiService from "./services/swapi-service";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

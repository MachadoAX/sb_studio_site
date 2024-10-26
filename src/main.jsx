import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Galeria from './routes/Galeria.jsx';
import Home from './routes/Home.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErroPage from './routes/ErroPage.jsx';
import Precos from './routes/Precos.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErroPage/>,
    children: [      
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/galeria",
        element: <Galeria/>,
      },
      {
        path: "/sbmusic-tabela-de-precos",
        element: <Precos/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

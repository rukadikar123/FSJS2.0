import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import App from './App';

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/Home',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import App from './App';

const approter=createBrowserRouter([
  
 {
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
  ]
 }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={approter}/>
  </React.StrictMode>
);


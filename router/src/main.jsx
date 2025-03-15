import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/about/About.jsx'
import Product from './components/product/Product.jsx'
import GitHub, { githubInfoLoader } from './components/gitHub/GitHub.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='product/:userId?' element={<Product/>}/>
    <Route 
    loader ={githubInfoLoader}
    path='github' 
    element={<GitHub/>}/>


  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

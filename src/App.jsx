import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Activity from './Pages/Activity/Activity'
import Performance from './Pages/Performance/Performance'
import AboutUs from './Pages/AboutUs/AboutUs'
import Contact from './Pages/Contact/Contact'
import ProductDetail from './Pages/Products/ProductDetail'
import ActivityDetail from './Pages/Activity/ActivityDetail'
import PerformanceDetail from './Pages/Performance/PerformanceDetail'
import { createContext, useEffect, useState } from 'react'

export const StyleContext = createContext();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [styleNone, setStyleNone] = useState();

  return (
    <StyleContext.Provider value={{styleNone, setStyleNone}}>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='productdetail/:id' element={<ProductDetail/>}/>

        <Route path='activity' element={<Activity/>}/>
        <Route path='activitydetail/:id' element={<ActivityDetail/>}/>
        
        <Route path='performance' element={<Performance/>}/>
        <Route path='performancedetail/:id' element={<PerformanceDetail/>}/>
        
        <Route path='aboutus' element={<AboutUs/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </StyleContext.Provider>
  )
}

export default App

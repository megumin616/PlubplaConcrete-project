import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Activity from './Pages/Activity/Activity'
import Performance from './Pages/Performance/Performance'
import AboutUs from './Pages/AboutUs/AboutUs'
import Contact from './Pages/Contact/Contact'
import ProductDetail from './Pages/Products/ProductDetail'
import ActivityDetail from './Pages/Activity/ActivityDetail'
import PerformanceDetail from './Pages/Performance/PerformanceDetail'

function App() {

  return (
    <BrowserRouter>
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
  )
}

export default App

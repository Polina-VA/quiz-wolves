import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Footer from '../widgets/Footer';
import HomePage from '../page/HomePage';
import ThemesPage from '../page/ThemesPage';
import apiAxiosInstance from '../services/apiAxiosInstance'


function App() {
  const [themes, setThemes] = useState([]);

  const onHandleGetAllThemes = async() => {
    try {
      const {data} = await apiAxiosInstance.get('/themes')
      setThemes(data.themes)
    } catch (error) {
      console.log(error);
    }
  }




  useEffect(() => {
    onHandleGetAllThemes()
  }, [])

  return (
<div className='mainContainer'>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/themes' element={<ThemesPage themes={themes}/>}/>

      <Route path='/' element={<HomePage/>}/>

    </Routes>
    <Footer/>
</div>
  )
}

export default App

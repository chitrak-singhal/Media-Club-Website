import { useState } from 'react'
import './index.css'
import './App.css'
import {Routes,Route, Router} from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage'
import ArticlesPage from './pages/articles/ArticlesPage'
import SurveysPage from './pages/surveys/SurveysPage'
import Upload from './pages/upload/Upload'
import Update from './pages/update/Update'
import Delete from './pages/delete/Delete'
import Login from './pages/login/Login'
import PrivateRoutes from './components/PrivateRoute'
import Manage from './pages/manage/Manage'
import About from './pages/about/About'

function App() {
  const[session, setSession] = useState(false);

  return (
    <div className='App font-opensans'>
      <Routes>
        <Route index path="/" element={<HomePage />}/>
        <Route path='/blog/:id' element={<ArticleDetailPage />}/>
        <Route path='/blog/' element={<ArticlesPage/>}/>
        <Route element={<PrivateRoutes/>}>
            <Route path ='/manage/' element={<Manage/>}/>
            <Route path='/upload/' element={<Upload/>}/>
            <Route path='/update/' element={<Update/>}/>
            <Route path='/delete/' element={<Delete/>}/>
        </Route>
        <Route path='/login/' element={<Login/>}/>
        <Route path='/surveys/' element={<SurveysPage/>}/>
        <Route path='/about/' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App

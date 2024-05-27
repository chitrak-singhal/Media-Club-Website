import { useState } from 'react'
import './index.css'
import './App.css'
import {Routes,Route, Router} from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage'
import ArticlesPage from './pages/articles/ArticlesPage'
import SurveysPage from './pages/surveys/SurveysPage'
import Upload from './pages/upload/Upload'

function App() {

  return (
    <div className='App font-opensans'>
      <Routes>
        <Route index path="/" element={<HomePage />}/>
        <Route path='/blog/:id' element={<ArticleDetailPage />}/>
        <Route path='/blog/' element={<ArticlesPage/>}/>
        <Route path='/upload/' element={<Upload/>}/>
        <Route path='/surveys/' element={<SurveysPage/>}/>
      </Routes>
    </div>
  )
}

export default App

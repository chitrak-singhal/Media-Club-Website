import { useState } from 'react'
import './index.css'
import './App.css'
import {Routes,Route, Router} from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage'
import Articles from './pages/articles/Articles'

function App() {

  return (
    <div className='App font-opensans'>
      <Routes>
        <Route index path="/" element={<HomePage />}/>
        <Route path='/blog/:id' element={<ArticleDetailPage />}/>
        <Route path='/blog/' element={<Articles/>}/>
      </Routes>
    </div>
  )
}

export default App

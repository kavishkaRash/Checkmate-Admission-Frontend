
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import StudentVisaKoreaPage from './pages/studentVisaKoreaPage.jsx'
import Faq from './pages/faqPage'
import ContactUs from './pages/contactUsPage'
import Admin from './pages/admin.jsx'
import LoginPage from './pages/loginPage.jsx'

function App() {


  return (
    <BrowserRouter>
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/korea-student-visa" element={<StudentVisaKoreaPage  />} />
          <Route path="/faq" element={<Faq/>} />
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/admin/*' element={<Admin />}/>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

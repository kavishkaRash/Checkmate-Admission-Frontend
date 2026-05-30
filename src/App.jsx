
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import StudentVisaKoreaPage from './pages/studentVisaKoreaPage.jsx'
import Faq from './pages/aboutUs.jsx'
import ContactUs from './pages/contactUsPage'
import Admin from './pages/admin.jsx'
import LoginPage from './pages/loginPage.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/register.jsx'
import AppointmentPage from './pages/appoinmentPage.jsx'
import HomePage from './pages/homePage.jsx'
import AboutUs from './pages/aboutUs.jsx'

function App() {


  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Toaster position='top-right' />
        <div className="w-full min-h-screen">
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/korea-student-visa" element={<StudentVisaKoreaPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/appointment' element={<AppointmentPage />} />
            <Route path='/admin/*' element={<Admin />} />

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </GoogleOAuthProvider>
    </BrowserRouter>
  )
}

export default App

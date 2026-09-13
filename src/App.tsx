import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar/navbar'
import Banner from './components/Hero/banner'
import Footer from './components/Footer/footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Banner/>

      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  )
}

export default App
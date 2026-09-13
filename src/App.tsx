import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar/navbar'
import Banner from './components/Hero/banner'
import Footer from './components/Footer/footer'
import type { ITechnology } from './components/types/technologyType'
import { Suspense, useState } from 'react'
import Technologies from './components/Technologies/Technologies'

const technologiesFetch = async () : Promise<ITechnology[]> => {
  const res = await fetch("technologies.json")
  const data = await res.json()
  return data;
}

function App() {
const [technologiesPromise] = useState(() => technologiesFetch())

  return (
    <div className="container mx-auto font-jakarta">
      <Navbar/>
      <Banner/>
      <Suspense fallback={<p className='text-red-500 font-bold text-2xl text-center'>loading Technologies.....</p>}>
        <Technologies technologiesPromise = {technologiesPromise}/>
      </Suspense>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App
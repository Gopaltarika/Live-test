import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import MyHeader from './components/MyHeader';
import SevenAi from './components/SevenAi';
import Statistics from './components/Statistics';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import BackToTop from './components/BackToTop';
import stocks from "./assets/images/svg/stocks.svg";
function App() {
  const [loader, setloader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloader(false)
    }, 2000);
  }, [])
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, [])
  return (
    <>
      {loader ? (<div className=' bg-body-color position-fixed d-flex flex-column align-items-center justify-content-center w-100 h-100 top-0 bottom-0 end-0 start-0 z-3'>
        <img src={stocks} alt="preloader" width={150} className='anime-bounce' />
        <div className="loader mt-5"></div>
      </div >) : (<div className='bg-body-color'>
        <MyHeader />
        <SevenAi />
        <Statistics />
        <BackToTop />
      </div>)}
    </>
  );
}

export default App;

import clockBg from '../assets/clock_background.jpg';
import buildingsBg from '../assets/buildings_background.jpg';
import stairsBg from '../assets/stairs_background.jpg';
import { useEffect, useState } from 'react';
import Footer from './Footer';

const Home = () => {
  const images = [clockBg, buildingsBg, stairsBg];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="h-full pt-[98px] flex flex-col justify-center duration-1000"
      style={{
        background: `url(${images[currentIndex]}) center/cover`,
      }}
    >
      <img src={buildingsBg} className=' hidden ' alt="" />
      <img src={stairsBg} className=' hidden ' alt="" />
      <img src={clockBg} className=' hidden ' alt="" />


      <div className="sm:px-20 px-10 mt-10 flex-1 sm:mt-0 flex flex-col justify-center ">
        <h5 className="tracking-[12px] text-xl 2xl:text-2xl">BIENVENIDOS</h5>
        <h1 className="text-[50px] sm:text-[90px] 2xl:text-[110px] font-semibold tracking-wide mt-14 leading-[50px] sm:leading-[90px]">Nexus Abogados</h1>
        <h2 className="text-[20px] mt-5 sm:text-[50px] 2xl:text-[90px] tracking-wider">Soluciones Integrales.</h2>
      </div>

    <div className='sm:px-20 px-10' >
    <Footer/>

    </div>
    </div>
  );
};

export default Home;

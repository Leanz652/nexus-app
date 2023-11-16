import clockBg from '../assets/clock_background.jpg';
import buildingsBg from '../assets/buildings_background.jpg';
import stairsBg from '../assets/stairs_background.jpg';
import { useEffect, useState } from 'react';

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
      className="h-full flex items-center duration-1000"
      style={{
        background: `url(${images[currentIndex]}) center/cover`,
      }}
    >
      <div className="sm:px-20 px-10 mt-10 sm:mt-0">
        <h5 className="tracking-[12px] text-2xl">BIENVENIDOS</h5>
        <h1 className="text-[50px] sm:text-[110px] font-semibold tracking-wide mt-14 leading-[50px] sm:leading-[90px]">Nexus Abogados</h1>
        <h2 className="text-[20px] mt-5 sm:text-[70px] tracking-wider">Soluciones Integrales.</h2>
      </div>
    </div>
  );
};

export default Home;

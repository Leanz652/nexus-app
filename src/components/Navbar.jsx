import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoWhite from '../assets/logoWhite.svg';
import WhatsappLogo from '../assets/whatsapp.svg';
import BarsLogo from '../assets/bars-solid-white.svg';

const Navbar = () => {
  const [navOpen, setnav] = useState(false);

  const openNav = () => {
    setnav(!navOpen);
    // console.log(navOpen);
  };

  return (
    <section className="absolute h-[98px] flex w-full sm:px-20 px-16 justify-between items-center">
      <div className="z-20">
        <NavLink to={'/nexus-app/'}>
          {' '}
          <img src={LogoWhite} alt="Logo" />{' '}
        </NavLink>
      </div>
      <div className="hidden items-center gap-4 sm:flex">
        <NavLink to={'/nexus-app/propuesta'}>Nuestra propuesta</NavLink>
        <span>|</span>
        <NavLink to={'/nexus-app/area'}>Areas</NavLink>
        <span>|</span>
        <NavLink to={'/nexus-app/contacto'}>Contacto</NavLink>

        <a
          href="https://api.whatsapp.com/send?phone=5491123976686&text=Estoy interesado en asesoría jurídica"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className=" scale-75 " src={WhatsappLogo} alt="Whatsapp" />
        </a>
      </div>
      <div className="sm:hidden">
        <div onClick={openNav} className="z-50 absolute top-[38px]">
          <img src={BarsLogo} alt="bars" style={{ height: '25px', fill: 'white' }} />
        </div>

        <div
          className={
            navOpen
              ? `flex flex-col h-full w-full fixed left-0 z-10 top-0 duration-500 justify-center gap-5 text-2xl ps-5 bg-black`
              : `flex flex-col h-full w-full fixed left-full z-10 top-0 duration-500 justify-center gap-5 text-2xl ps-5 bg-black`
          }
        >
          <NavLink className={'w-min'} onClick={openNav} to={'/nexus-app/propuesta'}>
            <h2>
              Nuestra <br></br>propuesta
            </h2>
          </NavLink>
          <NavLink className={'w-min'} onClick={openNav} to={'/nexus-app/area'}>
            <h2>Areas</h2>
          </NavLink>
          <NavLink className={'w-min'} onClick={openNav} to={'/nexus-app/contacto'}>
            <h2>Contacto</h2>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

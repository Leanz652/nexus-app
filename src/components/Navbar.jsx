import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [navOpen, setnav] = useState(false);

  const openNav = () => {
    setnav(!navOpen);
    // console.log(navOpen);
  };

  return (
    <section className="flex justify-between p-12">
      <div>
        <NavLink to={'/'}>Logo N/A</NavLink>
      </div>
      <div className="hidden gap-4 sm:flex">
        <NavLink to={'/propuesta'}>Nuestra propuesta</NavLink>
        <span>|</span>
        <NavLink to={'/Area'}>Areas</NavLink>
        <span>|</span>
        <NavLink to={'/Contacto'}>Contacto</NavLink>
        <span>WPP logo</span>
      </div>
      <div className="sm:hidden">
        <span onClick={openNav} className="cursor-pointer">
          |||
        </span>
        <div
          className={
            navOpen
              ? `flex flex-col h-full w-full fixed left-0 z-10 duration-500 justify-center gap-5 text-2xl ps-5 bg-black`
              : `flex flex-col h-full w-full fixed left-full duration-500 justify-center gap-5 text-2xl ps-5 bg-black`
          }
        >
          <NavLink className={'w-min'} onClick={openNav} to={'/propuesta'}>
            <h2>
              Nuestra <br></br>propuesta
            </h2>
          </NavLink>
          <NavLink className={'w-min'} onClick={openNav} to={'/Area'}>
            <h2>Areas</h2>
          </NavLink>
          <NavLink className={'w-min'} onClick={openNav} to={'/Contacto'}>
            <h2>Contacto</h2>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

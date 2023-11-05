const Home = () => {
  return (
    //Le puse el background MD.
    <div className="h-full flex items-center bg-center bg-[url('./assets/buildings_background_md.svg')]">
      <div className="sm:px-20 px-10 mt-10 sm:mt-0">
        <h5 className="tracking-widest text-sm">BIENVENIDOS</h5>
        <h1 className="text-[50px] sm:text-[60px] font-semibold tracking-wide mt-6 leading-[50px] sm:leading-normal">
          Nexus Abogados
        </h1>
        <h2 className="text-[20px] mt-5 sm:text-[40px] tracking-wider">
          Soluciones Integrales.
        </h2>
      </div>
    </div>
  );
};

export default Home;

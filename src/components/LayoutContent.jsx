import Footer  from './Footer';



/* eslint-disable react/prop-types */
const LayoutContent = ({ children, imageUrl }) => {
  return (
    <div className="flex-col pt-[98px] sm:mt-0 flex min-h-full h-auto px-10 sm:px-20 items-center">
      <div className="flex flex-col flex-1 items-center  sm:flex-row  ">
        <div className='flex flex-col sm:flex-row sm:h-3/4' >
        <div className="sm:w-1/2">{children}</div>
        <div className="flex mt-2 sm:mt-0 align-top justify-end ">
          <img src={imageUrl} alt="Imagen" className='sm:h-[85%] ' />
        </div>
        </div>

      </div>
      
      <div className=' mt-auto flex-none w-full pt-5'>
      <Footer />
      </div>

    </div>
  );
};

export default LayoutContent;

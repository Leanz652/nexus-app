import Footer  from './Footer';



/* eslint-disable react/prop-types */
const LayoutContent = ({ children, imageUrl }) => {
  return (
    <div className="flex-col pt-[98px] sm:mt-0 flex min-h-full h-auto px-10 sm:px-20 items-center">
      <div className="flex flex-col flex-1 items-center  sm:flex-row  ">
        <div className="sm:w-1/2 sm:h-3/4">{children}</div>
        <div className="sm:w-1/2 sm:text-right sm:flex sm:flex-row-reverse my-5 sm:m-0">
          <img src={imageUrl} alt="Imagen"/>
        </div>
      </div>
      
      <div className=' mt-auto flex-none w-full pt-5'>
      <Footer />
      </div>

    </div>
  );
};

export default LayoutContent;

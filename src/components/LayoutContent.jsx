/* eslint-disable react/prop-types */
const LayoutContent = ({ children, imageUrl }) => {
  return (
    <div className="flex h-full px-10 sm:px-20 items-center">
      <div className="flex flex-col items-center h-3/4 sm:flex-row  ">
        <div className="sm:w-1/2 sm:h-3/4">{children}</div>
        <div className="sm:w-1/2 sm:text-right sm:flex sm:flex-row-reverse mt-6 sm:m-0">
          <img src={imageUrl} alt="Imagen" className="h-3/4" />
        </div>
      </div>
    </div>
  );
};

export default LayoutContent;

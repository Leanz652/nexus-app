/* eslint-disable react/prop-types */
const LayoutContent = ({ children, imageUrl }) => {
    return (
        <div className="flex h-full px-20 items-center">
            <div className="h-3/4 flex items-center" >
            <div className="w-1/2 h-3/4">
            {children}
          </div>
          <div className="w-1/2 text-right flex flex-row-reverse">
            <img src={imageUrl} alt="Imagen" className=" h-3/4" />
          </div>
            </div>

        </div>
      );
    }

export default LayoutContent;

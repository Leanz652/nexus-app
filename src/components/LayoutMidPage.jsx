/* eslint-disable react/prop-types */
const LayoutMidPage = ({ title, children }) => {
    return (
        <div className="flex flex-col">
        <div className=" text-left mb-10">ICON</div>
        <h2 className="text-lg font-semibold mb-20 ">{title}</h2>
        {children}
      </div>
      );
    }

export default LayoutMidPage;

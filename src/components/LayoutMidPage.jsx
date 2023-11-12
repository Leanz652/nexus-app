/* eslint-disable react/prop-types */
import arrowLogo from '../assets/Arrow.svg';

const LayoutMidPage = ({ title, children }) => {
  return (
    <div className="flex flex-col sm:w-4/5 w-full">
      <div className="mb-6">
        <img src={arrowLogo} alt="arrow" height={30} width={30} />
      </div>

      <h2 className="sm:text-[70px] text-[35px] mb-10 sm:font-thin">{title}</h2>
      {children}
    </div>
  );
};

export default LayoutMidPage;

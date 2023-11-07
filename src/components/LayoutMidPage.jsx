/* eslint-disable react/prop-types */
import arrowLogo from '../assets/Arrow.svg';

const LayoutMidPage = ({ title, children }) => {
  return (
    <div className="flex flex-col w-4/5">
      <div className="mb-6">
        <img src={arrowLogo} alt="arrow" height={30} width={30} />
      </div>

      <h2 className="text-[70px] mb-10 font-thin">{title}</h2>
      {children}
    </div>
  );
};

export default LayoutMidPage;

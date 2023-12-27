/* eslint-disable react/prop-types */

const LayoutMidPage = ({ title, children }) => {
  return (
    <div className="flex flex-col sm:w-4/5 w-full">

      <h2 className="2xl:text-[60px] sm:text-[48px] text-[35px] mb-10 sm:font-thin">{title}</h2>
      <div className='tracking-wider 2xl:text-lg text-base font-thin' >
      {children}
      </div>
    </div>
  );
};

export default LayoutMidPage;

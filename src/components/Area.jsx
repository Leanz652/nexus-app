import LayoutMidPage from './LayoutMidPage';
import BuildingImg from '../assets/buildings_midpage.svg';
import LayoutContent from './LayoutContent';

const Area = () => {
  const title = 'Areas';

  return (
    <LayoutContent imageUrl={BuildingImg}>
      <LayoutMidPage
        title={
          <>
            <strong>{title}</strong>
          </>
        }
      >
        <div className=" flex flex-col ">
          <div className="mb-5 ">
            <span> Somos un equipo de abogados multidisciplinarios que brindamos asesoramiento integral a nuestros clientes.</span>
          </div>
          <div>
            <span>
              Nuestra experiencia en litigios incluye el trabajo de asesoría, negociación y resolución durante todo el proceso litigioso. Nuestras
              áreas de practica son las siguientes:
            </span>
          </div>
          <div className="flex mt-5 justify-between px-5 text-sm sm:text-base 2xl:text-xl text-gray-400 ">
            <ul className="flex flex-col gap-2">
              <li className=" list-disc ">Derecho Comercial </li>
              <li className=" list-disc ">Derecho Laboral</li>
              <li className=" list-disc ">Derecho Societario</li>
              <li className=" list-disc ">Derecho contractual</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className=" list-disc ">Derecho Penal</li>
              <li className=" list-disc ">Derecho Sucesorio</li>
              <li className=" list-disc ">Derecho Civil</li>
              <li className=" list-disc ">Derecho de Familia</li>
            </ul>
          </div>
        </div>
      </LayoutMidPage>
    </LayoutContent>
  );
};

export default Area;

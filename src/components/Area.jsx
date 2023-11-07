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
        <div className="tracking-wider text-xl font-thin">
          <div className="mb-5 ">
            <span>Somos un equipo de abogados multidisciplinarios</span>
          </div>
          <div className="">
            <span>
              Nuestra propuesta consiste en ofrecer a nuestros clientes la mejor defensa jurídica con un trato cercano y profesional. Creemos que la
              comunicación es una de las habilidades más importantes que podemos aportar a nuestros clientes. Una buena comunicación nos permite
              trabajar de forma eficaz, gestionar los conflictos de forma efectiva y así obtener los mejores resultados.
            </span>
          </div>
        </div>
      </LayoutMidPage>
    </LayoutContent>
  );
};

export default Area;

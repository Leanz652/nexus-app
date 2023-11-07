import LayoutMidPage from "./LayoutMidPage"
import BuildingImg from "../assets/buildings_midpage.svg"
import LayoutContent from "./LayoutContent";



const Area = () => {

  const title = 'Areas'

  return (
    <LayoutContent imageUrl={BuildingImg} >
    <LayoutMidPage title={title} >
    <div>
      <span>Nexus Abogados es un estudio juridico con asiento en la Ciudad de Buenos Aires, Argentina.</span>
      <span>Nuestra propuesta consiste en ofrecer a nuestros clientes la mejor defensa jurídica con un trato cercano y profesional. 
        Creemos que la comunicación es una de las habilidades más importantes que podemos aportar a nuestros clientes. 
        Una buena comunicación nos permite trabajar de forma eficaz, 
        gestionar los conflictos de forma efectiva y así obtener los mejores resultados.</span>
    </div>
    </LayoutMidPage>
    </LayoutContent>


  );
};

export default Area;

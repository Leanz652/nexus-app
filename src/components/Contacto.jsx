import arrowLogo from "../assets/Arrow.svg";
import mailIcon from "../assets/mailIcon.svg";
import telefonoIcon from "../assets/telefonoIcon.svg";
import locationIcon from "../assets/locationIcon.svg";
import linkedinIcon from "../assets/linkedinIcon.svg";
import instagramIcon from "../assets/instaIcon.svg";
import { useState } from "react";
import Footer from "./Footer";

const Contacto = () => {
  const maxLength = 255;
  const [text, setText] = useState("");
  const charactersRemaining = maxLength - text.length;

  const handleTextChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
    }
  };
  return (
    <div className="flex flex-col pt-[98px] min-h-full px-7 sm:px-20">

      <div className="flex flex-1 items-center" >
      <div className="sm:h-3/4  w-full flex flex-col-reverse  sm:flex-row items-center  sm:px-0 ">
        <div className=" w-full sm:w-3/5 sm:h-3/4 sm:px-5 pt-5 flex flex-col  sm:justify-center ">
          <textarea
            className="block mb-6 w-full sm:w-2/3 p-5 resize-none bg-transparent border border-white focus-visible:outline-none text-lg"
            name=""
            id=""
            cols="30"
            rows="10"
            maxLength={maxLength}
            value={text}
            onChange={handleTextChange}
            placeholder="Tu mensaje  |"
          ></textarea>
          <div className="flex justify-between items-center sm:w-2/3 mb-4">
            <div>Caracteres disponibles: {charactersRemaining} </div>


            <a href={'https://api.whatsapp.com/send?phone=5491123976686&text='+text} target="_blank" rel="noopener noreferrer">
            <button className=" bg-white p-2 px-6 text-xs	 text-black rounded-3xl		">
              Enviar
            </button>
            </a>
          </div>
        </div>
        <div className=" w-full sm:w-2/5 sm:h-3/4 flex-col">
          <div className=" mb-10 ">
            <strong className="sm:text-[60px] text-[35px] mb-10 sm:font-thin">
              Contactate{" "}
            </strong>
            <strong className="sm:text-[60px] text-[35px] mb-10 sm:font-thin">
              con nosotros{" "}
            </strong>
          </div>
          <div className="mb-14">
            <img src={arrowLogo} alt="arrow" height={30} width={30} />
          </div>
          <div className="mb-6 flex gap-5 ">
            <img src={telefonoIcon} alt="Telefono" height={22} width={22} />
            <span>Tel&nbsp;&nbsp;(54)&nbsp;11-2397-6686</span>
          </div>
          <div className="mb-6 flex gap-5 ">
            <img src={locationIcon} alt="Ubicacion" height={22} width={22} />
            <span>
              Paraná N° 769 - Piso 3 Dpto &quot;B&quot; CABA, Argentina
            </span>
          </div>
          <div className=" sm:mt-24  flex gap-5 ">
            <a
              href="https://www.instagram.com/nexus.abogados?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="arrow" height={22} width={22} />
            </a>
            <img src={linkedinIcon} alt="arrow" height={22} width={22} />
            <img src={mailIcon} alt="arrow" height={22} width={22} />
          </div>
        </div>
      </div>
      </div>

      <Footer />


    </div>
  );
};

export default Contacto;

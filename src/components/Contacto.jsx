import arrowLogo from "../assets/Arrow.svg";
import mailIcon from "../assets/mailIcon.svg"
import telefonoIcon from "../assets/telefonoIcon.svg"
import locationIcon from "../assets/locationIcon.svg"
import linkedinIcon from "../assets/linkedinIcon.svg"
import instagramIcon from "../assets/instaIcon.svg"
import { useState } from "react";

const Contacto = () => {
  const maxLength = 255;
  const [text, setText] = useState('');
  const charactersRemaining = maxLength - text.length;

  const handleTextChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
    }
  };
  return (
    <div className="flex h-full px-20 items-center">
      <div className="h-3/4  w-full flex items-center ">
        <div className="w-3/5 h-3/4 px-5 pt-5 flex-col">
          <input className="block mb-8 w-2/5 " type="text" />
          <input className="block mb-8 w-2/5" type="text" />
          <textarea className="block mb-8 w-2/5 resize-none " name="" id="" cols="30" rows="10"
          maxLength={maxLength}
          value={text}
          onChange={handleTextChange}
          ></textarea>
        <div  >Caracteres disponibles: {charactersRemaining} </div>
        </div>
        <div className="w-2/5 h-3/4 flex-col">
          <div className=" mb-10 " >
          <strong className="text-[52px] block font-thin tracking-wide" >Contactate </strong>
          <strong className="text-[52px] block font-thin tracking-wide" >con nosotros </strong>
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
            <span>Paraná N° 769 - Piso 3 Dpto &quot;B&quot; CABA, Argentina</span>
          </div>
          <div className=" mt-24  flex gap-5 ">
          <img src={instagramIcon} alt="arrow" height={22} width={22} />
          <img src={linkedinIcon} alt="arrow" height={22} width={22} />
          <img src={mailIcon} alt="arrow" height={22} width={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

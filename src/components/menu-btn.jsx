import { MdOutlineFastfood } from "react-icons/md";
import '../buttons.css';

export default function MenuButton({ onClick }) {



  const iconStyle = {
    color: "#ffffff", 
    fontSize: "1.2em",
  };

  return (
    <button  className="main-menu-button" onClick={onClick}> 
      <span style={{ fontWeight: "800", color: "#ffffff" }}>
        برو به منو
      </span>
      <MdOutlineFastfood style={iconStyle} />
    </button>
  );
}

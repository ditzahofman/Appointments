import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
					<NavLink to={"/home"}>Home  |</NavLink>
            <NavLink to={"/appointments"}>Appointments |</NavLink>
            <NavLink to={"/add"}>Add New Appointment </NavLink>
        </div>
    );
}

export default Menu;

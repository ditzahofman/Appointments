import Menu from "../Menu/Menu";
import "./header.css";

function Header(): JSX.Element {
    return (
        <div className="header">
			<h1>Developer appointments</h1>
            <hr/>
            <Menu/>
            <hr/>
        </div>
    );
}

export default Header;

import Footer from "../Footer/Footer";
import Routing from "../Routing/Routing";
import Header from "../header/header";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header>
                <Header/>
            </header>
            <Routing/>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Layout;

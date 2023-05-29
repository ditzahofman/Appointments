import { NavLink } from "react-router-dom";
import "./PageNotFound.css";

import "./PageNotFound.css";
// import NotFound from '../../../Assets/Images/404.png';
import { Undo } from "@mui/icons-material";
function PageNotFound(): JSX.Element {
    return (
        		 <div className="PageNotFound">
			<p>The page you are looking for does not exist</p>
      <div>404</div>
      {/* <img src={NotFound} alt='not-found' /> */}
      <div>
        <NavLink to="/home" className="Back">Back Home<Undo /></NavLink>
      </div>	
        </div>
    );
}

export default PageNotFound;

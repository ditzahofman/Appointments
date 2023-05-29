import { Route, Routes } from "react-router-dom";
import AddAppointment from "../../AppointmentArea/AddAppointment/AddAppointment";
import AppointmentList from "../../AppointmentArea/AppointmentList/AppointmentList";
import Home from "../../HomeArea/Home/Home";
import "./Routing.css";
import PageNotFound from "../PageNotFound/PageNotFound";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
					<Routes>
            <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/appointments"  element={<AppointmentList/>}/>
                <Route path="/Add"  element={<AddAppointment/>}/>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Routing;

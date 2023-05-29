import AppointmentModel from "../../../Models/Appointment-model";
import "./AppointmentCard.css";
import { Button, Card, CardActions, CardContent, CardHeader } from "@mui/material";
interface AppointmentProps {
    appointment: AppointmentModel
}

function AppointmentCard(props: AppointmentProps): JSX.Element {


    return (
        <div className="AppointmentCard">
            <Card className="card">
                <CardContent >
                    <h2>{props.appointment.devGroupName}</h2>
                    <p className="p">{new Date(props.appointment.start).toLocaleString()}</p>
                    <p className="p">{new Date(props.appointment.end).toLocaleString()}</p>
                    <p className="Summury">{props.appointment.description}</p>
                    <p className="p">{props.appointment.room}</p>
                    <Button type="button">Delete</Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default AppointmentCard;

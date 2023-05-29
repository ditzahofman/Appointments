import { useEffect, useState } from "react";
import AppointmentModel from "../../../Models/Appointment-model";
import DevGroupModel from "../../../Models/DevGroup-model";
import "./AddAppointment.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import appointmentService from "../../../Services/AppointmentService";
import { Button, MenuItem, TextField } from "@mui/material";

function AddAppointment(): JSX.Element {

    
    const [devGroup, setDevGroup] = useState<DevGroupModel[]>([])
    const { handleSubmit, register } = useForm<AppointmentModel>()
    const navigate = useNavigate();

    useEffect(() => {
        appointmentService.getAllDevGroups()
          .then(g => setDevGroup(g))
          .catch(err => alert(err.message))
      }, [])

      async function send(appointment:AppointmentModel){
        try {
             await appointmentService.addNewAppointment(appointment)
             alert("The meeting was scheduled!")
             navigate("/home")
        
        } catch (err) {
            alert(err)
        }
            }
    return (
        <div className="AddAppointment">
			<form onSubmit={handleSubmit(send)}>
                <h2 className="h2-card">Add an appointment</h2>
                <TextField
          id="outlined-select-currency"
          select
          label="site area"
          defaultValue="select"
          helperText="Please select devGroup"
          focused
          {...register("devGroupId")}>
          {devGroup.map((option) => (
            <MenuItem key={option.devGroupId} value={option.devGroupId}>
              {option.devGroupName}
            </MenuItem>
          ))}
        </TextField>
        <TextField className="textFiled" type="datetime-local"  id="outlined-basic"  label="start" variant="outlined" focused required {...register("start")}/>
        <TextField className="textFiled" type="datetime-local" id="outlined-basic"  label="end" variant="outlined" focused required {...register("end")}/>
        <textarea className="textFiled" id="outlined-basic" placeholder="description" required  {...register("description")} />
        <TextField className="textFiled"  id="outlined-basic" label="room" variant="outlined" focused required {...register("room")}/>
            <Button type="submit"  className="button">ADD</Button>
            </form>
        </div>
    );
}

export default AddAppointment;

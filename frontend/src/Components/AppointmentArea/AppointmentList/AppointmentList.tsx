import { useEffect, useState } from "react";
import "./AppointmentList.css";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import DevGroupModel from "../../../Models/DevGroup-model";
import AppointmentModel from "../../../Models/Appointment-model";
import appointmentService from "../../../Services/AppointmentService";
import AppointmentCard from "../AppointmentCard/AppointmentCard";


function AppointmentList(): JSX.Element {

    const [appointments , setAppointments] = useState<AppointmentModel[]>([])
    const[devGroup , setDevGroup]= useState<DevGroupModel[]>([])
    
    useEffect(()=>{

       appointmentService.getAllDevGroups()
        .then(g=>setDevGroup(g))
        .catch(err=>alert(err))
       },[])
    
       async function selectAppointments(args: SelectChangeEvent) { 
        const value = +args.target.value;
       appointmentService.getAllAppointmentsBydevGroupId(value)
            .then(a => setAppointments(a))
            .catch(err => alert(err.message));
    }
    
    
    
    
    
    return (
        <div className="AppointmentList">
			     <FormControl sx={{ m: 1, minWidth: 260 }}>
            <InputLabel id="site-area-label" className="SelectBox">Select development-group</InputLabel>
            <Select
                labelId="site-area-label"
                label="Select Site Area"
                className="SelectBox"
                onChange={selectAppointments}
            >
                {devGroup.map(d => <MenuItem key={d.devGroupId} value={d.devGroupId}>
                    {d.devGroupName}
                </MenuItem>
                )}
            </Select>
        </FormControl>
        <div className="card">
                {appointments.map(a=> <AppointmentCard key={a.appointmentId} appointment={a}/>)}
            </div>
        </div>
    );
}

export default AppointmentList;

import axios from "axios";

import appConfig from "../Utils/AppConfig";
import DevGroupModel from "../Models/DevGroup-model";
import AppointmentModel from "../Models/Appointment-model";

class AppointmentService{

    public async getAllDevGroups(): Promise<DevGroupModel[]> {
        try {
            const response = await axios.get<DevGroupModel[]>(appConfig.devGroupUrl)
            const devGroups = response.data
            return devGroups
        } catch (error) {
            console.log(error)
        }
    }

    public async getAllAppointmentsBydevGroupId(devGroupId: number): Promise<AppointmentModel[]> {

        try {
            const response = await axios.get<AppointmentModel[]>(appConfig.appointmentUrl+devGroupId)
            const appointments = response.data
            return appointments

        } catch (error) {
            console.log(error)
        }
    }

    public async addNewAppointment(appointment:AppointmentModel):Promise<AppointmentModel>{
        try {
            const response = await axios.post<AppointmentModel>(appConfig.appointmentUrl,appointment)
            const addedProduct= response.data
            return addedProduct 
        } catch (error) {
           console.log(error) 
        }
           }
}




const appointmentService = new AppointmentService();

export default appointmentService;
import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import AppointmentModel from "../4-models/appointmentsModel";
import { ValidationError } from "../4-models/error-model";


async function getAllDevGroups(): Promise<AppointmentModel[]> {
    try {
        const sql = `SELECT * FROM devGroups`

        const appointments = await dal.execute(sql)
        return appointments
    } catch (error) {
        console.log(error)
    }
}

async function getAAppoinntmentsByDevGroupId(devGroupId: number): Promise<AppointmentModel[]> {
    try {
        const sql = `SELECT A.* , D.devGroupName
      FROM appointments AS A JOIN devGroups AS D
      ON A.devGroupId = D.devGroupId
      WHERE A.devGroupId = ?`

        const appointments = await dal.execute(sql, [devGroupId])
        return appointments
    } catch (error) {
        console.log(error)
    }
}

async function addAppoinntments(appointment: AppointmentModel): Promise<AppointmentModel> {
    try {
        const error = appointment.validate()
        if (error) throw new ValidationError(error)
        const sql = `INSERT INTO appointments VALUES(DEFAULT,?,?,?,?,?)`

        const info:OkPacket = await dal.execute(sql, [
            appointment.devGroupId,
            appointment.start,
            appointment.end,
            appointment.description,
            appointment.room])
        appointment.appointmentId = info.insertId 
        return appointment
    } catch (error) {
        console.log(error)
    }
}


export default {
    getAllDevGroups,
    getAAppoinntmentsByDevGroupId,
    addAppoinntments,
}
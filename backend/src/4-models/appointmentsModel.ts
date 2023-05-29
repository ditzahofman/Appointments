import joi from "joi"
class AppointmentModel{
public appointmentId:number
public devGroupId:number
public start:string
public end:string
public description:string
public room:string

public constructor(appointment:AppointmentModel){
    this.appointmentId = appointment.appointmentId
    this.devGroupId = appointment.devGroupId
    this.start = appointment.start
    this.end = appointment.end
    this.description = appointment.description
    this.room = appointment.room
}
public static validationSchema=joi.object({
    appointmentId:joi.number().optional().positive(),
    devGroupId :joi.number().positive(),
    start:joi.string().required(),
    end:joi.string().required(),
    description:joi.string().required(),
    room:joi.string().required()


})

public validate():string{
    const result =AppointmentModel.validationSchema.validate(this)
    return result.error?.message
}


}
export default  AppointmentModel
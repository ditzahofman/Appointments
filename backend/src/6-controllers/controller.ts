import express, { Request, Response, NextFunction } from "express"
import logic from "../5-logic/logic"
import AppointmentModel from "../4-models/appointmentsModel"

const router = express.Router()

router.get("/devGroups", async(request:Request,response:Response,next:NextFunction)=>{
    try {
        const evGroups = await logic.getAllDevGroups()
        response.json(evGroups)  
    } catch (error:any) {
        next(error)
    }
   

})

router.get("/appointments/:groupId",async(request:Request,response:Response,next:NextFunction)=>{
    try {
        const groupId = +request.params.groupId
        const appointments= await logic.getAAppoinntmentsByDevGroupId(groupId)
        response.json(appointments)
    } catch (err:any) {
        next(err)
    }
    })

    router.post("/appointments",async(request:Request,response:Response,next:NextFunction)=>{
        try {
            const newAppointment = new AppointmentModel(request.body)
            const addAppointment = logic.addAppoinntments(newAppointment)
            response.status(201).json(addAppointment)  
        } catch (err:any) {
        next(err)    
        }
    
    })
    






export default router
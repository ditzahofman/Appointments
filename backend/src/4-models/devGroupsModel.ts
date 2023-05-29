class DevGroupModel{
    public devGroupId:number
    public devGroupName:string

    public constructor(devGroup:DevGroupModel){
        this.devGroupId = devGroup.devGroupId
        this.devGroupName = devGroup.devGroupName
    }
}
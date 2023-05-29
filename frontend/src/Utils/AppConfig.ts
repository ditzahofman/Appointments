
//Create url for axios
class Config {
    public appointmentUrl = "http://localhost:3001/api/appointments/"
    public devGroupUrl = "http://localhost:3001/api/devGroups"
    
}

const appConfig = new Config(); // Singleton

export default appConfig;
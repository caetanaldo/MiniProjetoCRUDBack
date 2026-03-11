import { DataTypes } from "sequelize";
import { sequelize } from "../database/sqlConnection.js";

const Tasks = sequelize.define("Tasks",{
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING
    },
    completed:{
        type: DataTypes.BOOLEAN,   
        defaultValue: false
    }
})

export default Tasks

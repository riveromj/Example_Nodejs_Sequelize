import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Project from './Projects';



const Task = sequelize.define('tasks',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.TEXT
    },
    done:{
        type: Sequelize.BOOLEAN
    },
    projectId:{
        type: Sequelize.INTEGER
    }
},{
    timestamps:false,
});
//relaciones
//un proyecto tiene muchas tareas
Project.hasMany(Task,{foreingKey: 'projectId', sourceKey:'id'});
//muchas tareas pero pertecen a un solo proyecto
Task.belongsTo(Project,{ foreingKey:'projectId', sourceKey:'id'})

export default Task;
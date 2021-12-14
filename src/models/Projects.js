import Sequelize from 'sequelize';
import { sequelize }  from '../database/database'; //importamos la conexion

const Project = sequelize.define('projects',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.TEXT
    },
    prioriry:{
        type: Sequelize.INTEGER
    },
    description:{
        type: Sequelize.TEXT
    },
    deliverydate:{
        type: Sequelize.DATE
    }
},{
    timestamps: false, //para no tener problemas con fechas
    freezeTableName: true,
    tableName:'projects'
});

export default Project;
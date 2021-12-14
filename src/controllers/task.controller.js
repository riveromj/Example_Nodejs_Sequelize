import Project from '../models/Projects';
import Task from '../models/Tasks';

export async function createTask(req,res){
    const { name, done, projectId } = req.body;
    try{
        const newTask = await Task.create({
            name,
            done,
            projectId
        },{
            fields:['name','done','projectId'] ///datos que necesito pasar para crear una tarea
        });
        if (newTask){
            res.json({
                message:'New task created',
                data:newTask
            })
        }

    }catch(e){
        console.log(e);
    }
}
export async function getTask(req,res){
    try{
        let tasks = await Task.findAll({
            attributes:['id', 'projectId', 'name','done'],
            order:[
                ['id','DESC']
            ]
        })
        if(tasks){
            res.json({
                data:tasks
            })
        }

    }catch(e){
        console.log(e);
    }
}
export async function getOneTask(req,res){
    const { id }= req.params;
    try{
        const task = await Task.findOne({
            where:{
                id
            }
        });
        if(task){
            res.json(task);
        }

    }catch(e){
        console.log(e);
    }
}
export async function deleteTask(req,res){
    const { id } = req.params; 
    try{
        const task =  await Task.destroy({
            where:{
                id
            }
        });
        if(task !=0 ){
            res.json({
                message:'tasks delete'
            })
        }

    }catch(e){
        console.log(e);
    }
}

export async function updateTasks(req,res){
    const { id } = req.params;
    const { projectId, name, done } =  req.body;
    try{
        const task = await Task.findOne({
            attributes:['name', 'projectId','done','id'],
            where:{
                id
            }
        });

       const uptateTask = await Task.update({
            projectId,
            name, 
            done
        }, {
            where:{
                id
            }
        });
        res.json(uptateTask);

    }catch(e){
        console.log(e);
    }
}

export async function getTasksByProject(req,res){
    const { projectId } = req.params;
    try{
        const tasks = await Task.findAll({
            attributes:['name'],   //los atributo que quiero enviar
            where:{
                projectId
            }
        });
        res.json({
            data:tasks
        })

    }catch(e){
        console.log(e);
    }
}

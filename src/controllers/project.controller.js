import Project from '../models/Projects'


export async function getProject(req, res){
    try{
        const projects = await Project.findAll();
    res.json({
        data:projects
    })
    }catch(err){
        res.status(400).json({
            message:"not found"
        })
    }
}

export async function getOneProject(req, res){
    const { id }= req.params;
    try{
        const project = await Project.findOne({
            where:{
                id
            }
        });
        if(project != null){
            res.json(
                project
            )
        }
    }catch(err){
        res.status(400).json({
            message:"not found"
        })
    }
}

export async function createProject(req,res){
    //lo que recibo en el body de la peticion
    const { name, prioriry, description, deliverydate } = req.body;
    console.log(req.body);
    try{
        let newProject = await Project.create({
            name, 
            prioriry, 
            description, 
            deliverydate
        });
        if (newProject){
            return res.json({
                message:'Project created successfully',
                data: newProject
            });
        }

     }catch(err){
       res.status(500).json({
        message:'Something goes wrong',
        data:{}
       } )
    }

}

export async function deleteProject(req,res){
    const { id } = req.params;
    try{
        const deleteRowCount = await Project.destroy({
            where:{
                id
            }
        });
        if (deleteRowCount != 0){
            res.json({
                message: 'Project delete successfully',
                count: deleteRowCount
            })
        }

    }catch(e){
        console.log(e);
    }
}

export async function updateProject(req, res){
    const { id } = req.params;
    const { name, prioriry, description, deliverydate}= req.body;
    try{
        const projects = await Project.findAll({
            attributes:['id','name','prioriry', 'description', 'deliverydate'],
            where:{
                id
            }
        });
        if (projects.length > 0){
            console.log('existe')
            projects.forEach(async project => {
                await project.update({
                     name,
                     prioriry,
                     description,
                     deliverydate
                })
            });
        }
        return res.json({
            message: 'Project update succesfully',
            data: projects
        });
        

    }catch(e){
        console.log(e);
    }
}
import express from 'express';
import morgan from 'morgan';


//import Routes
import projctRoutes from './routes/projects'
import taskRoutes from './routes/tasks'

const app = express();

//configurar el servidor  middleware
app.use(morgan('dev'));       //mostrat por consola
app.use(express.json());              //entender formato json


//Routes siempre van debajo de los middleware
app.use('/api/projects',projctRoutes);
app.use('/api/tasks',taskRoutes);

export default app;
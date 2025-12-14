import express from 'express';
import morgan from 'morgan';
import usersRoutes from './routes/users.routes.js';
import locationsRoutes from './routes/locations.routes.js';



const app = express();

//Settings
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(express.json()); 
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/users", usersRoutes);
app.use("/api/locations", locationsRoutes);

export default app;
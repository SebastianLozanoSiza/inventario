/* Importamos al framework express */
import express from 'express';
import cors from "cors";
import categoriaRoutes from './routes/categorias.routes.js';

/* Asignamos a app toda funcionalidad para mi server web */
const app = express();

/* Setear un puerto a mi web server */
app.set("port", 5000);

app.use(cors());

/* routes */
app.use("/api/categorias", categoriaRoutes)

/* Hacemos disponible a mi server app para toda la aplicación */
export default app; 
import { addNewTodo,getAllTodo,getTodowithID } from "../controllers/TodoControllers";

 const routes =(app)=>{

    app.route("/").get(getAllTodo).post(addNewTodo)
;}
 

export default routes;
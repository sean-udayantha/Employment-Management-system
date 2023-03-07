import { Router } from "express";
const employeeRoute = Router();
import employeeController from "../controllers/employee.js";


employeeRoute.post(
    "/api/employee/create",
    employeeController.createEmployee
  );
 employeeRoute.get(
    "/api/employee/all",
   employeeController.getEmployee
  );
  employeeRoute.get(
    "/api/employee/:id",
   employeeController.getOneEmployee
  );
 employeeRoute.put(
    "/api/employee/update/:id",
    employeeController.updateEmployee
  );
 employeeRoute.delete(
    "/api/employee/delete/:id",
    employeeController.deleteEmployee
  );
  export default employeeRoute;
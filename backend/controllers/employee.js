import Employee from "../models/employee.js";
import Counter from "../models/counter.js";
const employeeController = {
    createEmployee: async (req, res) => {
        try {
            
       
            const { fullName, initialsName, displayName, gender, dataOfBirth, email, mobileNumber, designation, employeeType, joinDate, experience, salary } = req.body;
            
            async function getSeqID() {
                try {
                    const cd = await Counter.findOneAndUpdate(
                        { id: "autoval" },
                        { "$inc": { "seq": 1 } },
                        { new: true }
                    )
                    if (cd == null) {
                        const newval = new Counter({ id: "autoval", seq: 1 })
                        newval.save()
                        return 1
                    } else {
                        return cd.seq
                    }
                } catch (err) {
                    console.log(" ~ err:", err)
                    // Handle errors here
                }
            }

            const userExits = await Employee.findOne({email});

            if (userExits){
                res.status(400)
                throw new Error("Employee Already exist");
            }
        
            //checking all fields are fill
            if (!fullName || !initialsName || !displayName || !gender || !dataOfBirth || !email || !mobileNumber || !designation || !employeeType || !joinDate || !experience || !salary)
                return res.status(400).json({
                    msg: "Please fill in all fields.",
                });
                const SeqID = await getSeqID()
                console.log("~ SeqID:", SeqID)
            const newEmployee = new Employee({
                userId:SeqID,
                fullName,
                initialsName,
                displayName,
                gender,
                dataOfBirth,
                email,
                mobileNumber,
                designation,
                employeeType,
                joinDate,
                experience,
                salary
            });
            await newEmployee.save();
            res.json({
                message: "New Employee Added Success",
                data: newEmployee,
            });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
      },
    getEmployee: async (req, res) => {
        try {
          const employees = await Employee.find();
          
          res.json({
            message: "employee fetch success",
            data: employees
          });
        } catch (err) {
          return res.status(500).json({ message: err.message });
        }
      },
    getOneEmployee: async (req, res) => {
        const id = req.params.id;
        try {
          const employee = await Employee.findOne({ _id: id });
          res.json({
            message: "Employees fetch success",
            data: employee
          });
        } catch (err) {
          return res.status(500).json({
            message: err.message
          });
        }
      },  
    updateEmployee: async (req, res) => {
        try {
          const id = req.params.id;
          const { fullName, initialsName, displayName, gender, dataOfBirth, email, mobileNumber, designation, employeeType, joinDate, experience, salary} = req.body;
    
          await Employee.findOneAndUpdate(
            { _id: id },
            { fullName, initialsName, displayName, gender, dataOfBirth, email, mobileNumber, designation, employeeType, joinDate, experience, salary}
          );
          res.json({
            message: "Employee update success",
            data: { userId,fullName, initialsName, displayName, gender, dataOfBirth, email, mobileNumber, designation, employeeType, joinDate, experience, salary},
          });
        } catch (err) {
          return res.status(500).json({ message: err.message });
        }
      },
    deleteEmployee: async (req, res) => {
        try {
          const id = req.params.id;
    
          await Employee.findByIdAndDelete({ _id: id });
          res.json({ message: "Employee delete success !" });
        } catch (err) {
          return res.status(500).json({ message: err.message });
        }
      },


      getEmployeeByType: async (req, res) => {

        try {
          let {EmployeeType}=req.body;
          const employees = await Employee.find({"employeeType":EmployeeType});
          console.log("🚀 ~ file: employee.js:128 ~ getEmployeeByType: ~ employees:", employees)
          res.json({
            message: "employee fetch success",
            data: employees
          });
        } catch (err) {
          return res.status(500).json({ message: err.message });
        }
      },
}
export default employeeController;
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const employeeSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,

        },
        fullName: {
            type: String,
            required: true,

        },
        initialsName: {
            type: String,
            required: true,

        },
        displayName: {
            type: String,
            required: true,

        },
        gender:{
            type: String,
            required: true,

        },
        dataOfBirth: {
            type: String,
            required: true,
            unique : true,

        },
        email: {
            type: String,
            required: true,
        },
        mobileNumber: {
            type: String,
            required: true,
        },
        designation: {
            type: String,
            required: true,
        },
        employeeType: {
            type: String,
            required: true,
        },
        joinDate: {
            type: String,
            required: true,
        },
        experience: {
            type: String,
            required: true,
        },
        salary: {
            type: String,
            required: true,
        },
        
    },
    {
        timestamps: true,
    }
);

export default model("Employee", employeeSchema);
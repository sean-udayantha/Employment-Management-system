import mongoose from "mongoose";
const { Schema, model } = mongoose;
const counterSchema = new Schema(
    {
        id: {
            type: String,
        },
        seq: {
            type: Number,
        },

    }
);
export default model("Counter", counterSchema);
import mongoose from 'mongoose';
const Schema=mongoose.Schema;
export const TodoSchema=new Schema({

    activity:{type:String,required:true}
});
import { Schema } from "mongoose";

const userSchema = new Schema({
    user_id :{
        type : String
    },
    meetingCode :{
        type: String,
        required : true
    },
    date:{
        type : Date,
        default : Date.now,
        required : true,
    }
})

const meeting = mongoose.model("Meeting",userSchema);

export {Meeting};
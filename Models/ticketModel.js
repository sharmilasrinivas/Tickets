import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    title: {type: String},
    des : {type: String},
    createdBy: {type: mongoose.Schema.Types.ObjectId,ref:"user"},
    acceptedBy: {type: mongoose.Schema.Types.ObjectId,ref:"user"},
    closedBy: {type: mongoose.Schema.Types.ObjectId,ref:"user"},
    state:{type: String,
        enum: ["created","inprogress","closed"],
        default:"created"
    }
},{timestamps:true});

const Ticket = mongoose.model('task',ticketSchema);
export default Ticket;

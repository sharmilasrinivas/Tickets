import express from "express";
import { addUer } from "../Controller/aminControler.js";
import { 
    adminMiddleware, 
    authMiddleware 
} from "../Middleware/authMiddleware.js";
import { 
    updateTicketState
 } from "../Controller/ticketControler.js";

const adminRouter = express.Router();

// Get Method


// Post Method
adminRouter.post("/create-user",authMiddleware, adminMiddleware, addUser);

// Put Method
adminRouter.put("/titcket/update-state",authMiddleware, adminMiddleware, updateTicketState )

// Delete Method


export default adminRouter;

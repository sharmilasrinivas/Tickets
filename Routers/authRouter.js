import express from 'express';
import { 
    acceptUserRole,
    getUser,
    loginUser,
    // loginUser,
    registerAdmin
 } from '../Controller/authController.js';
import { adminMiddleware, authMiddleware } from '../Middleware/authMiddleware.js';


const authRouter = express.Router();


// Get Method
authRouter.get("/user",authMiddleware,adminMiddleware, getUser);

authRouter.get("/role-setup/:id",acceptUserRole);


// Post Method
authRouter.post("/register-admin",registerAdmin);

authRouter.post("/login", loginUser);

// Put Method


// Delete Method





export default authRouter;
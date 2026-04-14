import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inggest/index.js"
import listingRouter from './routes/listingRoutes.js';
import chatRouter from './routes/chatRoutes.js';
import webhookRoute from './routes/webhookRoutes.js';
const app=express();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())
app.use("/api/webhook", webhookRoute);
app.get('/',(req,res)=>{
     res.send("Server is live!")
})
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/listing",listingRouter);
app.use("/api/chat",chatRouter);

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{
     console.log("Server is running at "+PORT)
})
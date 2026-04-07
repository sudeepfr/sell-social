import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import prisma from './config/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inggest/index.js"

const app=express();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())

app.get('/',(req,res)=>{
     res.send("Server is live!")
})
app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{
     console.log("Server is running at "+PORT)
})
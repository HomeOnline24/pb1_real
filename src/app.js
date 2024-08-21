import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app=express();
app.use(cors({
    credential:true,
    origin:"*",
    optionsSuccessStatus:200
}));
app.use(cookieParser());
app.use(express.json({limit:"20kb"}));
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

export {app};

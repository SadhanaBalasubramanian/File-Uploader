import express from "express";
import fileUpload from "express-fileupload";

const app=express();

app.use(fileUpload());


//Upload Endpoint
app.post("/upload",(req,res)=>{
    if(req.files==null){
        return res.status(400).json({msg:"No file uploaded"})
    }

    const file=req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${filename}`,err =>{
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({fileName: file.name,filePath:`/upload/${file.name}`});
    })
})

app.listen(5000,()=> console.log("Server Started.."));

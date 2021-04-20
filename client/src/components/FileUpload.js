import React,{ Fragment , useState } from 'react';
import axios from "axios";

const FileUpload = () => {
    const [file,setFile]=useState("");
    const [filename,setFilename]=useState("Choose File");
    const [uploadedFile,setuploadedFile]=useState({});

    const onChange = e =>{
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name)
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        const formData= new FormData();
        formData.append("file",file);

        try{
            const res=await axios.post("/upload",formData,{
                headers:{
                    "Content-Type" : "multipart/form-data"
                }
            });

            const { fileName,filePath }=res.data;
            setuploadedFile({fileName,filePath})

        }catch(err){
            if(err.response.status === 500){
                console.log("There was a problem with the server");
           }else{
              console.log(err.response.data.msg);
           }
        }
    }
    return(
         <Fragment>
         <form onSubmit={onSubmit}>

                <div className="mb-3">
                  <label for="formFile" className="form-label">{filename}</label>
                  <input className="form-control" type="file" id="formFile" onChange={onChange} />
                 </div>

                 <input type="submit" value="Upload" className="btn btn-primary btn mt-4"/>
            </form>
            { uploadedFile ? 
            <div className="row mt-5">
                <div className="col-md-6 m-auto">
                <h3 className="text-center">
                    {uploadedFile.fileName}
                </h3>
                <img src={uploadedFile.filePath} alt="" />
                </div>
            </div>
           :null }
        </Fragment>
    )
}

export default FileUpload
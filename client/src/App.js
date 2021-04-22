import React from "react";
import FileUpload from "./components/FileUpload.js";
import './App.css';

const App=() =>{
  return(
      <div className="container mt-4">
        <h4 className="display-4 text-cener mb-4">
          <i className="fab fa-react"></i> File Upload
        </h4> 
        
        <FileUpload/>
    </div>
  )
}

export default App;

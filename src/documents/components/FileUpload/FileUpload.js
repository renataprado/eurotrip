import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";


const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});


const FileUpload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (e) =>{
    console.log('upload');
    const file = e.target.files[0];
    setUploadedFile(file);
  }
  


  return (
    <div>
          <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput type="file" onChange={handleFileUpload} />
    </Button>
    {uploadedFile && <p>Arquivo: {uploadedFile.name}</p>}
    </div>

  );
};

export default FileUpload;

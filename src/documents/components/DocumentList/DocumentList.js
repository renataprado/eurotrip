import FileUpload from "../FileUpload/FileUpload";


const DocumentList = () => {
  return (
    <div className="document-list">
      <h2>Documents List</h2>
      <FileUpload />
    </div>
  );
}

export default DocumentList;

/* https://www.youtube.com/watch?v=xHflVKsY9PM
Integrate with Google Drive APIs
- create a new project
- enable Google Drive API service
- APIs and Services - Create service account and add keys
- Share google drive folder with the client email

*/
import AuthForm from './components/AuthForm/AuthForm';
import DocumentList from './components/DocumentList/DocumentList';

const Documents = () => {
  return (
    <div className="documents">
      <h2>Documents Page</h2>
      <AuthForm></AuthForm>
      <DocumentList></DocumentList>
    </div>
  );
}

export default Documents;

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Auth = () => {
  return (
    <div className="auth-from">
      <TextField label="Password"></TextField>
      <Button variant="contained">Enter</Button>
    </div>
  );
}

export default Auth;
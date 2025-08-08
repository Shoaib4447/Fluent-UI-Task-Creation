import { Button, Input, makeStyles } from "@fluentui/react-components";
import { useState, useEffect } from "react";
import { loginUser } from "../api/authApiCalls";
import { useNavigate, Link } from "react-router-dom";
import { EyeOffRegular, EyeRegular } from "@fluentui/react-icons";
import { toast } from "react-toastify";
const useStyles = makeStyles({
  registerSection: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#0F6CBD",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1rem",
    backgroundColor: "#ffffffff",
    borderRadius: "6px",
    border: "1px solid #D1D1D1",
    minWidth: "400px",
    minHeight: "300px",
    paddingTop: "1rem",
    paddingBottom: "2rem",
  },
  heading: {
    fontSize: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  formTitle: {
    borderBottom: "1px solid #f3f3f3",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  inputNameGroup: {
    display: "flex",
    // width: "85%",
    gap: "5px",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  inputGroup: {
    display: "flex",
    justifyContent: "center",
    width: "87%",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  input: {
    backgroundColor: "#F2F2F2",
    color: "#BEBEBE",
    border: "none",
    outline: "none",
    padding: "10px",
    width: "100%",
    "::placeholder": { color: "#BEBEBE" },
  },
  buttonWrapper: {
    width: "87%",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  SignUp: {
    width: "30%",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  navigateLogin: { color: "#ffffff" },
  Loginbtn: {
    color: "#ffffff",
  },
  passwordErrorWrapper: {
    display: "flex",
    alignItems: "start",
    width: "87%",
    padding: "0px",
  },
  passwordError: {
    textAlign: "left",
    color: "red",
    padding: "0px",
  },
});
const Login = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    loginUser(credentials, navigate);
  };

  return (
    <section className={styles.registerSection}>
      <div className={styles.formContainer}>
        <div className={styles.formTitle}>
          <h1 className={styles.heading}>Login</h1>
          <p>Please fill the form to login your account!</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <Input
              className={`${styles.full} ${styles.input}`}
              type='email'
              required
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <Input
              className={`${styles.full} ${styles.input}`}
              contentAfter={
                <span
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeRegular /> : <EyeOffRegular />}
                </span>
              }
              type={showPassword ? "password" : "text"}
              required
              placeholder='Password'
              value={password}
              defaultValue='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              type='submit'
              className={styles.SignUp}
              appearance='primary'
            >
              Login
            </Button>
          </div>
        </form>
      </div>
      <p className={styles.navigateLogin}>
        Don't have an account?{" "}
        <Link to='/register' className={styles.Loginbtn}>
          Register here
        </Link>
      </p>
    </section>
  );
};

export default Login;

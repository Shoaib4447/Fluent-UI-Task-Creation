import { Button, Input, makeStyles } from "@fluentui/react-components";
import bg1 from "../assets/svgImages/bg1.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  section: {
    backgroundImage: `url(${bg1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  registerSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    // backgroundColor: "#282828ff",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1rem",
    padding: "3rem",
    backgroundColor: "#FAFAFA",
    borderRadius: "6px",
    border: "1px solid #D1D1D1",
    minWidth: "250px",
  },
  heading: {
    textAlign: "center",
    fontSize: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  },
  inputGroup: { width: "100%" },
  inputs: { width: "100%" },
  buttonWrapper: {
    width: "100%",
  },
  SignUp: {
    width: "100%",
  },
});
const Login = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    console.log("Login userData=>", userData);
    navigate("/dashboard");
  };
  return (
    <section className={styles.registerSection}>
      <div className={styles.formContainer}>
        <h1 className={styles.heading}>Login here</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <Input
              className={styles.inputs}
              type='email'
              required
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <Input
              className={styles.inputs}
              type='password'
              required
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              type='submit'
              className={styles.SignUp}
              appearance='primary'
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

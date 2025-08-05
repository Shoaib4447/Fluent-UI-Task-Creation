import { Button, Input, makeStyles } from "@fluentui/react-components";
import bg1 from "../assets/svgImages/bg1.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../api/authApiCalls";
import { useNavigate } from "react-router-dom";
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
    // padding: "2rem",
    backgroundColor: "#ffffffff",
    borderRadius: "6px",
    border: "1px solid #D1D1D1",
    minWidth: "200px",
  },
  heading: {
    fontSize: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  },
  formTitle: {
    borderBottom: "1px solid #f3f3f3",
    paddingTop: "2rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  inputNameGroup: {
    display: "flex",
    gap: "10px",
  },
  inputGroup: { width: "100%" },
  full: { width: "100%" },
  half: { width: "50%" },
  buttonWrapper: {
    width: "100%",
  },
  SignUp: {
    width: "100%",
  },
});
const SignUp = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // createdUser from signUp API
  const user = useSelector((state) => state.users.user);
  const token = useSelector((state) => state.users.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { firstName, lastName, username, email, password };
    signUpUser(userData, dispatch);
    navigate("/dashboard");
  };
  return (
    <section className={styles.registerSection}>
      <div className={styles.formContainer}>
        <div className={styles.formTitle}>
          <h1 className={styles.heading}>Sign Up</h1>
          <p>Please fill the form to create an account!</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputNameGroup}>
            <Input
              className={styles.half}
              type='text'
              placeholder='Enter your firstname...'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              className={styles.half}
              type='text'
              placeholder='Enter your lastname...'
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <Input
              className={styles.full}
              type='text'
              placeholder='Enter your username...'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <Input
              className={styles.full}
              type='email'
              required
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <Input
              className={styles.full}
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
      <p>
        Already have an account? <a href='#'>Login here</a>
      </p>
    </section>
  );
};

export default SignUp;

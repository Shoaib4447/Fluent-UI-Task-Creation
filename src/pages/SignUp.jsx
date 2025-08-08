import { Button, Input, makeStyles } from "@fluentui/react-components";
import { useState } from "react";
import { signUpUser } from "../api/authApiCalls";
import { useNavigate, Link } from "react-router-dom";
import { EyeOffRegular, EyeRegular } from "@fluentui/react-icons";
import PasswordChecklist from "react-password-checklist";

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
    width: "500px",
    minWidth: "200px",
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
    width: "87%",
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

  checklistWrapper: {
    width: "87%",
  },
});
const SignUp = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstname,
      lastname,
      username,
      email,
      password,
    };

    signUpUser(userData, navigate);
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
              className={`${styles.input} ${styles.half}`}
              type='text'
              required
              placeholder='Firstname...'
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
            <Input
              className={`${styles.input} ${styles.half}`}
              type='text'
              required
              placeholder='Lastname...'
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <Input
              className={`${styles.input} ${styles.full} `}
              type='text'
              placeholder='Username...'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
                  {showPassword ? <EyeOffRegular /> : <EyeRegular />}
                </span>
              }
              type={showPassword ? "text" : "password"}
              required
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.checklistWrapper}>
            <PasswordChecklist
              className={styles.checklist}
              rules={[
                "minLength",
                "specialChar",
                "number",
                "capital",
                "match",
                "lowercase",
              ]}
              minLength={8}
              value={password}
              valueAgain={confirmPassword}
              iconSize={10}
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
                  {showPassword ? <EyeOffRegular /> : <EyeRegular />}
                </span>
              }
              type={showPassword ? "text" : "password"}
              required
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
      <p className={styles.navigateLogin}>
        Already have an account?{" "}
        <Link to='/Login' className={styles.Loginbtn}>
          Login here
        </Link>
      </p>
    </section>
  );
};

export default SignUp;

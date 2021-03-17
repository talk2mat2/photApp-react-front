/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn, clearLoginError } from "../../actions/authactions";
import languageJson from "../../config/language";
import AlertDialog from "../../components/AlertDialog";
import CircularProgress from '@material-ui/core/CircularProgress'
const Loginpage = (props) => {
  //   const { handleDisplaySignUp } = props;
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(signIn(email, password));
    console.log(email, password);
  };
  const handleClose = () => {
    setEmail("");
    setPassword("");
    dispatch(clearLoginError());
  };
  useEffect(() => {
    const abortController = new AbortController();
    auth.error.flag&&setLoading(false)
    if (auth.info) {
      history.push("/dashboard");
      
    }
    return function cleanup() {
      abortController.abort();
    };
   
  });
  return (
    <div className="form-wrap" id="loging">
      <Link
        className="nav-link scroll"
        to="/"
        style={{
          textAlign: "center",
          marginTop: "-10p",
          marginBottom: "-20px",
        }}
      >
        <img
          src="/media/ogaphotos_favicon.png"
          width={80}
          height={80}
          alt="img"
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="sign-up-heading">
          <h4 className="headings">
            <Link  onClick={() => props.handleSignUpPage()} className="su"  id="sup2">
              {" "}
              SIGN UP{" "}
            </Link>
          </h4>
          <h4 className="headings">
            <Link  id="log2" onclick="login()">
              {" "}
              LOGIN
            </Link>{" "}
          </h4>
          {loading? <CircularProgress size={24} style={{fontSize:20,color:"white",position:"absolute",zIndex:3,marginLeft:"auto",marginRight:"auto",top:4}} />:null}
        </div>
      
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
        {/* {loading ? (
							<CircularProgress size={24} style={{fontSize:20,color:"white"}} />
						) : (
							languageJson.sign_in
						)} */}
        <input type="submit" defaultValue="Login" style={{ color: "white" }} />
        <p style={{ color: "#fff" }}>
          Don't have an account?{" "}
          <Link onClick={() => props.handleSignUpPage()}>Sign Up </Link>
        </p>
      </form>
      <AlertDialog open={auth.error.flag} onClose={handleClose}>
        {languageJson.sign_in_error}
      </AlertDialog>
    </div>
  );
};

export default Loginpage;

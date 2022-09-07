import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../../firebase/connection.js"
import { auth } from "../../../firebase/connection.js";

const Register = () => {

  const navigate = useNavigate();

  const usersCollectionRef = collection(db,"usuarios");
  const [name, setName] = useState([""]);
  const [email, setEmail] = useState([""]);
  const [password, SetPassword] = useState([""]);
  /*const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });*/
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!name || !email || !password) {
      setErrorMsg("datos vacios");
      return;
    }
    setErrorMsg("");
  

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        ///////
        try {


          const register = addDoc(usersCollectionRef, {
            /* eslint-disable  object-shorthand */
            name: name,
            email: email,
            
          });
          navigate("/");
          console.log(register);
          // eslint-disable-next-line

          ////////////////////
      /*    setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: name,
        });
        navigate("/");*/
 
        } catch (e) {
          console.error('Error, no se pudo registrar ', e);
        }
        
        ///////
      /*  setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: name,
        });
        navigate("/");*/
      
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div >
      <div >
        <h1 >registrate</h1>

        <input
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
        />
        <input
          label="Email"
          placeholder="Enter email address"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />
        <input
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={(event) =>
            SetPassword(event.target.value)
          }
        />

        <div >
          <b>{errorMsg}</b>
   
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/home">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;




/*
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";


//import InputControl from "../InputControl/InputControl";
import { auth } from "../../../firebase/connection.js";

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div >
      <div >
        <h1 >registrate</h1>

        <input
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <input
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <input
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div >
          <b>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/home">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
*/
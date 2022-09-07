import { React,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/connection.js";
import arcoIris from "../../Assets/arcoIris.png"


const Home =() => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMesage, setErrorMesage] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {

    if (!email || !password ) {
      setErrorMesage("Campos vacios");
      return;
    }
    setErrorMesage("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/register");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMesage("Ingrese datos correctos");
      });
  };

  return (
    <div>
      <div className="ContainerView">
        <img className="ContainerImage" src={arcoIris} ></img>
        <h1 className="StyleTitle">Lab Notes</h1>
</div>
    </div>
  );
}
export default Home;
import React,{useEffect ,useState} from 'react'
import FacebookLogin from 'react-facebook-login'
import './StyleSignin.css'

export default function Facebook() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");

    const responseFacebook = (response) => {
        if (response.status !== "unknown") {
          setName(response.name);
          setEmail(response.email);
          setToken(response.accessToken);
        } else {
          console.log("You have to sgin in . . . ");
        }
      };
    return (
        <div>
      <h4 className="content" >
       Sign in with Facebook
      </h4>
      <div>
        <FacebookLogin
          appId="1114817675692645"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>
      <div>
        {token ? (
          <div>
            <h3>Hello ( {name} ) </h3>
          </div>
        ) : null}
      </div>
    </div>
    )
}

import { useState } from "react";
import Mensaje from "./Mensaje";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const data = await response.text();
        setToken(data);
    }
    else {
      alert("Invalid email or password");
    }
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div>
      {token ? (
        <div>
            <div>
                <Mensaje mensaje={`Welcome ${email}`} />
            </div>
            <div>
                <button onClick={handleLogout}>Log Out</button>
            </div>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <div>
            <button onClick={handleLogin}>Log In</button>
          </div>
        </div>
      )}
    </div>
  );
}

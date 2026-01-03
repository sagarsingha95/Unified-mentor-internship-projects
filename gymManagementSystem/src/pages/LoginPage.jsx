import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const LoginPage = () => {
  const { setLogin } = useContext(DataContext);

  const handleLogin = () => {
    setLogin(true);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>🏋 Flexzone Admin</h1>
        <p className="subtitle">Sign in to continue</p>

        <div className="input-group">
          <label>Username</label>
          <input type="text" value="admin" readOnly />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" value="1234" readOnly />
        </div>

        <button className="btn login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

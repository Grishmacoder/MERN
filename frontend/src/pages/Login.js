import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const{login, error, isLoading} = useLogin();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    await login(formData)

  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back 🍰</h2>
        <p>Login to continue</p>

        <form onSubmit={handleSubmit}>
          
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button disabled={isLoading} className="btn-primary">Login</button>
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;

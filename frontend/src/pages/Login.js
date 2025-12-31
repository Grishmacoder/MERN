import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
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

          <button className="btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

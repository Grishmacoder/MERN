import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
  });
  const { signup, error, isLoading } = useSignup();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("signup data", formData)
    await signup(formData);
  };
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account 🎂</h2>
        <p>Join us for delicious moments</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

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

          <button disabled={isLoading} className="btn-primary">
            Sign Up
          </button>
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Signup;

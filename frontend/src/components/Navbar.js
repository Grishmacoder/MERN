import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <h1>Cake Shop</h1>
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          {user && (
            <div className="user-action">
              <span>{user.email}</span>
              <button onClick={handleClick}>Logout</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}

          <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown-title" onClick={() => setOpen(!open)}>
              Categories
            </button>

            {open && (
              <div className="dropdown-menu">
                <Link to="/category/chocolate" onClick={() => setOpen(false)}>
                  Chocolate Cakes
                </Link>
                <Link to="/category/eggless" onClick={() => setOpen(false)}>
                  Eggless Cakes
                </Link>
                <Link to="/category/wedding" onClick={() => setOpen(false)}>
                  Wedding Cakes
                </Link>
                <Link to="/category/custom" onClick={() => setOpen(false)}>
                  CustomCakes
                </Link>
              </div>
            )}
          </div>
          <Link to="/cart">cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

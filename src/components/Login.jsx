import "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button>Login</button>

        <p>
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaShieldAlt } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();

  // mode toggles
  const [showSignup, setShowSignup] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  // login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // signup state
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  // forgot password state
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotPassword, setForgotPassword] = useState('');
  const [forgotConfirm, setForgotConfirm] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Login - ForStackly Business Solutions';
  }, []);

  // ---- welcome.jsx parity: LOGIN ----
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail === 'admin@enkonix.in' && loginPassword === 'admin123') {
      localStorage.setItem('firstname', 'admin');
      localStorage.setItem('lastname', 'dashboard');
      localStorage.setItem('email', loginEmail);
      navigate('/admin-dashboard');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );
    if (user) {
      localStorage.setItem('firstname', user.firstName || '');
      localStorage.setItem('lastname', user.lastName || '');
      localStorage.setItem('email', user.email || '');
      navigate('/home1');
    } else {
      setError('Invalid email or password.');
    }
  };

  // ---- welcome.jsx parity: SIGNUP ----
  const handleSignup = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u) => u.email === signupData.email)) {
      setError('Email already registered.');
      return;
    }
    const now = new Date();
    const newUser = {
      ...signupData,
      signupTime: now.toLocaleTimeString(),
      signupDate: now.toLocaleDateString()
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful!');
    setShowSignup(false);
    setSignupData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
    setError('');
  };

  // ---- welcome.jsx parity: FORGOT ----
  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (forgotPassword !== forgotConfirm) {
      setError('Passwords do not match.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const idx = users.findIndex((u) => u.email === forgotEmail);
    if (idx === -1) {
      setError('Email not found.');
      return;
    }
    users[idx].password = forgotPassword;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Password updated successfully!');
    setShowForgot(false);
    setForgotEmail('');
    setForgotPassword('');
    setForgotConfirm('');
    setError('');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-grid">
         <motion.div
  className="login-branding"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <img 
    src="images/signin.png"
    alt="Login visual"
    className="login-image"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '20px'
    }}
  />
</motion.div>


          {/* Right Side - Forms (modes) */}
          <motion.div
            className="login-form-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-container">
              {error && (
                <motion.div
                  className="error-message"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.div>
              )}

              {/* LOGIN MODE */}
              {!showSignup && !showForgot && (
                <>
                  <div className="form-header">
                    <h2>Sign In</h2>
                    <p>Enter your credentials to access your account</p>
                  </div>

                  <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <div className="password-field">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="form-control"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          placeholder="Enter your password"
                          required
                        />
                        <button
                          type="button"
                          className="password-toggle"
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>

                    <div className="form-options">
                      <button
                        type="button"
                        className="forgot-link"
                        onClick={() => {
                          setError('');
                          setShowForgot(true);
                        }}
                      >
                        Forgot Password?
                      </button>
                    </div>

                    <motion.button
                      type="submit"
                      className="btn btn-primary btn-block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Sign In
                    </motion.button>
                  </form>

                  <div className="signup-link">
                    <p>
                      Don&apos;t have an account?{' '}
                      <button
                        type="button"
                        className="inline-link"
                        onClick={() => {
                          setError('');
                          setShowSignup(true);
                        }}
                      >
                        Sign up
                      </button>
                    </p>
                  </div>
                </>
              )}

              {/* SIGNUP MODE */}
              {showSignup && !showForgot && (
                <>
                  <div className="form-header">
                    <h2>Create your account</h2>
                    <p>It only takes a minute</p>
                  </div>

                  <form onSubmit={handleSignup} className="login-form">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={signupData.firstName}
                        onChange={(e) =>
                          setSignupData({ ...signupData, firstName: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={signupData.lastName}
                        onChange={(e) =>
                          setSignupData({ ...signupData, lastName: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={signupData.email}
                        onChange={(e) =>
                          setSignupData({ ...signupData, email: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        value={signupData.phone}
                        onChange={(e) =>
                          setSignupData({ ...signupData, phone: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={signupData.password}
                        onChange={(e) =>
                          setSignupData({ ...signupData, password: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={signupData.confirmPassword}
                        onChange={(e) =>
                          setSignupData({ ...signupData, confirmPassword: e.target.value })
                        }
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="btn btn-primary btn-block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Sign Up
                    </motion.button>
                  </form>

                  <div className="signup-link">
                    <p>
                      Already have an account?{' '}
                      <button
                        type="button"
                        className="inline-link"
                        onClick={() => {
                          setError('');
                          setShowSignup(false);
                        }}
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </>
              )}

              {/* FORGOT PASSWORD MODE */}
              {showForgot && (
                <>
                  <div className="form-header">
                    <h2>Reset Password</h2>
                    <p>Enter your email and a new password</p>
                  </div>

                  <form onSubmit={handleForgotPassword} className="login-form">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={forgotPassword}
                        onChange={(e) => setForgotPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Confirm New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={forgotConfirm}
                        onChange={(e) => setForgotConfirm(e.target.value)}
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="btn btn-primary btn-block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Reset Password
                    </motion.button>
                    <button
                      type="button"
                      className="btn btn-block"
                      onClick={() => {
                        setError('');
                        setShowForgot(false);
                      }}
                    >
                      Cancel
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ====== PREMIUM STYLES ====== */}
      <style jsx>{`
        :root {
          --primary-color: #0ea5e9;
          --secondary-color: #6366f1;
          --card-bg: #ffffff;
          --heading-color: #111827;
          --text-color: #111827;
          --text-muted: #6b7280;
          --border-color: #e5e7eb;
          --input-bg: #ffffff;
          --sidebar-bg: #f9fafb;
          --danger-color: #ef4444;
        }
        body.dark {
          --card-bg: #111827;
          --heading-color: #f9fafb;
          --text-color: #e5e7eb;
          --text-muted: #9ca3af;
          --border-color: #374151;
          --input-bg: #0b1220;
          --sidebar-bg: #0b1220;
        }

        .login-page {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
        }

        .login-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .login-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--card-bg);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          min-height: 600px;
          max-width: 100%;
        }

       .login-branding {
  padding: 0;
  background: none;
  display: flex;
  align-items: stretch;
  justify-content: center;
  height: 100%;
}

.login-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  display: block;
}


        .login-branding::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="30" cy="30" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="70" cy="70" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
          opacity: 0.3;
        }

        .branding-content {
          position: relative;
          z-index: 2;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 40px;
        }

        .logo-icon {
          font-size: 2.5rem;
          color: white;
        }

        .brand-logo h2 {
          font-size: 2rem;
          font-weight: 700;
          color: white;
        }

        .branding-content h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 20px;
          color: white;
        }

        .branding-content p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .feature-content h4 {
          color: white;
          font-size: 1.1rem;
          margin-bottom: 5px;
        }

        .feature-content p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          margin: 0;
        }

        .login-form-section {
          padding: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-container {
          width: 100%;
          max-width: 420px;
        }

        .form-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .form-header h2 {
          font-size: 2rem;
          color: var(--heading-color);
          margin-bottom: 8px;
        }

        .form-header p {
          color: var(--text-muted);
          font-size: 0.98rem;
        }

        .error-message {
          background: var(--danger-color);
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          text-align: center;
          font-size: 0.9rem;
        }

        .login-form {
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: var(--text-color);
        }

        .form-control {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid var(--border-color);
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.25s ease;
          background: var(--input-bg);
          color: var(--text-color);
        }

        .form-control:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);
        }

        .password-field {
          position: relative;
        }

        .password-toggle {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 1.1rem;
          padding: 2px;
          transition: color 0.2s ease;
        }
        .password-toggle:hover {
          color: var(--primary-color);
        }

        .form-options {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin: 6px 0 22px;
        }

        .forgot-link,
        .inline-link {
          background: none;
          border: none;
          padding: 0;
          color: var(--primary-color);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
        }
        .forgot-link:hover,
        .inline-link:hover {  
          color: var(--secondary-color);
          text-decoration: underline;
        }

        .btn {
          border: none;
          border-radius: 12px;
          padding: 14px 22px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.3s ease, background 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: var(--sidebar-bg);
          color: var(--text-color);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
        }
        .btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
        }
        .btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
        .btn-primary {
          background: var(--primary-color);
          color: #fff;
        }
        .btn-primary:hover {
          filter: brightness(1.05);
        }
        .btn-block {
          width: 100%;
        }

        .signup-link {
          text-align: center;
          color: var(--text-color);
        }

        @media (max-width: 1024px) {
          .login-grid {
            grid-template-columns: 1fr;
          }
          .login-branding {
            padding: 40px;
            text-align: center;
          }
          .branding-content h1 {
            font-size: 2.5rem;
          }
          .features-list {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 768px) {
          .login-form-section {
            padding: 40px;
          }
          .login-branding {
            padding: 30px;
          }
          .branding-content h1 {
            font-size: 2rem;
          }
          .form-header h2 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .login-page {
            padding: 10px;
          }
          .login-form-section {
            padding: 20px;
          }
          .login-branding {
            padding: 20px;
          }
          .features-list {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;

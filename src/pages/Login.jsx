import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const translations = {
  en: {
    signIn: "Sign In",
    signUp: "Sign Up",
    createAccount: "Create your account",
    enterCredentials: "Enter your credentials to access your account",
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: "Already have an account?",
    forgotPassword: "Forgot Password?",
    resetPassword: "Reset Password",
    enterNewPassword: "Enter your email and a new password",
    cancel: "Cancel",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    password: "Password",
    confirmPassword: "Confirm Password",
    newPassword: "New Password",
    confirmNewPassword: "Confirm New Password",
  },
  ar: {
    signIn: "تسجيل الدخول",
    signUp: "إنشاء حساب",
    createAccount: "أنشئ حسابك",
    enterCredentials: "أدخل بيانات الدخول الخاصة بك",
    dontHaveAccount: "ليس لديك حساب؟",
    alreadyHaveAccount: "هل لديك حساب؟",
    forgotPassword: "نسيت كلمة المرور؟",
    resetPassword: "إعادة تعيين كلمة المرور",
    enterNewPassword: "أدخل بريدك الإلكتروني وكلمة المرور الجديدة",
    cancel: "إلغاء",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    newPassword: "كلمة المرور الجديدة",
    confirmNewPassword: "تأكيد كلمة المرور الجديدة",
  },
  he: {
    signIn: "התחברות",
    signUp: "הרשמה",
    createAccount: "צור את החשבון שלך",
    enterCredentials: "הזן את אישורי הגישה שלך",
    dontHaveAccount: "אין לך חשבון?",
    alreadyHaveAccount: "כבר יש לך חשבון?",
    forgotPassword: "שכחתי סיסמה?",
    resetPassword: "אפס סיסמה",
    enterNewPassword: "הזן את האימייל והסיסמה החדשה שלך",
    cancel: "בטל",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    email: "אימייל",
    phone: "טלפון",
    password: "סיסמה",
    confirmPassword: "אישור סיסמה",
    newPassword: "סיסמה חדשה",
    confirmNewPassword: "אישור סיסמה חדשה",
  }
};

const Login = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en');
  const t = translations[language];
  const [showSignup, setShowSignup] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotPassword, setForgotPassword] = useState('');
  const [forgotConfirm, setForgotConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    document.title = 'Login - ForStackly Business Solutions';
  }, []);
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
              src="images/login.jpg"
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
          <motion.div
            className="form-card login-form-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Language selector at TOP RIGHT */}
            <div className="lang-dropdown">
              <select
                value={language}
                onChange={e => setLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
                <option value="he">עברית</option>
              </select>
            </div>
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
                    <h2>{t.signIn}</h2>
                    <p>{t.enterCredentials}</p>
                  </div>
                  <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                      <label>{t.email}</label>
                      <input
                        type="email"
                        className="form-control"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder={t.email}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>{t.password}</label>
                      <div className="password-field">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="form-control"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          placeholder={t.password}
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
                        {t.forgotPassword}
                      </button>
                    </div>
                    <motion.button
                      type="submit"
                      className="btn btn-primary btn-block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t.signIn}
                    </motion.button>
                  </form>
                  <div className="signup-link">
                    <p>
                      {t.dontHaveAccount}{' '}
                      <button
                        type="button"
                        className="inline-link"
                        onClick={() => {
                          setError('');
                          setShowSignup(true);
                        }}
                      >
                        {t.signUp}
                      </button>
                    </p>
                  </div>
                </>
              )}
              {/* SIGNUP MODE */}
              {showSignup && !showForgot && (
                <>
                  <div className="form-header">
                    <h2>{t.createAccount}</h2>
                    <p>It only takes a minute</p>
                  </div>
                  <form onSubmit={handleSignup} className="login-form">
                    <div className="form-group">
                      <label>{t.firstName}</label>
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
                      <label>{t.lastName}</label>
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
                      <label>{t.email}</label>
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
                      <label>{t.phone}</label>
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
                      <label>{t.password}</label>
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
                      <label>{t.confirmPassword}</label>
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
                      {t.signUp}
                    </motion.button>
                  </form>
                  <div className="signup-link">
                    <p>
                      {t.alreadyHaveAccount}{' '}
                      <button
                        type="button"
                        className="inline-link"
                        onClick={() => {
                          setError('');
                          setShowSignup(false);
                        }}
                      >
                        {t.signIn}
                      </button>
                    </p>
                  </div>
                </>
              )}
              {/* FORGOT PASSWORD MODE */}
              {showForgot && (
                <>
                  <div className="form-header">
                    <h2>{t.resetPassword}</h2>
                    <p>{t.enterNewPassword}</p>
                  </div>
                  <form onSubmit={handleForgotPassword} className="login-form">
                    <div className="form-group">
                      <label>{t.email}</label>
                      <input
                        type="email"
                        className="form-control"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>{t.newPassword}</label>
                      <input
                        type="password"
                        className="form-control"
                        value={forgotPassword}
                        onChange={(e) => setForgotPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>{t.confirmNewPassword}</label>
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
                      {t.resetPassword}
                    </motion.button>
                    <button
                      type="button"
                      className="btn btn-block"
                      onClick={() => {
                        setError('');
                        setShowForgot(false);
                      }}
                    >
                      {t.cancel}
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
        .form-card {
  position: relative;
  width: 100%;
  height: 100%;
  /* Add/adjust these lines: */
  padding: 48px 36px 32px 36px;
  box-sizing: border-box;
}
        .lang-dropdown {
          position: absolute;
          top: 24px;
          right: 24px;
          z-index: 10;
        }
        .lang-dropdown select {
          padding: 8px 20px 8px 12px;
          font-size: 1rem;
          border-radius: 8px;
          border: 1px solid #c9c9c9;
          background: #fff;
          color: #222;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          min-width: 115px;
          font-weight: 500;
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
          background: #f3f6fd;
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
          font-size: 1.2rem;
          padding: 2px;
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
        }
        @media (max-width: 768px) {
          .login-form-section {
            padding: 40px;
          }
          .login-branding {
            padding: 30px;
          }
        }

        @media (max-width: 600px) {
  .form-card {
    padding: 24px 10px 12px 10px;
  }
}
        @media (max-width: 480px) {
          .login-page { padding: 10px; }
          .login-form-section { padding: 20px; }
          .login-branding { padding: 20px; }
        }
      `}</style>
    </div>
  );
};

export default Login;

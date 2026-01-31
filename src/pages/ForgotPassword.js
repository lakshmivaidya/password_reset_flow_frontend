import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://password-reset-flow-backend-seven.vercel.app/api/auth/forgot-password', { email });
      alert(res.data.msg);
    } catch (err) {
      alert(err.response?.data?.msg || 'Error sending reset link');
    }
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <form onSubmit={submit}>
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button>Send Reset Link</button>
      </form>

      <Link to="/">Back to Login</Link>
    </div>
  );
}
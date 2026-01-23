import { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://password-reset-flow-backend-lcqd.onrender.com/api/auth/reset-password/${token}`,
        { password }
      );
      alert(res.data.msg);

      // Redirect to login after successful reset
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.msg || 'Error resetting password');
    }
  };

  return (
    <div className="container">
      <h2>Reset Password</h2>
      <form onSubmit={submit}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Reset</button>
      </form>
    </div>
  );
}
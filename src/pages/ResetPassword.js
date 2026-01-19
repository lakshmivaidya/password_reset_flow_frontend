import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { password }
      );
      setMsg(res.data.msg);
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Error');
    }
  };

  return (
    <div className="container">
      <h2>Reset Password</h2>
      <form onSubmit={submit}>
        <input type="password" placeholder="New Password" onChange={e => setPassword(e.target.value)} />
        <button>Reset</button>
      </form>

      <p className="success">{msg}</p>
    </div>
  );
}

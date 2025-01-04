import React, { useState } from "react";

function LostPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleResetPassword = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setError("");
    setSuccess("");

    if (!email) {
      setError("يرجى إدخال بريد إلكتروني!");
    } else if (!emailRegex.test(email)) {
      setError("يرجى إدخال بريد إلكتروني صالح!");
    } else {
      setSuccess("تم إرسال رسالة استعادة كلمة المرور إلى بريدك الإلكتروني!");
      setEmail("");
    }
  };

  return (
    <div>
      <div className="reset_password">
        <p>
          <b>
            If you forget your password, you can change it. You will receive a
            message on your email to change it.
          </b>
        </p>
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Reset Password</button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
    </div>
  );
}

export default LostPassword;

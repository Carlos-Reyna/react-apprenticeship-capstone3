import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      Requested page not found, return to{' '}
      <Link to="/" title="login-link">
        Login
      </Link>
    </div>
  );
}

export default NotFound;

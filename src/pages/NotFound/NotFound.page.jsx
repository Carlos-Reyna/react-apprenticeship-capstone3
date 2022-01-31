import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      Requested page not found, return to <Link to="/" />
    </div>
  );
}

export default NotFound;

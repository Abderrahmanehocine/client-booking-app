import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAdminLoggedIn, onLogout, businessName }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to={isAdminLoggedIn ? "/admin" : "/"}>{businessName || 'Client Booking App'}</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            {!isAdminLoggedIn && (
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
            )}
            <li>
              <Link
                to={isAdminLoggedIn ? "/admin/bookings" : "/client/bookings"}
                className="hover:underline"
              >
                {isAdminLoggedIn ? "Bookings" : "My Bookings"}
              </Link>
            </li>
            {isAdminLoggedIn ? (
              <>
                <li>
                  <Link to="/admin" className="hover:underline">Admin Dashboard</Link>
                </li>
                <li>
                  <button onClick={onLogout} className="hover:underline">Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/admin/login" className="hover:underline">Admin Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
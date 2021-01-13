import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return <>
    <nav>
      <ul>
        <li>
          <Link to="/">Default</Link>
        </li>
        <li>
          <Link to="/route1">Route-1</Link>
        </li>
        <li>
          <Link to="/route2">Route-2</Link>
        </li>
      </ul>
    </nav>
  </>
}

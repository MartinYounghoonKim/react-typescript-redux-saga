import React from 'react'

const Footer = (
  { count }
) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{count}</strong>
        <span>item</span>
      left
    </span>
    <ul className="todo-filters">
      <li><a href="#none">All</a></li>
      <li><a href="#none">Active</a></li>
      <li><a href="#none">Completed</a></li>
    </ul>
  </footer>
);

export default Footer;

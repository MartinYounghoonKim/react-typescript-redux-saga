import React from 'react'

interface IProps {
  count: number;
}
const Footer: React.FunctionComponent<IProps> = ({ count }) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{count}</strong>
        <span>item</span>
      left
    </span>
    <ul className="todo-filters">
      <li><a href="#all">All</a></li>
      <li><a href="#active">Active</a></li>
      <li><a href="#completed">Completed</a></li>
    </ul>
  </footer>
);

export default Footer;

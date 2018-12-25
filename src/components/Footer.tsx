import React from 'react';
import classNames from 'classnames';
import {NavLink} from 'react-router-dom';

interface IProps {
  count: number;
  url: string;
}
const Footer: React.FunctionComponent<IProps> = (
  {
    url,
    count
  }
) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{count}</strong>
        <span>item</span>
      left
    </span>
    <ul className="todo-filters">
      <li>
        <NavLink className={classNames({
          "selected": url === "/all"
        })} to="/all">
          All
        </NavLink>
      </li>
      <li>
        <NavLink className={classNames({
          "selected": url === "/active"
        })} to="/active">
          Active
        </NavLink>
      </li>
      <li>
        <NavLink className={classNames({
          "selected": url === "/completed"
        })} to="/completed">
          Completed
        </NavLink>
      </li>
    </ul>
  </footer>
);

export default Footer;

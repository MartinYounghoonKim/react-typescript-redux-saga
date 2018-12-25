import React from 'react';
import classNames from 'classnames';

interface IProps {
  count: number;
  filter: string;
  setFilter: (url: string) => void;
}
const Footer: React.FunctionComponent<IProps> = (
  {
    count,
    filter,
    setFilter
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
        <a className={classNames({ "selected": filter === "all" })}
           onClick={() => setFilter("all")}>
          All
        </a>
      </li>
      <li>
        <a className={classNames({ "selected": filter === "active" })}
           onClick={() => setFilter("active")}>
          Active
        </a>
      </li>
      <li>
        <a className={classNames({ "selected": filter === "completed" })}
           onClick={() => setFilter("completed")}>
          Completed
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;

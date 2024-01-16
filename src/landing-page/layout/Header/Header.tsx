import type { FC } from 'react';
import css from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={css.header}>
      <div className={css.title_section}>
        <img src="/assets/logo.svg" alt="app logo" />
        <h1>Money Handler</h1>
      </div>

      <p>Login</p>
    </header>
  );
};

export default Header;

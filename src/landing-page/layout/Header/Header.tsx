import type { FC } from 'react';
import css from './Header.module.css';
import { Typography } from '@/shared/components/ui-kit';

const Header: FC = () => {
  return (
    <header className={css.header}>
      <div className={css.title_section}>
        <img src="/assets/logo.svg" alt="app logo" />
        <Typography variant="h1">Money Handler</Typography>
      </div>

      <Typography>Login</Typography>
    </header>
  );
};

export default Header;

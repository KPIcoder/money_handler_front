import type { FC } from 'react';
import css from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={css.footer}>
      <p>© Money Handler 2024. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

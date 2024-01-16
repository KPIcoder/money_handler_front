import type { FC } from 'react';
import css from './Footer.module.css';
import { Typography } from '@/shared/components/ui-kit';

const Footer: FC = () => {
  return (
    <footer className={css.footer}>
      <Typography variant="body2">© Money Handler 2024. All rights reserved.</Typography>
    </footer>
  );
};

export default Footer;

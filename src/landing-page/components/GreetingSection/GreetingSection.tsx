import type { FC } from 'react';
import css from './GreetingsSection.module.css';
import { Button, Typography } from '@/shared/components/ui-kit';

const GreetingSection: FC = () => (
  <section>
    <Typography variant="body1" style={{ maxWidth: '420px' }}>
      Let us save your time with managing your finances
    </Typography>
    <div className={css.greeting_buttons}>
      <Button variant="main">
        <Typography variant="body2">Log in</Typography>
      </Button>

      <Button variant="main">
        <Typography variant="body2">Create new account</Typography>
      </Button>
    </div>
  </section>
);

export default GreetingSection;

import type { FC } from 'react';
import { Footer, Header } from './layout';
import { Button, Typography } from '@/shared/components/ui-kit';

const LandingPage: FC = () => {
  return (
    <>
      <Header />
      <main style={{ padding: 10 }}>
        <Typography variant="h1">I am heading h1</Typography>
        <Typography variant="h2">I am heading h2</Typography>
        <Typography variant="h3">I am heading h3</Typography>
        <Typography variant="h4">I am heading h4</Typography>
        <Typography variant="body1">I am paragraph body1</Typography>
        <Typography variant="body2">I am paragraph body2</Typography>
        <Typography variant="caption">I am caption</Typography>
        <div>
          <Button variant="main">I am action button</Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;

import type { FC } from 'react';
import { GreetingSection } from './components';
import css from './landing.page.module.css';
import { Footer, Header } from './layout';

const LandingPage: FC = () => {
  return (
    <>
      <Header />
      <main className={css.landing_main}>
        <GreetingSection />

        <img
          className={css.landing_image}
          src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmluYW5jZXN8ZW58MHx8MHx8fDA%3D"
          alt="money"
        />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;

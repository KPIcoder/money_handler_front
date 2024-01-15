import type { FC } from 'react';
import useTranslate from '@/shared/hooks/useTranslation';
import Header from '@/shared/typography/header';

const HomePage: FC = () => {
  const t = useTranslate();
  return <Header title={t('hello world')} />;
};

export default HomePage;

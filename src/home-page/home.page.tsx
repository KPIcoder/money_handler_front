import { useTranslate } from '@/shared/hooks/useTranslation';
import { Header } from '@/shared/typography/header';
import { FC } from 'react';

export const HomePage: FC = () => {
  const t = useTranslate();
  return <Header title={t('hello world')} />;
};

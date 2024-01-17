import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import css from './Typography.module.css';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'caption';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  variant?: TypographyVariant;
}

// TODO: rewrite switch. WTF did I use it?
// TODO: join classes

const Typography: FC<Props> = ({ variant = 'body1', children, ...props }) => {
  switch (variant) {
    case 'h1':
      return (
        <h1 className={css.typography_h1} {...props}>
          {children}
        </h1>
      );

    case 'h2':
      return (
        <h2 className={css.typography_h2} {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={css.typography_h3} {...props}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={css.typography_h4} {...props}>
          {children}
        </h4>
      );
    case 'body1':
      return (
        <p className={css.typography_body1} {...props}>
          {children}
        </p>
      );
    case 'body2':
      return (
        <p className={css.typography_body2} {...props}>
          {children}
        </p>
      );
    case 'caption':
      return (
        <p className={css.typography_caption} {...props}>
          {children}
        </p>
      );

    default:
      return (
        <p className={css.typography_body1} {...props}>
          {children}
        </p>
      );
  }
};

export default Typography;

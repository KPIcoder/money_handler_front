import type { DetailedHTMLProps, ButtonHTMLAttributes, FC } from 'react';
import css from './Button.module.css';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: 'main' | 'success' | 'error' | 'cancel';
}

const Button: FC<Props> = ({ variant, children, ...props }) => {
  return (
    <button type="button" className={`${css.shared} ${css[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

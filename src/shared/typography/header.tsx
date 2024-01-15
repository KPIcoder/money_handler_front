import type { FC } from 'react';

const Header: FC<{ title: string }> = ({ title }) => <h1>{title}</h1>;

export default Header;

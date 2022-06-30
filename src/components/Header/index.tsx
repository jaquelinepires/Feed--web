import React, { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';


import { Container } from './styles';
import logo from '../../assets/logo.svg';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <div className="div2">
      <img src={logo} alt="logotipo" />
      <h2>Feed</h2>
      </div>
      <div className="div">
            <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.icon)}
        onColor={colors.icon}
      />
      </div>
    </Container>
  );
};

export default Header

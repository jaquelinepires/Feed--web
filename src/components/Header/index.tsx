import { Container } from './styles';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="logotipo" />
      <h2>Feed</h2>
    </Container>
  );
};


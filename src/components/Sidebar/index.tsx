import { Container, Profile, Footer } from './styles';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';
export function Sidebar() {
  return (
    <Container>
      <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      
      <Profile>
        <img className="avatarWithBorder" src="https://github.com/jaquelinepires.png" />
        <strong>Jaqueline Pires</strong>
        <span>Web Developer</span>
      </Profile>

      <Footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </Footer>
    </Container>
  );
};



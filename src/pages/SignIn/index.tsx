import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiUser, FiLock, FiLogIn } from 'react-icons/fi';

import Input from '../../components/Input';

import SignImage from '../../assets/sign-in-image.svg';

import { Container, SignInContent, SignInImage } from './styles';

const SignIn: React.FC = () => {
  const handleSubmit = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <SignInContent>
        <Form onSubmit={handleSubmit}>
          <h1>Faça o login</h1>

          <div className="circle" />
          <div
            className="circle"
            style={{ width: '160px', height: '130px', opacity: '0.12' }}
          />
          <div className="circle" style={{ left: '-50px', top: '370px' }} />
          <div
            className="circle"
            style={{
              left: '-50px',
              width: '130px',
              height: '130px',
              top: '350px',
              opacity: '0.12',
            }}
          />

          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <button type="submit">Entrar</button>

          <a href="#">
            <FiLogIn />
            Criar conta
          </a>
        </Form>
      </SignInContent>

      <SignInImage>
        <h1>O seu portal de empregabilidade</h1>
        <h4>
          Publique os trabalhos que você realiza diariamente ou encontre
          profisionais que você necessita
        </h4>
        <img src={SignImage} alt="" />
      </SignInImage>
    </Container>
  );
};

export default SignIn;

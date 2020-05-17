import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiUser, FiLock, FiLogIn } from 'react-icons/fi';
import * as Yup from 'yup';

/** Components */
import Input from '../../components/Input';

/** Utils */
import getValidationErrors from '../../utils/getValidationErrors';

/** Assets */
import SignImage from '../../assets/sign-in-image.svg';
import Logo from '../../assets/logo.png';

/** Context */
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import { Container, SignInContent, SignInImage, Dots } from './styles';

interface FormSignInData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: FormSignInData) => {
      try {
        formRef.current?.setErrors([]);

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Formato de email invalido')
            .required('Email obrigatório'),
          password: Yup.string().required('Senha obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({ email: data.email, password: data.password });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(err));
        }

        addToast({
          title: 'Erro',
          description: 'Erro ao realizar o login',
          type: 'error',
        });
      }
    },
    [signIn, addToast]
  );

  return (
    <Container>
      <Dots />
      <SignInContent>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <img src={Logo} alt="" width={200} height={200} />

          <div className="circle" />
          <div
            className="circle"
            style={{ width: '160px', height: '130px', opacity: '0.12' }}
          />
          <div className="circle" style={{ left: '-50px', top: '470px' }} />
          <div
            className="circle"
            style={{
              left: '-50px',
              width: '130px',
              height: '130px',
              top: '450px',
              opacity: '0.12',
            }}
          />

          <Input icon={FiUser} name="email" placeholder="Email" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <button type="submit">Entrar</button>

          <a href="#sdafasdf">
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

        <Dots style={{ right: '0', bottom: '0', opacity: '0.1' }} />
      </SignInImage>
    </Container>
  );
};

export default SignIn;

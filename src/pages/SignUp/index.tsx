import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLock, FiArrowLeft, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';

import api from '../../services/api';

import getValidationErros from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';

import Logo from '../../assets/logo.png';
import SignImage from '../../assets/sig-up-image.svg';

import { Container, Dots, SignUpContent, SignUpImage } from './styles';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome e obrigatório'),
          email: Yup.string()
            .email('E-mail invalido')
            .required('E-mail e obrigatório'),
          password: Yup.string().min(6, 'Senha mínimo de 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('users', data);

        addToast({
          type: 'success',
          title: 'Cadastro',
          description: 'Cadastro realizado com sucesso',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErros(err));
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Erro ao realizar o cadastro',
        });
      }
    },
    [addToast]
  );

  return (
    <Container>
      <Dots />

      <SignUpImage>
        <h1>O seu portal de empregabilidade</h1>
        <h4>
          Publique os trabalhos que você realiza diariamente ou encontre
          profisionais que você necessita
        </h4>
        <img src={SignImage} alt="" />

        <Dots style={{ right: '0', bottom: '0', opacity: '0.1' }} />
      </SignUpImage>

      <SignUpContent>
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

          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="Email" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <button type="submit">Cadastrar</button>

          <Link to="/">
            <FiArrowLeft />
            Fazer login
          </Link>
        </Form>
      </SignUpContent>
    </Container>
  );
};

export default SignUp;

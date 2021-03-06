import React from 'react';

import Toast from '../Toast';

import { MessagesProps } from '../../hooks/toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: MessagesProps[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;

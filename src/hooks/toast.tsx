import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

interface ToastProps {
  addToast(message: Omit<MessagesProps, 'id'>): void;
  removeToast(id: string): void;
}

export interface MessagesProps {
  id: string;
  type?: 'error' | 'success' | 'info';
  title: string;
  description: string;
}

const ToastContext = createContext<ToastProps>({} as ToastProps);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<MessagesProps[]>([]);

  const addToast = useCallback(
    ({ title, description, type }: Omit<MessagesProps, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages([...messages, toast]);
    },
    [messages]
  );

  const removeToast = useCallback((id: string) => {
    setMessages((oldMessages) =>
      oldMessages.filter((message) => message.id !== id)
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer messages={messages} />
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastProps {
  const toast = useContext(ToastContext);

  return toast;
}

export { ToastProvider, useToast };

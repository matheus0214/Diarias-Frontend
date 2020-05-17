import { ValidationError } from 'yup';

interface ErrorData {
  [key: string]: string;
}

function getValidationErrors(errors: ValidationError): ErrorData {
  const err: ErrorData = {};

  errors.inner.forEach((error) => {
    err[error.path] = error.message;
  });

  return err;
}

export default getValidationErrors;

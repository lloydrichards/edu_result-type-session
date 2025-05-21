type Success<T> = {
  data: T;
  error: null;
};

type Failure<E> = {
  data: null;
  error: E;
};

type Result<T, E> = Success<T> | Failure<E>;

const isSuccess = <T, E>(result: Result<T, E>): result is Success<T> => {
  return result.error === null;
};
const isFailure = <T, E>(result: Result<T, E>): result is Failure<E> => {
  return result.error !== null;
};

const success = <T, E>(data: T): Result<T, E> => {
  return {
    data,
    error: null,
  };
};
const failure = <T, E>(error: E): Result<T, E> => {
  return {
    data: null,
    error,
  };
};

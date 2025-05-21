type Left<T> = {
  _tag: "Left";
  left: T;
};

type Right<T> = {
  _tag: "Right";
  right: T;
};

type Either<L, R> = Left<L> | Right<R>;

const isLeft = <L, R>(either: Either<L, R>): either is Left<L> => {
  return either._tag === "Left";
};

const isRight = <L, R>(either: Either<L, R>): either is Right<R> => {
  return either._tag === "Right";
};

const left = <L, R>(left: L): Either<L, R> => {
  return {
    _tag: "Left",
    left,
  };
};
const right = <L, R>(right: R): Either<L, R> => {
  return {
    _tag: "Right",
    right,
  };
};

const fold = <L, R, A>(
  either: Either<L, R>,
  onLeft: (left: L) => A,
  onRight: (right: R) => A
): A => {
  if (isLeft(either)) {
    return onLeft(either.left);
  } else {
    return onRight(either.right);
  }
};

import classNames from 'classnames';
import { FC, MouseEvent } from 'react';
import './button.css';

type ButtonProps = {
  onClickButton: (event: MouseEvent) => void;
  type: string;
  children: string;
  size?: string;
};

export const Button: FC<ButtonProps> = ({
  onClickButton,
  type,
  children,
  size = 's',
}) => {
  const btnClass = classNames({
    btn: true,
    'btn-secondary': type === 'secondary',
    'btn-primary': type === 'primary',
    'btn-small': size === 's',
    'btn-medium': size === 'm',
  });
  return (
    <button className={btnClass} onClick={onClickButton}>
      {children}
    </button>
  );
};

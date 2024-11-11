import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

type ButtonSize = 'small' | 'default' ;
type ButtonColor = 'primary';

interface ButtonProps {
  label?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  isDisabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const size = props.size || 'default';
  const color = props.color || '';
  return (
    <button
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
      )}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.label}
      {props.children}
    </button>
  );
};

export default Button;
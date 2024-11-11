import { ReactNode } from 'react';
import styles from './ButtonWrapper.module.scss';

type ButtonAlignment = 'start' | 'end' | 'center';

const ButtonWrapper = ({ alignment, children }: {alignment?: ButtonAlignment, children: ReactNode}) => {
  const js = alignment || 'start';
  return (
    <div className={`${styles.wrapper} ${styles[js]}`}>
      {children}
    </div>
  );
};

export default ButtonWrapper;
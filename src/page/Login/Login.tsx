
import styles from './Login.module.scss';
import Button from '../../components/Button/Button';
import ButtonWrapper from '../../components/ButtonWrapper/ButtonWrapper';

const Login = () => {
 return ( <div className={styles.wrapper}>
  <h1 className={styles.title}><span className={styles.logo}>EST</span> 로그인</h1>
      <ButtonWrapper alignment="center">
        <Button label='로그인' color='primary'></Button>
        <Button label='회원가입'></Button>
      </ButtonWrapper>
</div>)
};

export default Login;
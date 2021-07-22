import style from './style.module.css';

const Button = ({ children, ...props }) => {
    return (
      <button className={style.btn} {...props}>
        {children}
      </button>
    );
  };
  
  export default Button;
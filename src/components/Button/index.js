import style from './style.module.css';

const Button = ({ children, variant = "default", ...props}) => {
    return (
      <button className={`${style.btn} ${style["btn-" + variant]}`} {...props}>
        {children}
      </button>
    );
  };
  
  export default Button;
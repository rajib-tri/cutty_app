import { useSelector, React } from "components";
import { selectorUtility } from "reduxStore";

const Button = (props) => {
  const isLoading = useSelector(selectorUtility.loading);

  const { icon, title, onClick,textLoading, loading, type, color, block,disabled,className } = props;

  return (
    <button
      disabled={disabled ? disabled : loading ? (isLoading.button ? "disabled" : "") : ""}
      type={type}
      onClick={onClick}
      className={`btn btn-${color} ${block === undefined ? "" : "btn-block"} ${className ? className : ""}`}
    >
      {loading ? (
        isLoading.button ? (
          <>
            <i className="fas fa-spinner fa-spin"></i> &nbsp; {textLoading}
          </>
        ) : (
          title || <i className={`fas ${icon}`}></i> 
        )
      ) : (
        title || <i className={`fas ${icon}`}></i> 
      )}
    </button>
  );
};

export default Button;

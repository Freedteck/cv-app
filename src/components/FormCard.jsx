import "../styles/forms.css";
import General from "./forms/General";

const FormCard = ({ children }) => {
  return (
    <form className="forms">
      {children}
      {/* <button>Submit</button> */}
    </form>
  );
};

export { FormCard };

import { ReactNode } from "react";
import "./styles/index.scss";
import Close from "./Close";
interface IAlertProps {
  title: string;
  desc: string;
  type: string;
  icon: ReactNode;
}

const Alert = ({ title, desc, icon, type}: IAlertProps) => {
  return (
    <div
      className={type}
    >
      <div className="alert-head">
        <div className="alert-title">
          {icon}
          <h3>{title}</h3>
        </div>
        <span>
          <Close />
        </span>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default Alert;

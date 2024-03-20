import React, { MouseEventHandler } from "react";
import './ModalHead.css';
import { BiX } from "react-icons/bi";
import { useTheme } from "@/app/providers/ThemeProvider";

interface Props {
  title: string;
  handleClose:MouseEventHandler<HTMLButtonElement>;
}

const ModalHead: React.FC<Props> = ({
  title,
  handleClose
}) => {
  const {theme}=useTheme()
  const styles = {
    headTitle: {
      color: theme.text.secondary,
    },
    closeIcon: {
      color:theme.text.primary,
      backgroundColor: theme.button.primary,
      borderRadius: 3
    }
  };
  return (
    <div className="container">
      <div className="headTitle" style={styles.headTitle}>{title}</div>
      <button className="closeButton" onClick={handleClose}>
        <BiX size={25} style={styles.closeIcon}/>
      </button>
    </div>
  );
};

export default ModalHead;

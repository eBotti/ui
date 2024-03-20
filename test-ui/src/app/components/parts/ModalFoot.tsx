import React, { Fragment, MouseEventHandler } from "react";
import './ModalFoot.css';
import { AiOutlineClockCircle } from "react-icons/ai";
import { useTheme } from "@/app/providers/ThemeProvider";

interface Props {
  estimate: number;
  confirmText: string;
  cancelText: string;
  handleTransfer:MouseEventHandler<HTMLButtonElement>;
  handleCancel:MouseEventHandler<HTMLButtonElement>;
}
const ModalFoot: React.FC<Props> = ({
  estimate,
  confirmText,
  cancelText,
  handleTransfer,
  handleCancel
}) => {
  const { theme, toggleTheme } = useTheme();
  const styles = {
    estimate: {
      color: theme.text.secondary,
      backgroundColor: theme.block.sencodary,
    },
    transfer: {
      color:theme.text.third,
      backgroundColor:theme.button.secondary,
      borderRadius: 5
    },
  };
  return (
    <Fragment>
      <div className="estimate" style={styles.estimate}>
        <AiOutlineClockCircle className="clock"/> Estimated Time: <span style={{fontWeight: 'bold', marginLeft: 10}}>{estimate} seconds</span>
      </div>
      <div>
        <button className="transfer" style={styles.transfer} onClick={handleTransfer}>
          <span>{confirmText}</span>
        </button>
      </div>
      <button className="cancel" onClick={handleCancel}>
        <span style={{color: '#8F99A5'}}>{cancelText}</span>
      </button>
    </Fragment>
  );
};

export default ModalFoot;
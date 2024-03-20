import React, { useEffect, useState } from "react";
import BaseModal from "./modal/BaseModal";
import ModalContent from "./parts/ModalContent";
import ModalFoot from "./parts/ModalFoot";
import ModalHead from "./parts/ModalHead";
import { useTheme } from "../providers/ThemeProvider";
import  "./DepsitAtomModal.css"

interface Props {
  visible: boolean;
  handleClick: Function;
}
const DepositAtomModal: React.FC<Props> = ({visible,handleClick}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <BaseModal
      visible={visible}
      width={600}
      onClose={()=>{}}
    >
      <ModalHead title="Deposit ATOM" handleClose={()=>handleClick()}/>
      <ModalContent />
      <ModalFoot estimate={20} confirmText="Transfer" cancelText="Cancel" handleCancel={()=>{}} handleTransfer={()=>{}}/>
      <button className="toggle" onClick={toggleTheme}>Toggle Theme</button>
    </BaseModal>
  );
};

export default DepositAtomModal;

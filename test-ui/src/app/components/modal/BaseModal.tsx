import React, { ReactNode } from "react";
import "./BaseModal.css";
import { useTheme } from "@/app/providers/ThemeProvider";

interface BaseModalProp {
  visible: boolean;
  width:  number;
  onClose: () => void;
  children:ReactNode; // 使用 ReactNode 类型定义 children 的类型
}

const BaseModal : React.FC<BaseModalProp>= ({ visible, onClose, children, width }) => {
  const {theme}=useTheme()
  return (
    <>
      {visible && (
        <div className="modal-overlay"  onClick={onClose}>
          <div className="modal-content" style={{width: width, backgroundColor: theme.background.primary}} onClick={(e) => e.stopPropagation()}>
            {children}
            <button className="close-button" onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BaseModal;
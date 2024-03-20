import React, { Fragment } from "react";
import './ImageTextInputBox.css';
import { themes } from "@/app/providers/themes";

interface Props {
  title: string|React.ReactNode;
  subcontent?:React.ReactNode;
  placeholder: string;
  inputFontStyle?: React.CSSProperties;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: React.CSSProperties;
  showBorder?: boolean;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  placeholderTextColor?: string;
  editable?: boolean;
  addBfr?: React.ReactNode;
  addAft?: React.ReactNode;
}

const ImageTextInput: React.FC<Props> = ({
  title,
  subcontent,
  inputFontStyle = {},
  placeholder,
  value,
  onChangeText,
  containerStyle = {},
  borderWidth = 0,
  borderColor = "gray",
  backgroundColor = "transparent",
  placeholderTextColor = "rgba(0, 0, 0, 0.5)",
  editable = true,
  addAft,
  addBfr
}) => {
  const styles={
    container:{
      borderColor:borderColor,
      borderWidth: borderWidth,
      backgroundColor: backgroundColor,
      ...containerStyle
    },
    addBfr: {
      borderRightColor: borderColor,
      borderRightWidth: borderWidth
    },
    title: {
      color: '#000'
    },
    subcontent:{
      color: '#000'
    }
  }
  return (
    <div style={{flex: 1}}>
      <div className="headWrapper" style={styles.title}>
        <div className="title">{title}</div>
        <div style={styles.subcontent}>{subcontent?subcontent:null}</div>
      </div>
      <div style={styles.container} className="container" >
        <div className="addBfr" style={styles.addBfr}>
          {addBfr}
        </div>
        <input
          type="text"
          className="input"
          placeholder={placeholder}
          value={value}
          style={inputFontStyle}
          onChange={(e) => onChangeText(e.target.value)}
          readOnly={!editable}
        />
        {addAft && (
          <div>{addAft}</div>
        )}
      </div>
    </div>
  );
};

export default ImageTextInput;

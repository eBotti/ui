import React, { Fragment, MouseEventHandler } from "react";
import './ModalContent.css';
import { AiOutlineClockCircle } from "react-icons/ai";
import {GiAtom} from "react-icons/gi";
import { SiFluentbit } from "react-icons/si";
import ImageTextInputBox from "../input/ImageTextInputBox";
import { BiRightArrowAlt,BiSolidPencil} from "react-icons/bi";
import { useTheme } from "@/app/providers/ThemeProvider";

interface Props {
}
const ModalContent: React.FC<Props> = ({
}) => {
  const {theme}=useTheme()
  const styles = {
    atomText: {
      color: theme.text.secondary
    },
    smallbutton: {
      backgroundColor: theme.button.primary,
      color: theme.text.primary
    }
  };

  const editBlock=<button style={{width: 50, borderWidth: 0, backgroundColor: 'transparent'}}>
    <BiSolidPencil color="#666" size={20}/>
  </button>
  
  const subcontent= <span style={{ color: "#677586"}}>
  Available: <strong>{2} ATOM</strong>
  </span>

  const calBlock= <span className="calResultText" style={styles.atomText}>
    ATOM <span style={{ fontSize: 13, color: "#667586" }}> ≈ $1013 </span>
  </span>

  return (
    <Fragment>
      <div className="fromToContainer">
        <ImageTextInputBox 
          placeholder="sc121xvh3231cj123"
          // addAft={<div  style={{width: 200}}>asdasddasdasd</div>}
          addBfr={<GiAtom size={25} style={{background: '#3A394C', color: 'white', borderRadius: 20}}/>}
          title={<div style={{fontSize: 14, color:theme.text.primary, fontWeight: 'bold'}}>From Cosmos Hub</div>}
          // subcontent={<div>asdf</div>}
          value={'sc121xvh3231cj123'}
          onChangeText={()=>{}}
          inputFontStyle={{ color: theme.text.primary, height: 40 }}
          backgroundColor={ "#EDF2F9"}
          placeholderTextColor={"#667486"}
          containerStyle={{backgroundColor: theme.block.primary}}
        />
        <BiRightArrowAlt size={20} color="#333" style={{marginLeft: 5, marginRight: 5}}/>
        <ImageTextInputBox
          placeholder="sc121xvh3231cj123"
          addAft={editBlock}
          addBfr={<SiFluentbit size={25} style={{background: 'white', color: 'rgb(255,0,255)', borderRadius: 20}}/>}
          title={<div style={{fontSize: 14, color:theme.text.primary, fontWeight: 'bold'}}>To Osmosis</div>}
          // subcontent={<div>asdf</div>}
          value={'sc121xvh3231cj123'}
          onChangeText={()=>{}}
          inputFontStyle={{ color: theme.text.primary, height: 40 }}
          backgroundColor={ "#EDF2F9"}
          placeholderTextColor={"#667486"}
          containerStyle={{backgroundColor: theme.block.primary}}
        />
      </div>
      <ImageTextInputBox 
        placeholder="sc121xvh3231cj123"
        addAft={<div  style={{width: 150}}>{calBlock}</div>}
        addBfr={<GiAtom size={40} style={{background: '#3A394C', color: 'white', borderRadius: 20}}/>}
        title={<div style={{fontSize: 18, color:theme.text.primary, fontWeight: 'bold'}}>Select amount</div>}
        subcontent={subcontent}
        value={'2'}
        onChangeText={()=>{}}
        inputFontStyle={{ color: theme.text.secondary, height: 80, fontSize:20, paddingLeft: 10}}
        backgroundColor={ "transparent"}
        placeholderTextColor={"#667486"}
        borderWidth={1}
        borderColor={theme.text.primary}
        containerStyle={{marginBottom: 15}}
      />
      <div className="quickSection">
        <button className="quickButton" style={styles.smallbutton}><span className="quickSelectText">Max</span></button>
        <button className="quickButton" style={styles.smallbutton}><span className="quickSelectText">1/2</span></button>
        <button className="quickButton" style={styles.smallbutton}><span className="quickSelectText">1/3</span></button>
      </div>
    </Fragment>
  );
};

export default ModalContent;
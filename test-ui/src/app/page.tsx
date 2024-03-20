'use client';
import Image from "next/image";
import styles from "./page.module.css";
import DepositAtomModal from "./components/DepositAtomModal";
import { ThemeProvider, useTheme } from "./providers/ThemeProvider";
import { useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [isOpen,setOpen]=useState<boolean>(true)
  return (
    <ThemeProvider>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            {theme.background.primary}&nbsp;
          </p>
        </div>
        <button onClick={()=>setOpen(true)}>open modal</button>
        <DepositAtomModal visible={isOpen} handleClick={()=>setOpen(false)}/>
    </main>
    </ThemeProvider>
    
  );
}

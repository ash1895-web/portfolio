import styles from '../../../styles/Navbar.module.css'

import Image from "next/image";
import {useRouter} from 'next/router'

export default function BackButton() {
  
  const router = useRouter()

  return (
    <div className={styles.backButton} onClick={() => router.back()}>
      <Image src="/icons/back.png" alt="back" width={40} height={40} />
    </div>
  );
}

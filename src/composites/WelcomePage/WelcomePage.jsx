import { HeaderSeparator, Button } from '../../components'

import styles from './styles.module.css'

const WelcomePage = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.separatorContainer}>
        <HeaderSeparator />
        <p></p>
        <p className={styles.textName}>Văn Tùng <br></br>&amp;<br></br> Nguyễn Lương</p>
        <HeaderSeparator />
      </div>
      <p className={styles.invitationText}>
        “Chúng tôi sắp về chung một nhà, và thật hạnh phúc nếu có bạn cùng chia sẻ ngày trọng đại.”
      </p>
      <p className={styles.invitationDate}>Thứ 4, Ngày 04/03/2026</p>
      <div className={styles.buttonContainer}>
        <Button text="Save the Date!" />
      </div>
    </div>
  )
}

export default WelcomePage

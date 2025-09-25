import React, { useEffect, useState } from 'react'
import { parse } from 'qs'
import { HeaderSeparator, Button } from '../../components'

import styles from './styles.module.css'

const FrontPageInvitation = ({ setInvitationOpen }) => {
  const [invTo, setInvTo] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    const query = parse(window.location.search.substring(1))
    if (query.to) setInvTo(query.to)
    if (query.role) setRole(query.role)
  }, [])

  return (
    <div>
      <div className={styles.mobileAdditionalBg} />
      <div className={styles.container}>
        <div className={styles.separatorContainer}>
          <HeaderSeparator />
          <p className={styles.textName}>Văn Tùng <br></br>&amp;<br></br> Nguyễn Lương</p>
          <HeaderSeparator />
        </div>
        <p className={styles.invitationText}>
          {invTo && (
            <span>
              Dear <br />
              <span className={styles.invitationTo}>{role} {role != "" ? "-" : ""} {invTo}</span>
              <br />
            </span>
          )}
          “Chúng tôi sắp về chung một nhà, và thật hạnh phúc nếu có bạn cùng chia sẻ ngày trọng đại.”
        </p>
        <div className={styles.buttonContainer}>
          <Button
            text="Lời mở đầu"
            onClick={() => setInvitationOpen(true)}
          />
        </div>
      </div>
      <div className={styles.mobileAdditionalBg} />
    </div>
  )
}

export default FrontPageInvitation

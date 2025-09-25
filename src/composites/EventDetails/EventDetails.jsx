import React from 'react'
import { Button, EventDetailCard, GoogleMapLocation } from '../../components'
import styles from './styles.module.css'

const EventDetails = () => {
  const venueUrl =
    'https://www.google.com/maps/place/nh%C3%A0+v%C4%83n+ho%C3%A1+c%E1%BB%A5m+4/@21.1283149,105.6850067,17.5z/data=!4m6!3m5!1s0x3134f95c01c3d569:0x52872f344241e841!8m2!3d21.1314!4d105.6859466!16s%2Fg%2F11nrz9gklt!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D'
  const eventDetails = [
    {
      name: 'Nhà cô dâu',
      date: 'Thứ 4, ngày 04/03/2026',
      time: '12:00 - 21:00',
      venue: 'Nhà văn hóa cụm 4, Ô Diên, Hà Nội',
      // address:
      //   'Nhà văn hóa cụm 4, Ô Diên, Hà Nội',
    },
    {
      name: 'Nhà chú rể',
      date: 'Thứ 4, ngày 04/03/2026',
      time: '12:00 - 21:00',
      venue: 'Đường thống nhất - xóm cát , Đan Phượng, Hà Nội',
      // address:
      //   'Đường thống nhất - xóm cát , Đan Phượng, Hà Nội',
    },
  ]

  return (
    <div>
      <div className={styles.container}>
        <div>
          <p className={styles.youThere}>Chúng tôi hân hạnh được đón tiếp bạn!</p>
          <p className={styles.joinUs}>Hãy cùng chung vui trong khoảnh khắc hạnh phúc của chúng tôi.</p>
          <div className={styles.eventContainer}>
            {eventDetails.map((item, idx) => {
              return (
                <EventDetailCard
                  eventName={item.name}
                  eventDate={item.date}
                  eventTime={item.time}
                  eventVenue={item.venue}
                  // venueAddress={item.address}
                  key={idx}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.location}>
        <div>
          <GoogleMapLocation />
        </div>
        <Button text="Xem địa chỉ" onClick={() => window.open(venueUrl)} />
      </div>
    </div>
  )
}

export default EventDetails

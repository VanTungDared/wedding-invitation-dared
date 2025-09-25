import React from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import styles from './styles.module.css'

const GoogleMapLocation = () => {
  return (
    <>
      <MapContainer
        className={styles.mapLocation}
        center={[21.131509790034727, 105.68599477687212]}
        zoom={17}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[21.131509790034727, 105.68599477687212]}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
            Nhà văn hóa cụm 4
          </Tooltip>
        </Marker>
      </MapContainer>
    </>
  )
}

export default GoogleMapLocation

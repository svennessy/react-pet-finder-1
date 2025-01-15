import googleMapReact from "google-map-react"

const RenderMap = ({ lat, long }) => {
  return (
    <div className="mapContainer">
      <p>Last Seen:</p>
      <div className="map">
        <gmp-map center={`${lat}, ${long}`} zoom="4" map-id="DEMO_MAP_ID">
          {/* <gmp-advanced-marker
            position="40.12150192260742,-100.45039367675781"
            title="My location"
          ></gmp-advanced-marker> */}
          <gmp-advanced-marker
            position={`${lat}, ${long}`}
            title="My location"
          ></gmp-advanced-marker>
        </gmp-map>
      </div>
    </div>
  )
}

export default RenderMap

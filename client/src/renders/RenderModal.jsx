import ConvertDate from "../hooks/ConvertDate"
import RenderMap from "./RenderMap"
import { useRef, useState } from "react"

function RenderModal({
  petId,
  name,
  avi,
  owner,
  species,
  extraImgs,
  lastSeen,
  closeModal,
  location,
}) {
  console.log(location[0])

  return (
    <div
      className="modal-backdrop"
      onClick={() => {
        closeModal()
      }}
    >
      <div
        className="modalCard"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation()
        }}
      >
        <h2 className="petName">{name}</h2>
        <div className="profileContainer">
          <img className="petAvi" src={avi} />
        </div>

        <p>
          Last seen:{" "}
          {ConvertDate(
            lastSeen.slice(-2).toString(),
            lastSeen.slice(0, 4).toString()
          )}
        </p>
        <p className="ownerName">Owner: {owner}</p>
        <p>Species: {species}</p>

        <div className="extraImgsContainer">
          <button>{`<`}</button>
          {extraImgs.map((imgSrc, index) => (
            <div className="extraImgContainer" key={index}>
              <img className="extraImg" src={imgSrc} />
            </div>
          ))}
          <button>{`>`}</button>
        </div>

        <RenderMap lat={location[0].toString()} long={location[1].toString()} />
      </div>
    </div>
  )
}

export default RenderModal

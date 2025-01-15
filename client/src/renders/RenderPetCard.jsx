import { useState } from "react"
import RenderModal from "./RenderModal"
import ConvertDate from "../hooks/ConvertDate"

function RenderPetCard({
  petId,
  name,
  avi,
  owner,
  species,
  extraImgs,
  lastSeen,
  onClick,
}) {
  return (
    <div className="petCard" key={petId} onClick={onClick}>
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

      {/* <p className="seeMore">see more info</p> */}
    </div>
  )
}

export default RenderPetCard
{
  /* 
          <p className="ownerName">Owner: {pet.ownerName}</p>
          <p>Species: {pet.petType}</p>

          <div className="extraImgsContainer">
            {pet.extraImgs.map((imgSrc, index) => (
              <div className="extraImgContainer" key={index}>
                <img className="extraImg" src={imgSrc} />
              </div>
            ))}
          </div> */
}

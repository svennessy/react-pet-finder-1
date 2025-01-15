import { useState, useContext } from "react"
import { DataContext, DataProvider } from "../hooks/GetData"
import RenderPetCard from "./RenderPetCard"
import RenderModal from "./RenderModal"
import RenderFilters from "./RenderFilters"

function RenderHome() {
  const [showModal, setShowModal] = useState(false)
  const [selectedCardData, setSelectedCardData] = useState(null)

  const { petData } = useContext(DataContext)

  const handleCardClick = (card) => {
    setSelectedCardData(card)
    setShowModal(true)
  }

  const filters = ["Species", "Oldest", "Newest", "Name"]
  const pages = [1, 2, 3, 4, 5]

  return (
    <div className="homeContainer">
      <RenderFilters />

      <p className="clickToSee">Click to see more info</p>

      <div className="cardsContainer">
        {petData?.map((pet) => (
          <RenderPetCard
            key={pet.id}
            avi={pet.petAvi}
            petId={pet.id}
            name={pet.petName}
            owner={pet.ownerName}
            species={pet.petType}
            extraImgs={pet.extraImgs}
            lastSeen={pet.lastSeen}
            location={pet.lastLocation}
            onClick={() => handleCardClick(pet)}
          />
        ))}
      </div>

      <>
        {showModal && (
          <RenderModal
            avi={selectedCardData?.petAvi}
            petId={selectedCardData?.id}
            name={selectedCardData?.petName}
            owner={selectedCardData?.ownerName}
            species={selectedCardData?.petType}
            extraImgs={selectedCardData?.extraImgs}
            lastSeen={selectedCardData?.lastSeen}
            location={selectedCardData?.lastLocation}
            closeModal={() => {
              setShowModal(false)
            }}
          />
        )}
      </>

      <div className="bottomWrapper">
        <button>{`<`}</button>
        <div className="pageNumbersContainer">
          {pages.map((num, index) => (
            <p className="pageNumber" key={index}>
              {num}
            </p>
          ))}
        </div>
        <button>{`>`}</button>
      </div>
    </div>
  )
}

export default RenderHome
{
  /* <div className="petCard" key={pet.id}>
          <h2 className="petName">{pet.petName}</h2>
          <div className="profileContainer">
            <img className="petAvi" src={pet.petAvi} />
          </div>

          <p>
            Last seen:{" "}
            {ConvertDate(
              pet.lastSeen.slice(-2).toString(),
              pet.lastSeen.slice(0, 4).toString()
            )}
          </p>

          
          <p className="ownerName">Owner: {pet.ownerName}</p>
          <p>Species: {pet.petType}</p>

          <div className="extraImgsContainer">
            {pet.extraImgs.map((imgSrc, index) => (
              <div className="extraImgContainer" key={index}>
                <img className="extraImg" src={imgSrc} />
              </div>
            ))}
          </div>
        </div> */
}

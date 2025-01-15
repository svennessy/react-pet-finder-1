import React from "react"

function RenderFilters() {
  const filters = ["Species", "Oldest", "Newest", "Name", "Location"]
  const pages = [1, 2, 3, 4, 5]

  return (
    <div className="filterOptions">
      <h2>Filter by:</h2>
      <div className="filtersBox">
        {filters.map((filter, index) => (
          <div key={index} className="filterContainer">
            <input
              key={filter}
              type="checkbox"
              checked={filter.checked}
              /*  onChange={() => updateList(index, !item.checked)} */
            />
            <p>{filter}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RenderFilters

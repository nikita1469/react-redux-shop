import React, { useState } from 'react'

const Categories = ({ items }) => {

  const [activeItem, setActiveItem] = useState(null)

  const onClickItem = (index) => {
    setActiveItem(index)
  }

  return (
      <div className="categories">
        <ul>
          <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>Все</li>
          {items && items.map((item, index)=> 
            {
              return (
                <li className={activeItem === index ? 'active' : ''} 
                  onClick={() => onClickItem(index)} 
                  key={index}>
                    {item}
                </li>
              )  
            }
          )}
        </ul>
      </div>
    )
}

export default Categories
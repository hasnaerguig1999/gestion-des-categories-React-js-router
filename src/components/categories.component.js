import React, { useState } from "react";
import {  NavLink, Outlet } from "react-router-dom";
import { getCategories } from "../api/api";
import Footer from './footer.component'

export default function Categories() {
  const [activeButton, setActiveButton] = useState(null);
  const data = getCategories();

  const handleButtonClick = (category) => {
    setActiveButton(category.id);
  };

  return (
    <>
    
      <div className="d-flex justify-center">
      <div  style={{ marginLeft: '195px' }} > 
        <h2 className="session">Session Categories</h2>
        <div className="flex-col">
        <section className="FlexContainer">
          {data ? (
            data.map((category) => (
              <NavLink
                key={category.id}
                className={category.id === activeButton ? "link active-button" : "link"}
                onClick={() => handleButtonClick(category)}
                to={{ pathname: `/categories/${category.id} `}}
              >
                {category.name}
              </NavLink>
            ))
          ) : (
            <p>Loading or no data available...</p>
          )}
        </section>
          <Outlet /> 
        </div>
      </div>
      
      </div>

      </>
    
  )
}
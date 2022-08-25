import React from "react";
import "./EmptyList.scss";

const EmptyList = () => {

    return (
        <div className="empty-list">
          Your shopping list is empty :(
          <div className='empty-list-button'>Add your first item</div>
        </div>
    )
}

export default EmptyList
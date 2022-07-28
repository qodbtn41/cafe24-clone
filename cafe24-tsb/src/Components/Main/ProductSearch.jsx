import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { faTableList } from "@fortawesome/free-solid-svg-icons";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";
import "./ProductSearch.scss";

var displayTypeClicked = (displayType, setDisplayType) => {
  setDisplayType(displayType);
};

const ProductSearch = ({displayType, setDisplayType}) => {

  return (
    <div className="productSearch">
      <div>Product Search</div>
      <div>DisplayType : {displayType}</div>
      <div>
        <button className="productSearch-displayType" onClick={(btn) => displayTypeClicked('card', setDisplayType)}>
          <FontAwesomeIcon icon={faList} />
        </button>
        <button className="productSearch-displayType" onClick={(btn) => displayTypeClicked('ag-grid', setDisplayType)}>
          <FontAwesomeIcon icon={faTable} />
        </button>
        <button className="productSearch-displayType" onClick={(btn) => displayTypeClicked('react-data-grid', setDisplayType)}>
          <FontAwesomeIcon icon={faTableList} />
        </button>
        <button className="productSearch-displayType" onClick={(btn) => displayTypeClicked('tanstack', setDisplayType)}>
          <FontAwesomeIcon icon={faTableCells} />
        </button>
      </div>
    </div>
  );
};

export default ProductSearch;

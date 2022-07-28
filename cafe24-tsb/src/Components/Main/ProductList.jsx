import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductSearch from "./ProductSearch";
import DataGrid from "react-data-grid";
import "./ProductList.scss";
// import ImageFormatter from "../Formatters/ImageFormatter";

var sampleData = [
  {
    id: 0,
    title: "저스트 A102●팝업무료",
    price: 180000,
    tags: ["PC", "Mobile"],
    image: require("../../Resource/Image/ProductCardImageSample01.png"),
  },
  {
    id: 1,
    title: "★나나스토리★할인행사★",
    price: 150000,
    tags: ["PC", "Mobile", "안전거래"],
    image: require("../../Resource/Image/ProductCardImageSample02.jpg"),
  },
  {
    id: 2,
    title: "모나113♥팝업무료",
    price: 155000,
    tags: ["PC", "Mobile"],
    image: require("../../Resource/Image/ProductCardImageSample03.jpg"),
  },
  {
    id: 3,
    title: "보일 A3♥팝업무료",
    price: 219000,
    tags: ["PC", "Mobile"],
    image: require("../../Resource/Image/ProductCardImageSample04.jpg"),
  },
  {
    id: 4,
    title: "레이 W♥팝업무료",
    price: 160000,
    tags: ["PC", "Mobile"],
    image: require("../../Resource/Image/ProductCardImageSample05.jpg"),
  },
  {
    id: 5,
    title: "모스 AB♥팝업무료",
    price: 169000,
    tags: ["PC", "Mobile"],
    image: require("../../Resource/Image/ProductCardImageSample06.jpg"),
  },
  {
    id: 6,
    title: "가아 반응형★모바일겸용",
    price: 239000,
    tags: ["반응형"],
    image: require("../../Resource/Image/ProductCardImageSample07.jpg"),
  },
  {
    id: 7,
    title: "★더디자인★할인행사",
    price: 150000,
    tags: ["PC", "Mobile", "안전거래"],
    image: require("../../Resource/Image/ProductCardImageSample08.jpg"),
  },
];

const ProductList = () => {
  const [displayType, setDisplayType] = useState("card");

  if (displayType === "card") {
    return (
      <div>
        <ProductSearch displayType={displayType} setDisplayType={setDisplayType}></ProductSearch>
        <div className="product_list">
          {sampleData.map((v, idx) => (
            <ProductCard key={idx} item={v}></ProductCard>
          ))}
        </div>
      </div>
    );
  } else if (displayType === "ag-grid") {
    return (
      <div>
        <ProductSearch displayType={displayType} setDisplayType={setDisplayType}></ProductSearch>
        <div className="product_list"></div>
      </div>
    );
  } else if (displayType === "react-data-grid") {
    const columns = [
      { key: "id", name: "ID", width: 30 },
      { key: "title", name: "Title", width: 600 },
      {
        key: "price",
        name: "Price",
        //  width: 100
      },
      {
        key: "tags",
        name: "Tags",
        // width: 100
      },
      {
        key: "image",
        name: "Image",
        width: 500,
        formatter: ({ row }) => (
          <div style={{ width: `100%`, height: `100%`, backgroundImage: `url(${row.image})` }}></div>
        ),
        // formatter: ({ row }) => <ImageFormatter value={row.iamge} />
      },
    ];
    return (
      <div>
        <ProductSearch displayType={displayType} setDisplayType={setDisplayType}></ProductSearch>
        <DataGrid className="react_data_grid" columns={columns} rows={sampleData} rowHeight={150} />;
      </div>
    );
  } else if (displayType === "tanstack") {
    return (
      <div>
        <ProductSearch displayType={displayType} setDisplayType={setDisplayType}></ProductSearch>
        <div className="product_list"></div>
      </div>
    );
  }
};

export default ProductList;

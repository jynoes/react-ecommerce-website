import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

const shopResults = "Showing 01 - 12 of 139 results";
import Data from "../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";

const Shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setproducts] = useState(Data);

  // Pagination Handler
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Shop Category Handler
  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
        return newVal.category === curcat;
    })

    setSelectedCategory(curcat)
    setproducts(newItem)
  }

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop Page" />
      {/* Shop Main Content */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* Title and Layout */}
                <div className="shop-title d-flex flex-warp justify-content-between">
                  <p>{shopResults}</p>
                  <div
                    className={`product-view-more ${
                      gridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <ProductCards
                    GridList={gridList}
                    products={currentProducts}
                  />
                </div>

                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>

            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} gridList={gridList} />
                <ShopCategory 
                    filterItem={filterItem}
                    setItem={setproducts}
                    menuItems={menuItems}
                    setProducts={setproducts}
                    selectedCategory={selectedCategory}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

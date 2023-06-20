import React, { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import AppTable from "../components/AppTable";
import Loading from "../components/Loading";
import AppModal from "../components/AppModal";

const AdminAccountPage = () => {
  const {
    productData: products,
    userData,
    categories,
    cartData,
  } = useContext(ProductContext);
  const [menuSelect, setMenuSelect] = useState("products");

  const selectMenu = (e) => {
    const name = e.target.name;
    setMenuSelect(name);
  };

  return (
    <div id="admin--dashboard">
      <NavBar />
      <AppModal
        title={
          menuSelect === "products"
            ? "Add Product"
            : menuSelect === "users"
            ? "Add New User"
            : menuSelect === "categories"
            ? "Add Category"
            : menuSelect === "carts"
            ? "Create Cart"
            : ""
        }
        body={"Product body"}
      />
      <div className="admin---body">
        <div className="row">
          <div className="col-1 side--menu">
            <div className="menu--list">
              <h3 className="menus">Menu List</h3>
              <Link
                onClick={selectMenu}
                name="products"
                className={`menu--link ${
                  menuSelect === "products" ? "-active" : ""
                }`}
              >
                Products
              </Link>
              <Link
                onClick={selectMenu}
                name="users"
                className={`menu--link ${
                  menuSelect === "users" ? "-active" : ""
                }`}
              >
                Users
              </Link>
              <Link
                onClick={selectMenu}
                name="categories"
                className={`menu--link ${
                  menuSelect === "categories" ? "-active" : ""
                }`}
              >
                Categories
              </Link>
              <Link
                onClick={selectMenu}
                name="carts"
                className={`menu--link ${
                  menuSelect === "carts" ? "-active" : ""
                }`}
              >
                Carts
              </Link>
              <Link onClick={selectMenu} name="orders" className="menu--link">
                Orders
              </Link>
            </div>
          </div>

          <div className="col-8 main--screen">
            <h1 className="h1">Admin DashBoard</h1>

            <div className="dashboard">
              {products.length === 0 ? (
                <Loading />
              ) : (
                <>
                  {menuSelect === "products" ? (
                    <>
                      <div className="btn--cover">
                        <button
                          className="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Add Product
                        </button>
                      </div>
                      <AppTable
                        a1="id"
                        b1="title"
                        c1="price"
                        d1="category"
                        data={products}
                      />
                    </>
                  ) : menuSelect === "users" ? (
                    <>
                      <div className="btn--cover">
                        <button
                          className="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Add User
                        </button>
                      </div>
                      <AppTable
                        a1="id"
                        b1="username"
                        c1="phone"
                        d1="email"
                        data={userData}
                      />
                    </>
                  ) : menuSelect === "carts" ? (
                    <>
                      <div className="btn--cover">
                        <button
                          className="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Create Cart
                        </button>
                      </div>
                      <AppTable a1="id" b1="date" c1="userId" data={cartData} />{" "}
                    </>
                  ) : menuSelect === "categories" ? (
                    <>
                      <div className="btn--cover">
                        <button
                          className="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Add Category
                        </button>
                      </div>
                      <AppTable a1="id" b1="category" data={categories} />{" "}
                    </>
                  ) : (
                    <h4 className="p-3">Select menu list to show</h4>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="admin---footer"></div>
    </div>
  );
};

export default AdminAccountPage;

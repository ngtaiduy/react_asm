import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAll } from "../../api/categoryAPI";
import { search } from "../../api/productAPI";
import jwt from "jsonwebtoken";
import { isAuthenticated } from "../../auth";

const Header = (props) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getAll();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await search();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const searchSubmit = async (event) => {
    props.searchSubmit(event.target.value);
  };

  return (
    <div>
      {/* Require css */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .scroll-hidden::-webkit-scrollbar {\n        height: 0px;\n        background: transparent; /* make scrollbar transparent */\n    }\n    ",
        }}
      />
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-3 mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link
                  className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                  to="/"
                >
                  Brand
                </Link>
                {/* Search input on desktop screen */}
                <div className="hidden mx-10 md:block">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <input
                      onChange={searchSubmit}
                      type="text"
                      className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      placeholder="Nhập tên sản phẩm"
                    />
                  </div>
                </div>
              </div>
              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div className="items-center md:flex">
              <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                {categories.map((category) => {
                  return (
                    <a
                      key={category.id}
                      href="#"
                      className="my-1 font-bold text-base leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0"
                    >
                      <div class="p-2">
                        <Link to={`/category/${category.id}`}>
                          {category.name}{" "}
                        </Link>
                      </div>
                    </a>
                  );
                })}
              </div>
              <div className="flex items-center py-2 -mx-1 md:mx-0">
                <Link
                  className="block w-1/2 px-3 py-2 mx-1 text-base font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto"
                  to="/signin"
                >
                  Đăng nhập
                </Link>
                <Link
                  className="block w-1/2 px-3 py-2 mx-1 text-base font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto"
                  to="/signup"
                >
                  Đăng ký
                </Link>
              </div>
              {/* Search input on mobile screen */}
              <div className="mt-3 md:hidden">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
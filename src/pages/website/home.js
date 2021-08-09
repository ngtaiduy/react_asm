import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { add, getAll, remove, edit } from "../../api/productAPI";

export default function Home(props) {
  // const [products, setProducts] = useState([]);
  return (
    <div>
      <div
        className="carousel relative container mx-auto pt-8 pb-16"
        style={{ maxWidth: "1600px" }}
      >
        <div className="carousel-inner relative overflow-hidden w-full">
          {/*Slide 1*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden
            defaultChecked="checked"
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "50vh" }}
          >
            <div
              className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
              style={{
                backgroundImage:
                  'url("https://www.teahub.io/photos/full/172-1726268_natural-beauty-cover-photos-for-facebook.jpg")',
              }}
            >
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide"></div>
              </div>
            </div>
          </div>
          <label
            htmlFor="carousel-3"
            className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-2"
            className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/*Slide 2*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div
            className="carousel-item absolute opacity-0 bg-cover bg-right"
            style={{ height: "50vh" }}
          >
            <div
              className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
              style={{
                backgroundImage:
                  'url("https://www.wallpapertip.com/wmimgs/43-430688_beautiful-fb-timeline-cover-hd-wallpaper-free-nature.jpg")',
              }}
            >
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide"></div>
              </div>
            </div>
          </div>
          <label
            htmlFor="carousel-1"
            className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-3"
            className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/*Slide 3*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "50vh" }}
          >
            <div
              className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom"
              style={{
                backgroundImage:
                  'url("https://i.pinimg.com/originals/7d/79/6d/7d796d58cf82b8b5648082eaff69d8c4.jpg")',
              }}
            >
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide"></div>
              </div>
            </div>
          </div>
          <label
            htmlFor="carousel-2"
            className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-1"
            className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {props.data.map((item) => (
          <div key={item.id}>
            <div className="min-h-screen flex justify-center items-center">
              <div className="container flex justify-center">
                <div className="max-w-sm py-32">
                  <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                    <img className="rounded-t-lg" src={item.image} alt="" />
                    <div className="py-6 px-8 rounded-lg bg-white">
                      <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                        <a href={"detail/" + item.id}>{item.name}</a>
                      </h1>
                      <p className="text-gray-700 tracking-wide font-bold">
                        Danh mục:
                        <Link
                          to={"category/" + item.categoryId}
                          className="font-normal hover:text-red-500"
                        >
                          {" " + item.category.name}
                        </Link>
                      </p>
                      <p className="text-gray-700 tracking-wide font-bold">
                        Mô tả ngắn: <p className="font-normal">{item.detail.slice(0, 60) + "..."}</p>
                      </p>
                      <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                    <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                      <span className="text-md">${item.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
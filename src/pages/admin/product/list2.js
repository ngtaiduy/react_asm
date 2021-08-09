import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { findIndex } from "json-server-auth";

export default function ListProduct(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Danh sach
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  // Xoa san pham
  const onHandleRemove = async (id) => {
    try {
      const { data } = await remove(id);
      const newProducts = products.filter((item) => item.id !== data.id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <hr />
      <div className="table w-full p-2">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">
                  #
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">
                  Name
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">
                  Giá
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">
                  Danh mục
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <Link
                  to="/admin/category/add"
                  className="bg-green-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                >
                  Thêm
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => (
              <tr
                className="bg-gray-100 text-center border-b text-sm text-gray-600"
                key={index}
              >
                <td className="p-2 border-r">{index + 1}</td>
                <td className="p-2 border-r">{item.name}</td>
                <td className="p-2 border-r">{item.price}</td>
                <td className="p-2 border-r">{item.categoryId}</td>
                <td>
                  <button
                    className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                    onClick={() => props.onRemove(item.id)}
                  >
                    Xóa
                  </button>
                  <Link
                    className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                    to={`/admin/product/${item.id}/edit`}
                  >
                    Sửa
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

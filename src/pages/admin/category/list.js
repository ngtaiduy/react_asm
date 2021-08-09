import { useEffect, useState } from "react";
import { add, getAll, remove, edit } from "../../../api/categoryAPI";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";

export default function ListCategory() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Danh sach
    const getCategories = async () => {
      try {
        const { data } = await getAll();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const { id } = useParams();
  const onHandleRemove = async (id) => {
    try {
      const { data } = await remove(id);
      const newCategories = categories.filter((item) => item.id !== id);
      setCategories(newCategories);
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
                  ID
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
            {categories.map((category) => (
              <tr
                className="bg-gray-100 text-center border-b text-sm text-gray-600"
                key={category.id}
              >
                <td className="p-2 border-r">{category.id}</td>
                <td className="p-2 border-r">{category.name}</td>
                <td>
                  <button
                    className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                    onClick={() => onHandleRemove(category.id)}
                  >
                    Xóa
                  </button>
                  <Link
                    className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                    to={`/admin/category/${category.id}/edit`}
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

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getAll } from "../../../api/categoryAPI";
import { useParams, useHistory } from "react-router-dom";

const AddProductForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
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

  const onSubmit = async (data) => {
    const newItem = {
      id: Math.random().toString(7).substring(5),
      ...data,
      price: +data.price,
    };
    props.onAdd(newItem);
    history.push("/admin/product");
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-5">
          <div className="w-full mx-auto bg-white rounded-md">
            {/* first */}
            <div className="flex flex-col justify-center items-center">
              <div
                className="
                flex flex-col
                justify-between
                items-center
                px-3
                py-5
                w-full
              "
              >
                <form onSubmit={handleSubmit(onSubmit)} className="w-1/3">
                  <div className="mb-5 flex flex-col">
                    <label className="font-medium text-black">
                      Tên sản phẩm
                    </label>
                    <input
                      type="text"
                      className="w-full py-2 border mt-3 pl-2 border-gray-300 rounded-md"
                      {...register("name", {
                        required: true,
                        minLength: 3,
                        maxLength: 20
                      })}
                    />
                    {errors.name && (
                      <span className="d-block mt-2 text-red-500">
                        Tên không được để trống, điền 3~20 ký tự
                      </span>
                    )}
                  </div>
                  <div className="mb-5 flex flex-col">
                    <label className="font-medium text-black">
                      Giá sản phẩm
                    </label>
                    <input
                      type="number"
                      className="w-full py-2 border mt-3 pl-2 border-gray-300 rounded-md"
                      {...register("price", { required: true, min: 0 })}
                    />
                    {errors.price && (
                      <span className="d-block mt-2 text-red-500">
                        Giá không được để trống, không âm
                      </span>
                    )}
                  </div>
                  <div className="mb-5 flex flex-col">
                    <label className="font-medium text-black">Danh mục</label>
                    <select
                      className="w-full py-2 border mt-3 pl-2 border-gray-300 rounded-md"
                      {...register("categoryId", {
                        required: true,
                        valueAsNumber: true
                      })}
                    >
                      <option value="abc">Chọn danh mục</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    {errors.categoryId && (
                      <span className="d-block mt-2 text-red-500">
                        Vui lòng chọn Danh mục sản phẩm
                      </span>
                    )}
                  </div>
                  <div className="mb-5 flex flex-col">
                    <label className="font-medium text-black">
                      Ảnh sản phẩm
                    </label>
                    <input
                      type="text"
                      className="w-full py-2 border mt-3 pl-2 border-gray-300 rounded-md"
                      {...register("image", { required: true })}
                    />
                  </div>
                  <div className="mb-5 flex flex-col">
                    <label className="font-medium text-black">
                      Chi tiết sản phẩm
                    </label>
                    <textarea
                      className="w-full py-2 border mt-3 pl-2 border-gray-300 rounded-md"
                      {...register("detail", { required: true })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white px-2 py-2 rounded-md"
                  >
                    Thêm sản phẩm
                  </button>
                </form>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </>
  );
};
export default AddProductForm;

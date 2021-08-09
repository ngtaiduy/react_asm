import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../../api/productAPI";
import { getAll } from "../../../api/categoryAPI";

const EditProductForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const { id } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProduct(data);
        reset(data);
      } catch (error) {}
    };
    getProduct();
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await getAll();
        setCategories(data);
      } catch (error) {}
    };
    getCategories();
  }, []);
  const selected = product.id == categories.id ? "selected" : "";

  const onSubmit = (data) => {
    const newItem = {
      id,
      ...data,
    };
    props.onEdit(newItem);
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-5 flex flex-col">
                    <label className="font-medium text-black">
                      Tên sản phẩm
                    </label>
                    <input
                      type="text"
                      defaultValue={product.name}
                      className="w-full py-2 border mt-3 pl-2 border-gray-300 rounded-md"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="d-block mt-2 text-danger">
                        Bắt buộc phải nhập trường này
                      </span>
                    )}
                  </div>
                  <div className="mb-5 flex flex-col">
                    <label className="font-medium text-black">
                      Giá sản phẩm
                    </label>
                    <input
                      type="number"
                      defaultValue={product.price}
                      className="w-full py-2 border mt-3 pl-2 border-gray-300 rounded-md"
                      {...register("price", { required: true })}
                    />
                    {errors.price && <span className="">required </span>}
                  </div>
                  <div className="mb-5 flex flex-col">
                    <label className="font-medium text-black">Danh mục</label>
                    <select
                      className="w-full py-2 border mt-3 pl-2 border-gray-300 rounded-md"
                      {...register("categoryId")}
                    >
                      {categories.map((category) => (
                        <option value={category.id} $selected>
                          {category.name}
                        </option>
                      ))}
                    </select>
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
                    <img src={product.image} className="w-64 h-64"></img>
                  </div>
                  <div className="mb-5 flex flex-col">
                    <label className="font-medium text-black">
                      Chi tiết sản phẩm
                    </label>
                    <textarea
                      defaultValue={product.detail}
                      className="w-full py-2 border mt-3 pl-2 border-gray-300 rounded-md"
                      {...register("detail", { required: true })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white px-2 py-2 rounded-md"
                  >
                    Cập nhật
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
export default EditProductForm;

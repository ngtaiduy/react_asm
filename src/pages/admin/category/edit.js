import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { get, edit, getId } from "../../../api/categoryAPI";

const EditCategoryForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const { id } = useParams();

  const [category, setCategory] = useState({});

  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getId(id);
        setCategory(data);
        reset(data);
      } catch (error) {}
    };
    getCategory();
  }, []);

  const onCategoryEdit = async (item) => {
    try {
      const { data } = await edit(item);
      const newCategory = category.map((value) =>
        value.id == data.id ? data : value
      );
      setCategory(newCategory);
    } catch (error) {
      console.log(error);
    }
    history.push("/admin/category");
  };

  const onSubmit = (data) => {
    const newItem = {
      id,
      ...data,
    };
    // props.onEdit(newItem);
    onCategoryEdit(newItem);
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
                    <label htmlFor="code" className="font-medium text-black">
                      Tên danh mục
                    </label>
                    <input
                      type="text"
                      id="code"
                      defaultValue={category.name}
                      className="w-full py-2 border mt-3 pl-2 border-gray-300 rounded-md"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="d-block mt-2 text-red-500">
                        Bắt buộc phải nhập trường này
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white px-2 py-2 rounded-md"
                  >
                    Thêm danh mục
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
export default EditCategoryForm;

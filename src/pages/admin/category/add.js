import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { getAll, add } from "../../../api/categoryAPI";
import { useEffect, useState } from "react";

const AddCategoryForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      setCategories([...categories, data]);
    } catch (error) {
      console.log(error);
    }
    history.push("/admin/category");
  };

  const history = useHistory();

  const onSubmit = (data) => {
    const newItem = {
      id: Math.random().toString(7).substring(5),
      ...data,
    };
    // props.onAdd(newItem);
    onHandleAdd(newItem);
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
                      className="w-full py-2 border mt-3 pl-2 border-gray-300 rounded-md"
                      {...register("name", {
                        required: true,
                        minLength: 3,
                        maxLength: 20,
                      })}
                    />
                    {errors.name && (
                      <span className="d-block mt-2 text-red-500">
                        Tên không được để trống, điền 3~20 ký tự
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
export default AddCategoryForm;

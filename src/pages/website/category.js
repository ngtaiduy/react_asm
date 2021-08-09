import { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import { get } from "../../api/categoryAPI";

const CategoryPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await get(id);
        await setProducts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [id]);
  console.log(products);

  return (
    <div>
      <div className="p-5 mx-auto max-w-screen-xl">
        <div className="grid grid-flow-row-dense grid-cols-3 gap-3 justify-between">
          {products && products.map((product) => {
              return (
                <div key={product.id}>
                  <img
                    className="mb-1 border-solid w-full h-72 hover:border-yellow-500"
                    alt="Best seller"
                    src={product.image}
                    loading="lazy"
                  />
                  <NavLink
                    to={"/detail/" + product.id}
                    className="pt-2 m-0 leading-4 font-semibold text-black"
                  >
                    Tên sản phẩm: {product.name}
                  </NavLink>
                  <p className="font-semibold">Giá: ${product.price}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default CategoryPage;

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../api/productAPI";

export default function Detail(){
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
      return (
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-8">
            <div className="col-span-1"></div>
            <div className="col-span-3 pr-4">
              <h2>
                <img src={product.image}></img>
              </h2>
            </div>
            <div className="col-span-3 pl-4">
              <div className="flex">
                <p className="text-base pr-2">Tên sản phẩm:</p>
                <p className="text-base pr-2 font-bold">{product.name}</p>
              </div>
              <div className="flex">
                <p className="text-base pr-2">Giá:</p>
                <p className="text-base pr-2 font-bold">{product.price}$</p>
              </div>
              <div className="flex">
                <p className="text-base pr-2">Mô tả: {product.detail}</p>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      );
} 
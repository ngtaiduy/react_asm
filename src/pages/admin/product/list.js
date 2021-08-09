import { Link } from "react-router-dom";

export default function ListProduct(props) {
  
  return (
    <div>
      <hr />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            to="/admin/product/add"
            className="btn btn-sm btn-outline-primary"
          >
            Thêm sản phẩm
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên</th>
              <th scope="col">Giá</th>
              <th scope="col">Danh mục</th>
              <th scope="col">Ảnh</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.data && props.data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category.name}</td>
                <td>
                  <img src={item.image} className="w-32"></img>
                </td>
                <td className="text-right">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => props.onRemove(item.id)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-primary btn-sm ms-1"
                    to={`/admin/product/${item.id}/edit`}
                  >
                    Edit
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

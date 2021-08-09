import { useHistory } from "react-router-dom";
import { isAuthenticated, signout } from "../../auth";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const { username } = isAuthenticated();
  const history = useHistory();
  return (
    <div>
      <aside className="flex flex-col items-center bg-white text-gray-700 shadow h-full">
        <ul>
          <li className="hover:bg-gray-100">
            <NavLink
              to="/admin/category"
              className="h-16 px-6 flex justify-center items-center w-full
					focus:text-orange-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </NavLink>
          </li>
          <li className="hover:bg-gray-100">
            <NavLink
              to="/admin/product"
              className="h-16 px-6 flex justify-center items-center w-full
					focus:text-orange-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </NavLink>
          </li>
          <li className="hover:bg-gray-100">
            <NavLink
              to="/admin/user"
              className="h-16 px-6 flex justify-center items-center w-full
					focus:text-orange-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </NavLink>
          </li>
          <li className="hover:bg-gray-100">
            <a
              onClick={() =>
                signout(() => {
                  history.push("/");
                })
              }
              className="h-16 w-full mx-auto flex justify-center items-center
				 focus:text-orange-500 hover:bg-red-200 focus:outline-none"
            >
              <svg
                className="h-5 w-5 text-red-700"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1={21} y1={12} x2={9} y2={12} />
              </svg>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

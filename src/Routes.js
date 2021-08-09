import { BrowserRouter, Route, Switch } from "react-router-dom";

import ListProduct from "./pages/admin/product/list";
import AddProductForm from "./pages/admin/product/add";
import EditProductForm from "./pages/admin/product/edit";

import ListCategory from "./pages/admin/category/list";
import AddCategoryForm from "./pages/admin/category/add";
import EditCategoryForm from "./pages/admin/category/edit";

import AdminLayout from "./layouts/AdminLayout";
import WebsiteLayout from "./layouts/WebsiteLayout";

import Home from "./pages/website/home";
import CategoryPage from "./pages/website/category";
import Detail from "./pages/website/detail";
import Search from "./pages/website/search";
import Signup from "./pages/website/signup";
import Signin from "./pages/website/signin";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <AdminLayout>
            <Switch>
              <Route exact path="/admin/product">
                <ListProduct {...props} />
              </Route>
              <Route exact path="/admin/product/add">
                <AddProductForm {...props} />
              </Route>
              <Route exact path="/admin/product/:id/edit">
                <EditProductForm {...props} />
              </Route>
              <Route exact path="/admin/category">
                <ListCategory {...props} />
              </Route>
              <Route exact path="/admin/category/add">
                <AddCategoryForm {...props} />
              </Route>
              <Route exact path="/admin/category/:id/edit">
                <EditCategoryForm {...props} />
              </Route>
            </Switch>
          </AdminLayout>
        </Route>
        <Route path="/">
          <WebsiteLayout {...props} >
            <Switch>
              <Route exact path="/">
                <Home {...props} />
              </Route>
              <Route exact path="/category/:id">
                <CategoryPage {...props} />
              </Route>
              <Route exact path="/detail/:id">
                <Detail {...props} />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/signin">
                <Signin />
              </Route>
            </Switch>
          </WebsiteLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;

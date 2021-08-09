import instance from "./instance";
import { isAuthenticated } from "../auth/index";
const { accessToken } = isAuthenticated();

export const getAll = () => {
  const url = "/664/categories";
  return instance.get(url);
};
export const get = (id) => {
  const url = `/categories/${id}/products`;
  return instance.get(url);
};
export const remove = (id) => {
  const url = `/categories/${id}`;
  return instance.delete(url);
};
export const edit = (item) => {
  const url = `/categories/${item.id}`;
  return instance.put(url, item, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export const add = (item) => {
  const url = "/categories";
  return instance.post(url, item);
};
export const getId = (id) => {
  const url = `/categories/${id}`;
  return instance.get(url);
};

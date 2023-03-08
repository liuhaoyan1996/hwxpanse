import axios from "axios";

export const getServiceVendorData = async () => {
  return axios.get<ServiceVendor.ServiceData>(`/xpanse/register/category/{categoryName}`);
}

export const getCategoryList = async () => {
  return axios.get<ServiceVendor.CategoryList>(`/xpanse/register/categories`);
}



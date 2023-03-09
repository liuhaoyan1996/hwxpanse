import axios, { AxiosRequestConfig } from 'axios';

export const getServiceVendorData = async (config: string) => {
    return axios.get<ServiceVendor.ServiceData>(`/xpanse/service/${config}`);
};
export const getCategoryList = async () => {
    return axios.get<ServiceVendor.CategoryList>(`/xpanse/register/categories`);
};

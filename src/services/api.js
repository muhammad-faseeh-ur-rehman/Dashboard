import { dashboardData, ordersData, productsData, profileData, settingsData } from '../data/dummyData';
import { usersData } from '../data/dummyData';


const delay = (ms = 5000) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const getDashboard = async () => {
    await delay();
    return dashboardData;
};
const getUsers = async () => {
    await delay();
    return usersData.items;
}
const getProducts = async () => {
    await delay();
    return productsData;
}
const getOrders = async () => {
    await delay();
    return ordersData;
}

const getSettings = async () => {
    await delay();
    return settingsData;
}
const getProfile = async () => {
    await delay();
    return profileData;
}

export const api = {
    getDashboard,
    getUsers,
    getOrders,
    getProducts,
    getProfile,
    getSettings
}
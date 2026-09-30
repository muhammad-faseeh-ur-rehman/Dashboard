import { dashboardData, ordersData, productsData, profileData, settingsData } from '../data/dummyData';
import { usersData } from '../data/dummyData';


const delay = (ms = 5000) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};


//dashboard apis
const getDashboard = async () => {
    await delay();
    return dashboardData;
};

// user apis
const getUsers = async () => {
    await delay();
    return usersData.items;
}

// product apis
const getProducts = async () => {
    await delay();
    return productsData;
}

// oreders apis
const getOrders = async () => {
    await delay();
    return ordersData;
}

// settings apis
const getSettings = async () => {
    await delay();
    return settingsData;
}

// profile apis
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
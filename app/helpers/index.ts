import { format } from "path";

export const getProducts = async () => {
    const res = await fetch('https://fakestoreapiserver.reactbd.com/smart');
    if (!res.ok) {
       throw new Error('Failed to fetch products'); 
    }
    return res.json();
     
}
export const getTrendingProducts = async () => {
    const res = await fetch('https://fakestoreapiserver.reactbd.com/smarttrending');
    if (!res.ok) {
       throw new Error('Failed to fetch trending products'); 
    }
    return res.json();
     
}

export const getProductById = async (id:number) => {
    const res = await fetch(`https://fakestoreapiserver.reactbd.com/smart`);
    if (!res.ok) {
       throw new Error('Failed to fetch products'); 
    }
    const data = await res.json();
    // console.log('first product', data);
    return data.find((product:any)=> product._id === id);
}

export const calculatePercentage = (oldPrice: any, price: any) => {
    return (!!parseFloat(price) && !!parseFloat(oldPrice) ? Math.round((parseFloat(oldPrice) - parseFloat(price)) / parseFloat(oldPrice) * 100) : 0);
}

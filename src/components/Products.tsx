'use client';

import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}


const Products = () => {
  const [data, setData] = useState<Product[]>([]);


  useEffect(() => {

    const fetchApi = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data)
      } catch (error) {
        console.log(error);
      } 
    }

    fetchApi()
  }, []);



  return (
    <div className='mt-7 relative w-full mb-4 min-h-[78vh]'>
      <h2 className='text-lg font-bold text-black block h-5 font-sans pb-3 z-10'>Products</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 mb-5">
        {data.map((product) => (
          <div key={product.id} className="flex items-center justify-center flex-col mt-[20px] shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={150}
              className="w-full h-44 object-contain mb-2"
              priority
            />
            <h3 className="text-sm font-semibold text-center">{product.title}</h3>
            <p className="text-sm text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products

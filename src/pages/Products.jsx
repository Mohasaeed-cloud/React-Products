import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";

export default function Products() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            let res = await axios.get("https://dummyjson.com/products");
            console.log(res.data.products);
            setProducts(res.data.products);
        }
        fetchProducts();
    }, []);

    return <div className="d-flex pt-4 flex-wrap gap-2 justify-content-center">
      {
        products.map((p)=>(
          <Product key={p.id} product={p}/>
        ))
      }
    </div>;
}
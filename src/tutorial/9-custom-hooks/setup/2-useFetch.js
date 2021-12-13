import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]); /**only when url changes usecalback run */

  useEffect(() => {
    getProducts();
  }, [url, getProducts]); /** only when  the url change useeffetc call  */
  return { loading, products };
};

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import data from "../data";
import Product from "../components/product";
import MessageBox from '../components/messageBox';
import LoadingBox from '../components/loadingBox';

export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get("/api/products");
                setLoading(false);
                setProducts(data);
            } 
            catch (err) {
                setError(err.message);
                setLoading(false);
            }
            
        };
        fetchData();
    }, [])

    return (
      <div>
      {loading? (<LoadingBox />
      ) : 
      error? (<MessageBox variant='danger'>{error}</MessageBox>
      ) : (

        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
      </div>
    );
}
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Product from "./Product";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true)
                const {data} = await axios.get('/api/products');
                setLoading(false)
                setProducts(data)
            } catch (err){
                setError(err.message);
                setLoading(false)
            }
        };
        fetchData()
    }, []);

    const [modalView, setModalView] = useState({});
    const modalHandle = (product) => {
        setModalView(products.find(el => el.id === product.id));
    }

    return (
        <>
            {loading ? <LoadingBox></LoadingBox>
            : error ? <MessageBox>{error}</MessageBox>
            : products.map(product => (
                <Product key={product.id} product={product} modalHandle={modalHandle} modalView={modalView}/>))
            }
        </>
    )
}
export default ProductsList;
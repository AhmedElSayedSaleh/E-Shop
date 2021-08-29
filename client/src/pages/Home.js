import React from 'react';
import ProductsList from '../compnents/products/ProductsList';
// import productsData from '../data/bags.json';
// import productsData from '../data/shoes.json';
// import productsData from '../data/jewelry.json';
// import '../styles/pages/home.scss';


const Home = () => {
    // const [data, setData] = useState(productsData);
    return (
            <div className={'container'}>
                <div className={'row'}>
                    {/*{data.map(product => (*/}
                        <ProductsList />
                    {/*))}*/}
                </div>
            </div>
    );
}

export default Home;
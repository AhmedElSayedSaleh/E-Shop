import React from 'react';
import ProductsList from '../compnents/products/ProductsList';
import '../styles/pages/home.scss';
// import productsData from '../data/bags.json';
// import productsData from '../data/shoes.json';
// import productsData from '../data/jewelry.json';

import productsData from '../data/sample.json';


const Home = () => {
    // const [data, setData] = useState(productsData);
    return (
        <main>
            <div className={'container'}>
                <div className={'row'}>
                    {/*{data.map(product => (*/}
                        <ProductsList productsData={productsData} />
                    {/*))}*/}
                </div>
            </div>
        </main>
    );
}

export default Home;
import React from 'react';

import '../styles/components/button.scss';

const MyComponent = ({children}) => {
    return (
        <>
            <button className={'main-btn'} type={'button'}>{children}</button>
        </>
    );
};

export default MyComponent;

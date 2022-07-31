import React from 'react';

import './Loader.scss'

interface ILoader {

}

const Loader: React.FC<ILoader> = () => {
return (
<div className='Loader'>
    загрузка...
</div>
);
};

export default Loader;
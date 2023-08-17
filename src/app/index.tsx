import React from 'react';


import { Header } from 'widgets/index';
import { AppRouter } from './providers/router';
import { mainRouteConfig } from 'shared/config/routeConfig/routeConfig';


const App: React.FC = () => {
 
    return ( 
        <div className="app">
            <div className="container">
                <Header/>
                <AppRouter routeConfig={mainRouteConfig}/>
            </div>
    </div>
    );
};

export default App;
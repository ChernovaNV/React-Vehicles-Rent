import React from 'react';
import { 
    Routes, 
    Route, 
    Navigate
} from 'react-router-dom';


import 'assets/scss/main.scss';  
import { HomePage, DetailsPage, Error } from 'pages/';
import { Header, Features, Team, RentTerms } from "components/";


const App: React.FC = () => {
    return ( 
        <div className="app">
            <div className="container">
                <Header/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='details/:detailsId/' element={<DetailsPage/>}>
                        <Route index element={<Features/>}/>
                        <Route path='team' element={<Team/>}/> 
                        <Route path='terms' element={<RentTerms/>}/> 
                    </Route>
                    <Route path="error" element={<Error/>}/>
                    <Route path="*" element={<Navigate to="error"/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;

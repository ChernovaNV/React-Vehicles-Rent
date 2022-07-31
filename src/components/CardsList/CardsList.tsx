import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './CardsList.scss';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { fetchVehicles } from 'store/actions/vehiclesAction';
import Loader from 'components/Loader/Loader';
import { Card } from 'components/'; 



const CardsList: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {vehicles, isLoading, error} = useAppSelector(state => state.vehicles);

    useEffect(() => {
        dispatch(fetchVehicles())
    }, [dispatch])

    if (error && !vehicles.length) {
        console.log(error)
        navigate('error')
    }
    if (!vehicles.length) {
        <div>нет доступного транспорта</div>
    }

    return (
        <div className='CardsList'>
            { isLoading &&
                <Loader />
            }

            { 
                vehicles.map((vehicle) => 
                <Card key={vehicle.id} item={vehicle}/>
            )}

        </div>
    );
};

export default CardsList;
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './CardsList.scss';

import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppDispatch';
import { fetchVehicles } from 'app/providers/Store/actions/vehiclesAction';
import { Loader } from 'shared/UI';
import { Card } from 'entities/index';

export const CardsList: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {vehicles, isLoading, error} = useAppSelector(state => state.vehicles);

    useEffect(() => {
        dispatch(fetchVehicles())
    }, [dispatch])

    if (error && !vehicles.length) {
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

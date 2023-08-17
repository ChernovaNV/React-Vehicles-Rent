import React, { useEffect }  from 'react';
import {  Link, NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';

import './DetailsPage.scss'

import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppDispatch';
import { fetchVehicleById } from 'app/providers/Store/actions/vehicleIdAction';
import { Button, Icon, Loader } from 'shared/UI';
import { ButtonSize, ButtonTheme } from 'shared/UI/Button/Button';

import Arrow from 'shared/assets/images/svg/arrow.svg'

const DetailsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {vehicle, isLoading, error} = useAppSelector(state => state.vehicle)
    const params = useParams<'detailsId'>()

    useEffect(() => {
        dispatch(fetchVehicleById(params.detailsId))
    }, [params.detailsId, dispatch]) 

    if (error && !vehicle) {
        navigate('error', {replace: false})
    }

    return (
        <main className="container--main">
            { isLoading &&
                <Loader />
            }

            <div className="DetailsPage">
                <div className="DetailsPage__img">
                    <img src={vehicle.image} alt="Фото товара" />
                </div>
                <div className="DetailsPage__content"  >
                    <div className="DetailsPage__header">
                        <div className="DetailsPage__headerTop">
                            <h2 className="title DetailsPage__title"> {vehicle.name} </h2>
                            <Link to='/' className='DetailsPage__back'>
                                <Icon Svg={Arrow}/>
                            </Link>
                        </div>
                        <div className="DetailsPage__headerBottom">
                            <div className="DetailsPage__tabs">
                                <NavLink
                                    to=''                                
                                    className='btn-reset'
                                >
                                    Спецификация
                                </NavLink>
                                <NavLink
                                    to="team"
                                    className="btn-reset"
                                >
                                    Команда
                                </NavLink>
                                <NavLink
                                    to="terms"
                                    className="btn-reset"
                                >
                                    Условия аренды
                                </NavLink>
                            </div>
                        </div>
                        
                    </div>
                    <div className="DetailsPage__body">
                        <Outlet/>

                    </div>

                    <div className="DetailsPage__footer">
                        <div className="DetailsPage__price">Арендовать за <span> {vehicle.rent} руб/ч</span>
                        </div>
                        <Button 
                            className="btn-reset" 
                            theme={ButtonTheme.accent}
                            size={ButtonSize.base}
                            onClick={() => console.log('ok')}
                        >
                            Арендовать
                        </Button>
                    </div>


                </div>

            </div>
        </main>
    );
};


export default DetailsPage; 
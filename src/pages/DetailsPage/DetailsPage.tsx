import React, { useEffect }  from 'react';
import {  
    Link, 
    NavLink, 
    Outlet, 
    useNavigate, 
    useParams 
} from 'react-router-dom';

import './DetailsPage.scss'

import { Flex } from 'components/UI';

import { Button } from 'components/UI';
import { viewVar } from 'components/UI/Button/Button';
import { SvgIcons } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { fetchVehicleById } from 'store/actions/vehicleIdAction';
import Loader from 'components/Loader/Loader';

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

            <Flex className="DetailsPage">
                <div className="DetailsPage__img">
                    <img src={vehicle.image} alt="Фото товара" />
                </div>
                <Flex className="DetailsPage__content"  >
                    <div className="DetailsPage__header">
                        <Flex className="DetailsPage__headerTop">
                            <h2 className="title DetailsPage__title"> {vehicle.name} </h2>
                            <Link to='/' className='DetailsPage__back'>
                                <SvgIcons id='arrow'/>
                            </Link>
                        </Flex>
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
                                    className="btn-reset "
                                >
                                    Команда
                                </NavLink>
                                <NavLink
                                    to="terms"
                                    className="btn-reset "
                                >
                                    Условия аренды
                                </NavLink>
                            </div>
                        </div>
                        
                    </div>
                    <div className="DetailsPage__body">
                        <Outlet /> 

                    </div>

                    <Flex className="DetailsPage__footer">
                        <div className="DetailsPage__price">Арендовать за <span> {vehicle.rent} руб/ч</span>
                        </div>
                        <Button 
                            className="btn-reset" 
                            view={viewVar.baseMain}
                            onClick={() => console.log('ok')}
                        >
                            Арендовать
                        </Button>
                    </Flex>


                </Flex>

            </Flex>
        </main>
    );
};


export default DetailsPage; 
import React from 'react';

import './NewProduct.scss'

import { Button, Flex, Input } from 'components/UI';
import SvgIcons from 'components/SvgIcons/SvgIcons';
import { viewVar } from 'components/UI/Button/Button';

interface INewProduct {
    setActive: Function;
}

const NewProduct: React.FC<INewProduct> = ({setActive}) => {

    return (
        <Flex className='NewProduct'>
            <Flex className="NewProduct__header">
                <h3 className="NewProduct__title">Добавить транспорт</h3>
                <Button
                    view={viewVar.smallBase}
                    onClick={() => setActive(false)}
                >
                    <SvgIcons id="close"/>
                </Button>
            </Flex>

            <Flex className="NewProduct__inputs">
                <Flex className="NewProduct__input NewProduct__file">
                    <label htmlFor="input-file" className='NewProduct__label'>
                        <SvgIcons id="file" />
                    </label>
                    <Input
                        className="NewProduct__input--file"
                        type="file"
                        id="input-file"
                    />
                </Flex>
                <Input
                    className="NewProduct__input"
                    placeholder="Название"
                    type="text"
                />
                <Input
                    className="NewProduct__input"
                    placeholder="Описание"
                    type="text"
                />
                <Input
                    className="NewProduct__input NewProduct__input--price"
                    placeholder="Стоимость аренды"
                    type="text"
                />
            </Flex>

            <Button
                className='NewProduct__button'
                view={viewVar.fullMain}
                onClick={() => console.log('ok')}
            >
                Добавить
            </Button>
        </Flex>
    );
};

export default NewProduct;
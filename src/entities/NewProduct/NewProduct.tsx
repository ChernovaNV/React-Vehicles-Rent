import React, { SetStateAction } from 'react';

import './NewProduct.scss'
import { Button, Icon, Input } from 'shared/UI';
import { ButtonSize, ButtonTheme } from 'shared/UI/Button/Button';

import Close from 'shared/assets/images/svg/close.svg'
import File from 'shared/assets/images/svg/img.svg'

interface NewProduct {
    setActive: React.Dispatch<SetStateAction<boolean>>;
}

export const NewProduct: React.FC<NewProduct> = ({setActive}) => {

    return (
        <div className='NewProduct'>
            <div className="NewProduct__header">
                <h3 className="NewProduct__title">Добавить транспорт</h3>
                <Button
                    theme={ButtonTheme.base}
                    size={ButtonSize.small}
                    onClick={() => setActive(false)}
                >
                    <Icon Svg={Close}/>
                </Button>
            </div>

            <div className="NewProduct__input NewProduct__file">
                <label htmlFor="input-file" className='NewProduct__label'>
                    <Icon Svg={File} />
                </label>
                <Input
                    className="NewProduct__input--file"
                    type="file"
                    id="input-file"
                />
            </div>
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


            <Button
                className='NewProduct__button'
                theme={ButtonTheme.accent}
                size={ButtonSize.full}
                onClick={() => console.log('ok')}
            >
                Добавить
            </Button>
        </div>
    );
};
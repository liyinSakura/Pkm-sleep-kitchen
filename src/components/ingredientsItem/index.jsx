import React, {PureComponent, useCallback} from 'react';
import { Popover ,Avatar, Badge, InputNumber ,Button} from 'antd';
import styles from './styles.css'


import {ingredientsListMap} from "../../constant/baseData";
const IngredientsItem = props => {
    const { ingredient, showControl = false, handleNumChange } = props
    const onChange = useCallback((value)=>{
        handleNumChange && handleNumChange(value,ingredient)
    },[ingredient])
    if(ingredientsListMap.has(ingredient.name)){
        return (
            <div className="flex justify-between flex-direction">
                <div className="ingredient-item">
                    <Popover content={ingredientsListMap.get(ingredient.name).nameZh} title="" trigger="hover" placement="bottom">
                        <Badge count={ingredient.num} showZero>
                            <Avatar shape="square" size="large" src={<img src={ingredientsListMap.get(ingredient.name).url} alt={ingredientsListMap.get(ingredient.name).nameZh} />} />
                        </Badge>
                    </Popover>
                    {
                        showControl ? <InputNumber min={0} defaultValue={ingredient.num} onChange={onChange} className="ml30"/>: null
                    }
                </div>

            </div>
        )
    }

    return <div>{ingredient.name} * {ingredient.num}</div>
}
export default IngredientsItem
import React, {PureComponent, useCallback} from 'react';
import { MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';
import { Card ,Avatar, Badge, InputNumber ,Button} from 'antd';
import styles from './styles.css'
const ButtonGroup = Button.Group;


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
                    <Badge count={ingredient.num} showZero>
                        <Avatar shape="square" size="large" src={ingredientsListMap.get(ingredient.name).url} />
                    </Badge>
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
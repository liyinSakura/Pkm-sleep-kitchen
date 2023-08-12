import React, {PureComponent, useCallback, useEffect, useState} from 'react';
import { Card ,Alert, Checkbox, Space} from 'antd';
import styles from './styles.css'
import IngredientsItem from "../ingredientsItem";
import store from "../../utils/store";
const { Meta } = Card;
const defaultCheckedList = [];
const MenuCard = props => {
    const bagData = store.get('bagData') || {}
    const { bagList = [], totalNum = 0,  } = bagData
    const { source, onTargetMenuChange } = props
    const { ingredientsList } = source
    const [makeFlag,setMakeFlag] = useState(false)
    const [needList,setNeedList] = useState([])
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const onChange = useCallback((e) => {
        const checked = e.target.checked
        onTargetMenuChange && onTargetMenuChange({
            checked,menu:source
        })

    },[source])
    useEffect(()=>{
        if(Array.isArray(bagList)&&Array.isArray(ingredientsList)){
            const bagListMap = new Map()
            bagList.forEach(i=>{
                bagListMap.set(i.name,i.num)
            })
            let canMake = true, needs = []
            ingredientsList.forEach(i=>{
                if(bagListMap.has(i.name)){
                    const bagNum = bagListMap.get(i.name)
                    const needNum = i.num
                    if(needNum > bagNum){
                        canMake = false
                        needs.push({
                            ...i,
                            num: needNum - bagNum
                        })
                    }
                }
            })
            setMakeFlag(canMake)
            // setNeedList(needs)
        }
    },[bagData, ingredientsList])

    return (
        <div className="cardWrap">
            <Card
                hoverable
            >
                {
                    makeFlag ? <div className="mb20">
                        <Alert message="可制作" type="success" showIcon />
                    </div> : <div>
                        <div>尚缺</div>
                        <Space size="middle">
                            {
                                Array.isArray(needList) ? (
                                    needList.map((item,index)=>{
                                        return <IngredientsItem key={index} ingredient={item}/>
                                    })
                                ) : null
                            }
                        </Space>
                    </div>
                }
                <div className="flex">
                    <img alt={source.Name} src={source.url} className={'cardCover'}/>
                    <div className="">
                        <Meta title={source.Name} description={source.Description} />
                        <div className="ingredientsListWrap">
                            <Space size="middle">
                                {
                                    Array.isArray(ingredientsList) ? (
                                        ingredientsList.map((item,index)=>{
                                            return <IngredientsItem key={index} ingredient={item}/>
                                        })
                                    ) : null
                                }
                            </Space>
                        </div>
                        {
                            Array.isArray(ingredientsList) && ingredientsList.length ? (<div>
                                <Checkbox onChange={onChange}>设为目标</Checkbox>
                            </div>) : null
                        }

                    </div>
                </div>
            </Card>
        </div>

    )
}
export default MenuCard
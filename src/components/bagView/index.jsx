import React, {PureComponent, useCallback, useEffect, useState} from 'react';
import { Card , Collapse , Badge, Space} from 'antd';
import { ingredientsList } from "../../constant/baseData";
import store from "../../utils/store";
import IngredientsItem from "../ingredientsItem";
import styles from './index.module.css'
const BagView = props => {
    const [list,setList] = useState([])
    const [maxBagNum,setMaxBagNum] = useState(120)
    const [curTotalNum,setTotalNum] = useState(0)

    useEffect(()=>{
        initData()
    },[])


    const initData = () => {
        const bagData = store.get('bagData') || {}
        const { bagList = [], totalNum = 0 } = bagData
        const result = [...ingredientsList].map((i,index)=>{
            let num = 0
            if(Array.isArray(bagList)){
                num = bagList[index] ? bagList[index].num : 0
            }
            i.num = num
            i.name = i.Name
            return i
        })
        setTotalNum(totalNum)
        setList(result)
    }

    const handleNumChange = useCallback((value,item)=>{
        let totalNum = 0
        const newList = [...list].map(i=>{
            if(i.name === item.name){
                i.num = value
            }
            totalNum += i.num
            return i
        })
        setList(newList)
        let storeData = newList.map(({name,num})=>{return{name,num}})
        setTotalNum(totalNum)
        store.set('bagData', {bagList: storeData,totalNum})
    },[list])

    return (
        <div className="bagWrap">
            <div>{`我的背包(${curTotalNum}/${maxBagNum})`}</div>
            <div className={styles.bagList}>
                {
                    list.map((item,index)=>{
                        return <IngredientsItem showControl key={index} ingredient={item} handleNumChange={handleNumChange}/>
                    })
                }
            </div>
        </div>
    )
}

export default BagView
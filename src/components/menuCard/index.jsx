import React, {PureComponent, useCallback, useEffect, useState} from 'react';
import { Card ,Alert, Checkbox, Space, Image,Tag  } from 'antd';
import styles from './index.module.css'
import IngredientsItem from "../ingredientsItem";
import {ingredientsListMap} from "../../constant/baseData";
import store from "../../utils/store";
const { Meta } = Card;
const defaultCheckedList = [];
const MenuCard = props => {
    const bagData = store.get('bagData') || {}
    const targetMenu = store.get('targetMenu') || []
    const { bagList = [], totalNum = 0,  } = bagData
    const { source, onTargetMenuChange } = props
    const { ingredientsList } = source
    const [needList,setNeedList] = useState([])
    const [tagList,setTagList] = useState([])
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [checked, setChecked] = useState(false);
    const onChange = useCallback((e) => {
        const checked = e.target.checked
        setChecked(checked)
        let result = store.get('targetMenu')
        if(Array.isArray(result)){
            const initIndex = result.findIndex(i=>i.key===source.key)
            if(initIndex > -1){
                if(checked){

                } else {
                    result.splice(initIndex,1)
                    store.set('targetMenu',result)
                }
            }else{
                result.push(source)
                store.set('targetMenu',result)
            }

        } else {
            result = []
            if(checked){
                result.push(source)
                store.set('targetMenu',result)
            }
        }
        console.log('----------------result----------',result)

    },[source])

    useEffect(()=>{
        let tags = [], canMake = true
        if(Array.isArray(targetMenu)){
            setChecked(targetMenu.findIndex(i=>i.key === source.key) > -1)
        }
        if(Array.isArray(ingredientsList)&&ingredientsList.length){
            const bagListMap = new Map()
            bagList.forEach(i=>{
                bagListMap.set(i.name,i.num)
            })
            if(!bagList.length){
                canMake = false
            }
            ingredientsList.forEach(i=>{
                if(bagListMap.has(i.name)){
                    const bagNum = bagListMap.get(i.name)
                    const needNum = i.num
                    if(needNum > bagNum){
                        canMake = false
                        let name = i.name
                        if(ingredientsListMap.has(i.name)){
                            name = ingredientsListMap.get(i.name).nameZh
                        }
                        tags.push({
                            ...i,
                            name,
                            key: i.name,
                            value: `还需${name}*${needNum -bagNum}`,
                            color: 'red'
                        })
                    }
                }
            })
            if(canMake){
                tags.push({
                    key: 'canMake',
                    value: '可制作',
                    color: 'green'
                })
            }
        } else {
            tags.push({
                key: 'canMake',
                value: '可制作',
                color: 'green'
            })
        }
        setTagList(tags)
    },[])

    return (
        <div className={styles["mb20"]}>
            <Card
                hoverable
            >
                {
                    tagList.length > 0 ? (<div >
                        {
                            tagList.map(i=>{
                                return <Tag key={i.key} color={i.color} className={styles.mb10}>{i.value}</Tag>
                            })
                        }
                    </div>):null
                }
                <div className="flex">
                    <div className={styles.imgWrap}>
                        <Image
                            alt={source.nameZh || source.name}
                            width={80}
                            height={80}
                            className={styles.cardCover}
                            src={source.url}
                            fallback="data:image/png;base64,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"
                        />
                    </div>
                    <div className={styles.cardInfo}>
                        <Meta title={`${source.nameZh || source.name} ${source.totalItemNum > 0 ? source.totalItemNum : ''}`} description={source.descriptionZh||source.Description} />
                        <div className={styles["ingredientsListWrap"]}>
                            {
                                Array.isArray(ingredientsList) ? (
                                    ingredientsList.map((item,index)=>{
                                        return <IngredientsItem key={index} ingredient={item}/>
                                    })
                                ) : null
                            }
                        </div>
                        {/*todo 设置目标菜谱*/}
                        {
                            Array.isArray(ingredientsList) && ingredientsList.length ? (<div>
                                <Checkbox onChange={onChange} checked={checked}>设为目标</Checkbox>
                            </div>) : null
                        }

                    </div>
                </div>
            </Card>
        </div>

    )
}
export default MenuCard
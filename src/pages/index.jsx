import React, {PureComponent, useCallback, useEffect, useState} from 'react';
import { menuList } from "../constant/baseData";
import { Tabs, Card } from 'antd';
import MenuCard from "../components/menuCard";
import BagView from "../components/bagView";
import TargetMenuView from "../components/targetMenuView";
import styles from './styles.css'

const IndexPage = props => {
    const [targetMenuList,setTargetMenuList] = useState([])

    const updateTargetMenu = ({checked,menu}) => {
        console.log('--------------------',checked,targetMenuList,{checked,menu})
        let result = [...targetMenuList]
        if(checked){
            result = [menu,...result,]
            setTargetMenuList(result)
        } else {

        }

    }
    const  formatMenuList = menuList.map((i)=>{
        i.label = i.title
        i.children = (<div key={i.key}>
            {
                i.list.map((j)=>{
                    return <MenuCard key={j.key} source={j} onTargetMenuChange={updateTargetMenu}/>
                })
            }
        </div>)

        return i
    })


    const onChange = () => {}

    return (
        <div className="page">
            <div className="pd20">
                <BagView />
                <TargetMenuView source={targetMenuList}/>
            </div>
            <Tabs defaultActiveKey={3} items={formatMenuList} onChange={onChange} />
        </div>
    )
}

export default IndexPage
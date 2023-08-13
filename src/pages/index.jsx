import React, {PureComponent, useCallback, useEffect, useState} from 'react';
import { menuList } from "../constant/baseData";
import { Tabs, Menu  } from 'antd';
import MenuCard from "../components/menuCard";
import BagView from "../components/bagView";
import TargetMenuView from "../components/targetMenuView";
import styles from './styles.css'

const IndexPage = props => {
    const [targetMenuList,setTargetMenuList] = useState([])
    const [current, setCurrent] = useState('menu');
    const onClick = (e) => {
        setCurrent(e.key);
    };
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
        i.label = i.titleZh
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
    const items = [
        {
            label: '菜谱一览',
            key: 'menu',
        },
        {
            label: '背包管理',
            key: 'bag',
        },
    ]

    return (
        <div className="">
            <div className="menu-top">
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme={'dark'}/>
            </div>

            <div className="pd20">
                {
                    current === 'menu' ? <Tabs defaultActiveKey={3} items={formatMenuList} onChange={onChange} /> : null
                }
                {
                    current === 'bag' ? <BagView /> : null
                }

                <TargetMenuView source={targetMenuList}/>
            </div>

        </div>
    )
}

export default IndexPage
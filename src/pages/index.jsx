import React, {PureComponent, useCallback, useEffect, useState} from 'react';
import { menuList } from "../constant/baseData";
import { Tabs, Menu, FloatButton   } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import MenuCard from "../components/menuCard";
import BagView from "../components/bagView";
import TargetMenuView from "../components/targetMenuView";
import styles from './styles.css'

const IndexPage = props => {
    const [current, setCurrent] = useState('menu');
    const onClick = (e) => {
        setCurrent(e.key);
    };

    const  formatMenuList = menuList.map((i)=>{
        i.label = i.titleZh
        i.children = (<div key={i.key}>
            {
                i.list.map((j)=>{
                    return <MenuCard key={j.key} source={j}/>
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
        {
            label: '目标料理',
            key: 'kitchen',
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
                {
                    current === 'kitchen' ? <TargetMenuView/> : null
                }
            </div>
            <FloatButton
                shape="square"
                type="default"
                style={{
                    right: 24,
                }}
                href={'https://github.com/liyinSakura/Pkm-sleep-kitchen'}
                target="_blank"
                icon={<GithubOutlined />}
            />
        </div>
    )
}

export default IndexPage
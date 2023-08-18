import React, {useEffect, useState} from 'react';
import { Space, Table, Tag } from 'antd';
import store from "../../utils/store";
import {ingredientsListMap} from "../../constant/baseData";
const TargetMenuView = props => {
    const source = store.get('targetMenu') || []
    const bagData = store.get('bagData') || {}
    const [columns,setColumns] = useState([])
    const [tableData,setTableData] = useState([])
    useEffect(()=>{
        formatTableData()
    },[])
    const remove = (item) => {
        console.log('=======',item)
    }
    const formatTableData = () => {
        let result1 = [], result2 = []
        result1.push({
            title: 'name',
            dataIndex: 'nameZh',
            key: 'nameZh',
            render: (text) => <a>{text}</a>,
        })
        const columnsMap = new Map()
        if(Array.isArray(source)){
            source.forEach(i=>{
                const { ingredientsList } = i || {}
                let newItem = {
                    ...i
                }
                if(Array.isArray(ingredientsList)){
                    ingredientsList.forEach(j=>{
                        let nameKey = j.name
                        newItem[nameKey] = j.num
                        if(!columnsMap.has(nameKey)){
                            let name = j.name
                            if(ingredientsListMap.has(j.name)){
                                name = ingredientsListMap.get(j.name).nameZh
                            }
                            columnsMap.set(nameKey,{
                                title: name,
                                dataIndex: nameKey,
                                key: nameKey,
                            })
                        }
                    })
                }
                result2.push(newItem)
            })
            result1 = [...result1,...columnsMap.values()]
            // result1.push({
            //     title: '操作',
            //     dataIndex: 'operate',
            //     key: 'operate',
            //     render: (text) => <a onClick={(e)=>(remove(text))}>删除</a>,
            // })
            const { bagList } = bagData
            if(Array.isArray(bagList)){
                let newItem = {
                    nameZh: '包裹内容'
                }
                bagList.forEach(i=>{
                    newItem[i.name] = i.num
                })
                result2.push(newItem)
            }

            setTableData(result2)
            setColumns(result1)
        }
    }
    if(!tableData.length){
        return null
    }
    return <Table columns={columns} dataSource={tableData} />
}
export default TargetMenuView
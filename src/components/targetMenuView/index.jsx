import React, {useEffect, useState} from 'react';
import { Space, Table, Tag } from 'antd';
const TargetMenuView = props => {
    const { source } = props
    const [columns,setColumns] = useState([])
    const [tableData,setTableData] = useState([])
    useEffect(()=>{
        formatTableData()
    },[source])
    const formatTableData = () => {
        let result1 = [], result2 = []
        result1.push({
            title: '食谱名',
            dataIndex: 'Name',
            key: 'Name',
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
                        let nameKey = j.name.replace(/\s*/g,"").toLowerCase()
                        newItem[nameKey] = j.num
                        if(!columnsMap.has(nameKey)){
                            columnsMap.set(nameKey,{
                                title: j.name,
                                dataIndex: nameKey,
                                key: nameKey,
                            })
                        }
                    })
                }
                result2.push(newItem)
            })
            result1 = [...result1,...columnsMap.values()]
            setTableData(result2)
            setColumns(result1)

            console.log('--------------------',{
                result1,
                result2
            })
        }
    }

    return <Table columns={columns} dataSource={tableData} />
}
export default TargetMenuView
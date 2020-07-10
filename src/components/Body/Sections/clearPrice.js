import React, { useState } from 'react'
import { Collapse, Radio } from 'antd';
const { Panel } = Collapse;


function RadioBox(props) {

    const [Value, setValue] = useState('0')

    const renderRadioBox = () => (
        
        props.list &&  props.list.map((value, index) => (
            <div key={index} style={{display:"flex",flexDirection:"column !important"}}>
            <Radio key={value._id} value={`${value._id}`}>{value.name}</Radio>
        </div>
        ))
    )

    const handleChange = (event) => {
        setValue(event.target.value)
        props.handleFilters(event.target.value)
    }
   

    return (
        <div style={{display:"flex",flexDirection:"column !important"}}>
            <Collapse defaultActiveKey={['0']}>
                    <Radio.Group onChange={handleChange} value={Value}>

                        {renderRadioBox()}

                    </Radio.Group>
            </Collapse>
        </div>
    )
}

export default RadioBox
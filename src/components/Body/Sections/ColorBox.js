import React,{useState} from 'react';
import { Checkbox,Collapse} from 'antd'
const {Panel} = Collapse

// import { Container } from './styles';

function CheckBox(props) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)
        //update this checked information into Parent Component 

    }
    const renderCheckboxLists = () => props.list && props.list.map((value, index) => (
        <React.Fragment key={index}>
            <div style={{display:'flex',flex:'row'}}>

            <Checkbox
                onChange={() => handleToggle(value._id)}
                type="checkbox"
                checked={Checked.indexOf(value._id) === -1 ? false : true}
                />&nbsp;&nbsp;
            <span>{value.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
        </React.Fragment>
    ))

    return (
        <div>
        <li>
            <div>   
               <div style={{display:'flex',flexDirection:'column', flexWrap:'wrap'}}> {renderCheckboxLists()}</div>
            </div>
        </li>
    </div>
    )
}

export default CheckBox;
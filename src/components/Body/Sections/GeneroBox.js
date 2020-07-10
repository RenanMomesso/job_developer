import React,{useState} from 'react';
import { Checkbox,Collapse} from 'antd'
const {Panel} = Collapse

// import { Container } from './styles';

function GeneroBox(props) {

    const [Checked, setChecked] = useState([])
    const [number,setNumber] = useState(0)

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

    const mousesai = e => {
        setNumber(0)
    }
    const mouseIn = e => {
        setNumber(1)
    }
    const renderCheckboxLists = () => props.list && props.list.map((value, index) => (
        <React.Fragment key={index}>
            <div style={{display:'flex',flexDirection:'row'}}>


            <Checkbox
                onChange={() => handleToggle(value._id)}
                type="checkbox"
                checked={Checked.indexOf(value._id) === -1 ? false : true}
                />&nbsp;&nbsp;
            <span style={{marginRight:20}}>{value.name}</span>  
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

export default GeneroBox;
import React from 'react'
import {
    FaRegTimesCircle
} from 'react-icons/fa'
import {
    AiOutlineEyeInvisible,
    AiOutlineEye
} from 'react-icons/ai';
export default function Textbox(props) {
    const { 
        placeholder,

    } = props;
    const [seen, setSeen] = React.useState(true)
    const [type, setType] = React.useState(props.type)
    const [hidden, setHidden] = React.useState(true)
    const [value, setvalue] = React.useState(props.value)
    const handleSeen =()=>{
        setSeen(!seen)
        if(seen) setType('password')
        else setType('text')
    }
    React.useEffect(()=>{
        if (type === 'text'){
            setHidden(true)
        }else{
            setHidden(false)
        }
    },[]);
    const handleChange =(e)=>{
        const value = e.target.value;
        setvalue(value)
    }
    return (
        <div>
            <div className='text-box'>
                <input 
                    type={type} 
                    class="form-control" 
                    placeholder={placeholder}
                    onChange={handleChange}
                    value={value}
                 />
                <FaRegTimesCircle 
                    onClick={()=> setvalue('')}
                    style={{display : value ? 'block' : 'none', color: "#000"}}
                />
                <div style={{display: hidden ? 'none' : 'block'}} onClick={handleSeen}>
                    {seen ? <AiOutlineEye style={{color: "#000"}}/> : <AiOutlineEyeInvisible  style={{color: "#000"}}/>}
                </div>
            </div>
        </div>
    )
}

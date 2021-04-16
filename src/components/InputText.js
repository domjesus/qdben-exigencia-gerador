import { TextField } from "@material-ui/core";
import React from "react"
import InputMask from "react-input-mask"

const InputText = (props) =>{

const {mask} = props;

return <InputMask mask={mask} maskChar=" " value={props.value} onChange={(e) => props.onChange(e)}>
     {(inputProps) => 
    <TextField    
    onKeyUp={(e) => props.onChange(e)}      
    variant="outlined"
    label={props.label}    
    />}    
    </InputMask>   
} 

  export default InputText
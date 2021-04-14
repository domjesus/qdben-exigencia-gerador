import React, { useEffect } from "react"
import { FormControl, InputGroup } from "react-bootstrap"
import InputMask from "react-input-mask"

const InputText = (props) =>{

const {mask} = props;

return <InputGroup className="mb-3">
  
    <InputGroup.Prepend>
      <InputGroup.Text id={props.name}>{props.label}: </InputGroup.Text>
    </InputGroup.Prepend>       
     <InputMask mask={mask} maskChar=" " value={props.value} onChange={(e) => props.onChange(e)}>
     {(inputProps) => 
    <FormControl
    placeholder={props.placeholder}
    aria-label={props.placeholder}
    aria-describedby={props.name}      
    onKeyUp={(e) => props.onChange(e)}      
    />}    
    </InputMask> 
  </InputGroup>
} 

  export default InputText
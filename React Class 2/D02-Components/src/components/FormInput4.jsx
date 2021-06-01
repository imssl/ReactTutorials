export default function FormInput (props) {
  
    let inputStyle=  {
      paddingLeft: '200px',
    }
     
      return (
        <div>
          <label htmlFor={props.name}>{props.name}</label>
          <input type="text" id={props.name} name={props.name} value={props.value} style={inputStyle}/>
        </div>  
      )
  }
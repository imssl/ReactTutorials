

export default function FormWithLegend (props) {

    let width =props.width ? props.width : 400; //default to 400 pixels

    let formStyle={
      width: width+'px'   
    }
      
    let fieldset=  {
      backgroundColor: '#bdd1c5'
    }
    
    let legendStyle = {
      backgroundColor: '#edcc8b',
      color: 'white',
      paddingTop: '5px',
      paddingRight: '10px'
    }
    
    return (
      <form style={formStyle}>
        <fieldset style={fieldset}>
        <legend style={legendStyle}>{props.title}</legend>          
              <FormInput name="firstName" />
              <FormInput name="lastName" />
              <FormInput name="email" />   
              <FormInput name="country" /> 
              <input type="submit" value="Submit" />
              <input type="reset" value="Cancel" />    
        </fieldset>
        </form>
    );
  }
  
  
  export function FormInput (props) {
  
    let inputStyle=  {
      paddingLeft: '10px',
    }
     
      return (
        <div>
          <label htmlFor={props.name}>{props.name}: </label>
          <input type="text" id={props.name} name={props.name} value={props.value} style={inputStyle}/>
        </div>  
      )
  }
  
  
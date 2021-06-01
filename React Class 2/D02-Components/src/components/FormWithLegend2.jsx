

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
          <label htmlFor={props.label1}>{props.label1}</label>          
          <input type="text" id={props.label1} name={props.label1} /><br/>

          <label htmlFor={props.label2}>{props.label2}</label>          
          <input type="text" id={props.label2} name={props.label2} /><br/>

          <label htmlFor={props.label3}>{props.label3}:</label>          
          <input type="text" id={props.label3} name={props.label3} /><br/>

          <label htmlFor={props.label4}>{props.label4}:</label>          
          <input type="text" id={props.label4} name={props.label4} /><br/> 

          <input type="submit" value="Submit" />
          <input type="reset" value="Cancel" />    

        </fieldset>
        </form>
    );
  }
  
  
  export function FormInput (props) {
  
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
  
  
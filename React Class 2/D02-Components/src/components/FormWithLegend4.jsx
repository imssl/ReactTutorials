
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
        {props.children}    
        </fieldset>
        </form>
    );
  }
  
  
  
  
  


export default function FormWithLegend (props) {

    let formStyle={
      width: '400px'   
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
        <legend style={legendStyle}>Personalia:</legend>
          
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname" /><br/>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" /><br/>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" /><br/>
          <input type="submit" value="Submit" />
          <input type="reset" value="Cancel" />       
  
           {/* 
          <FormInput />
          <FormInput />
          <FormInput />
          */}
          {props.children}
        </fieldset>
        </form>
    );
  }  

  
import './App.css';

//Step4.1 from FormWithLegend1 
// import FormWithLegend from './components/FormWithLegend1.jsx';

//Step4.2 from FormWithLegend2 
// import FormWithLegend from './components/FormWithLegend2.jsx';

//Step4.3 from FormWithLegend3 
// import FormWithLegend from './components/FormWithLegend3.jsx';

//Step4.4 from FormWithLegend4 
import FormWithLegend from './components/FormWithLegend4.jsx';

import FormInput from './components/FormInput4.jsx'

//Step5 Import exported module members
import {pi, max} from './utils/MathUtil.js'
import userAlias from './utils/User.js'
import userType from './utils/User.js'

function App() {

  let listData=['one','two','three']; //used in Step3

  // Step5
  console.log(pi);
  console.log(max([19-9-89,22,100]));
  let user =new userAlias('Stefano','Fiorenza','stefano@email.it','4238427973');
  let user2 =new userType('Raul','Fiorenza','raul@email.it','2238427973');
  console.log(user.firstName);
  console.log(user2.firstName);
  // End Step5:

  return (
    <div>
         <div className="default-text" >
          first message from React UI  <br/>

         {/* Step1: 1st Component */}
         {/* <NewComponent  />  <br/> */}
           {/* End Step1 */}

          {/* Step2:  Component with props*/}
          {/* <ButtonFunction btnLabel="click me" />  <br/>     */}
          {/* End Step2 */}


          {/* Step3: Component that render an array of data (*/}     
          {/* <ListOfItems data={listData} /> <br/> */}
          {/* End Step3 */}

        </div>


           {/* Step4.1 from FormWithLegend1 */}    

           {/* <FormWithLegend />             */}
          {/* End Step4.1  */}    


          {/* Step4.2 from FormWithLegend2 */}    
          {/* <FormWithLegend title="User Profile" width={400} 
            label1="name" label2="surname" label3="country" label4="city" />  */}
          {/* End Step4.2     */}   


          {/* Step4.3 from FormWithLegend3 */}    
           {/* <FormWithLegend title="User Profile" width={400}  />  */}
          {/* End Step4.3  */}        


          {/* Step4.4 from FormWithLegend4     */}
          <FormWithLegend title="User Profile">
              <FormInput name="First Name :"/>
              <FormInput name="Last Name :"/>
              <FormInput name="Email :"/>
              <FormInput name="Telephone :"/>            
              <input type="submit" value="Submit" />
              <input type="reset" value="Cancel" />    
          </FormWithLegend>
            <br/>
          <FormWithLegend title="Address">
              <FormInput name="Street name :"/>
              <FormInput name="Street number :"/>
              <FormInput name="ZIP code :"/>   
              <FormInput name="City :" />
              <FormInput name="Country :" />
              <input type="submit" value="Save" />
              <input type="reset" value="Cancel" />    
          </FormWithLegend>
         {/* End Step4.4      */}

    </div>
  );
}
export default App;






// Step1: 1st Component
function NewComponent (props) {
  return (
    <div> Some other text from component </div>	
  );
}
// End Step1:


// Step2:  Component with props
function ButtonFunction (props) {
  return (
      <button> {props.btnLabel} </button>	
  );
}
// End Step2:

//Step3: Component that render an array of data
function ListOfItems (props) {

  let listItems=[];

  for (let i=0; i<props.data.length; i++){
    listItems.push(<li key={i}>{props.data[i]}</li>)
    //listItems.push(<li>{props.data[i]}</li>)
  }
  return (
      <ul> {listItems} </ul>	
  );
}
// End Step3:

 
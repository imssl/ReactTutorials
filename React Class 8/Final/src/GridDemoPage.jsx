import Row from './Row.jsx';
import Card from './Card.jsx';


export default function GridDemoPage() {
    return (
        <div>

        <Row>
            <div className="col-12">
                <Card category="some Category" title="sometitle" icon="icon-bus-front-12">   
                    text
                </Card> 
            </div>
         </Row>
         
         <Row>
            <div className="col-4">
                <Card category="some Category" title="sometitle" icon="icon-bus-front-12">
                    <b>some text </b>
                </Card> 
            </div>

            <div className="col-4">
                <Card category="some Category" title="sometitle" icon="icon-bus-front-12">
                  text  
                </Card>    
            </div>

            <div className="col-4">
                <Card category="some Category" title="sometitle" icon="icon-bus-front-12">
                  text  
                </Card>    
            </div>

         </Row>

         <Row>
            <div className="col-4">
                <Card category="some Category" title="sometitle" icon="icon-bus-front-12">
                  text  
                </Card>    
            </div>
            <div className="col-8">
                <Card category="some Category" title="sometitle" icon="icon-bus-front-12">
                  text  
                </Card>    
            </div>
         </Row>
      

          
        </div>
    )
}
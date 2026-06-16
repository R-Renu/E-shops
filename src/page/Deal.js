import {  Col, Row} from "react-bootstrap";
import './Deal.css';
export default function Deals(){
    return(
        <>
   <DealoftheWeek/>
        </>
    );
}
function DealoftheWeek() {
     return (
          <>
              <Row className="my-5 deal-of-the-week">
                  <Col className="">
                      <img src="img/deal_ofthe_week.png"></img>
                  </Col>
                  <Col>
                     <div className="right-box">
                        <div className="deal-text">
                             <p>Deal Of The Week</p>
                             <div></div>
                         </div>
                         <div className="timer-container">
                             <div className="timer-segment text-center">
                                 <div className="timer-value">2</div>
                                 <div className="timer-label">Day</div>
                             </div>
                             <div className="timer-segment">
                                 <div className="timer-value">22</div>
                                 <div className="timer-label">Hours</div>
                             </div>
                             <div className="timer-segment">
                                 <div className="timer-value">17</div>
                                 <div className="timer-label">Mins</div>
                             </div>
                             <div className="timer-segment">
                               <div className="timer-value">42</div>
                                 <div className="timer-label">Secs</div>
                             </div>
                         </div>
                     </div>
 
                     <div className="shop-now">
                         <a className="col-3">Shop Now</a>
                     </div>
                 </Col>
 
             </Row>
        </>
     );
}
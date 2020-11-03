
import React from "react";
// react plugin used to create charts
import { Table } from "reactstrap";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import Resource from "./Resource";
import Dropdown2 from "./Dropdown2";

function Dashboard () {

  const [val,setVal] = React.useState(0);
;
    return (
      <>
        <div className="content">
          <Row>
            {val!=1 && <Col lg="3" md="6" sm="6">
              <Card className="card-stats" onClick={() => setVal(1)}>
                <CardBody>
                  <Row> 
                    <Col>
                      <div className="numbers" style={{textAlign:"center", marginBottom:"5%"}}>
                        <CardTitle tag="p">Invoice</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                
              </Card>
            </Col>}

            {val==1 && <Col lg="3" md="6" sm="6">
              <Card className="card-stats bg-primary" onClick={() => setVal(1)}>
                <CardBody>
                  <Row> 
                    <Col>
                      <div className="numbers" style={{textAlign:"center", marginBottom:"5%"}}>
                        <CardTitle tag="p">Invoice</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                
              </Card>
            </Col>}


            {val!=2 && <Col lg="3" md="6" sm="6">
              <Card className="card-stats" onClick={() => setVal(2)}>
                <CardBody>
                  <Row> 
                    <Col>
                      <div className="numbers" style={{textAlign:"center", marginBottom:"5%"}}>
                        <CardTitle tag="p">Projection</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                
              </Card>
            </Col>}

            {val==2 && <Col lg="3" md="6" sm="6">
              <Card className="card-stats bg-primary" onClick={() => setVal(2)}>
                <CardBody>
                  <Row> 
                    <Col>
                      <div className="numbers" style={{textAlign:"center", marginBottom:"5%"}}>
                        <CardTitle tag="p">Projection</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                
              </Card>
            </Col>}

            {val!=3 && <Col lg="3" md="6" sm="6">
              <Card className="card-stats" onClick={() => setVal(3)}>
                <CardBody>
                  <Row> 
                    <Col>
                      <div className="numbers" style={{textAlign:"center", marginBottom:"5%"}}>
                        <CardTitle tag="p">Resource Detail</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                
              </Card>
            </Col>}

            {val==3 && <Col lg="3" md="6" sm="6">
              <Card className="card-stats bg-primary" onClick={() => setVal(3)}>
                <CardBody>
                  <Row> 
                    <Col>
                      <div className="numbers" style={{textAlign:"center", marginBottom:"5%"}}>
                        <CardTitle tag="p">Resource Detail</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                
              </Card>
            </Col>}

            {val!=4 && <Col lg="3" md="6" sm="6">
              <Card className="card-stats" onClick={() => setVal(4)}>
                <CardBody>
                  <Row> 
                    <Col>
                      <div className="numbers" style={{textAlign:"center", marginBottom:"5%"}}>
                        <CardTitle tag="p">Public Holidays</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                
              </Card>
            </Col>}

            {val==4 && <Col lg="3" md="6" sm="6">
              <Card className="card-stats bg-primary" onClick={() => setVal(4)}>
                <CardBody>
                  <Row> 
                    <Col>
                      <div className="numbers" style={{textAlign:"center", marginBottom:"5%"}}>
                        <CardTitle tag="p">Public Holidays</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                
              </Card>
            </Col>}
          </Row>
          {val==1 && <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Invoice</CardTitle>
                 
                </CardHeader>
                <CardBody>
                 <Table>
                    <thead>
                      <tr>
                        <th>Vertical</th>
                        <th>POC</th>
                        <th>Resource Role</th>
                        <th>Resource</th>
                        <th>PS No.</th>
                        <th>Resource Type</th>
                        <th>Rate</th>
                        <th>Number of Hours</th>
                        <th>Cost</th>
                        <th>Discount Rate</th>
                        <th>Actual Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Machinery and Equipment</td>
                        <td>Neha</td>
                        <td>Project Controller</td>
                        <td >Punit Jha</td>
                        <td>40002527</td>
                        <td>Offshore</td>
                        <td>32.8</td>
                        <td >180</td>
                        <td>5904.0</td>
                        <td>9%</td>
                        <td>5372.6</td>
                        
                      </tr>
                      <tr>
                        <td>Machinery and Equipment</td>
                        <td>Neha</td>
                        <td>Project Controller</td>
                        <td >Bhavin Jotangiya</td>
                        <td>40002527</td>
                        <td>Offshore</td>
                        <td>32.8</td>
                        <td >180</td>
                        <td>5904.0</td>
                        <td>9%</td>
                        <td>5372.6</td>
                      </tr>
                      <tr>
                        <td>Machinery and Equipment</td>
                        <td>Neha</td>
                        <td>Web Developer</td>
                        <td >Uttam Kumar</td>
                        <td>40002527</td>
                        <td>Offshore</td>
                        <td>32.8</td>
                        <td >180</td>
                        <td>5904.0</td>
                        <td>9%</td>
                        <td>5372.6</td>
                      </tr>
                      <tr>
                        <td>Application Eng</td>
                        <td>Sharath</td>
                        <td>Project Controller</td>
                        <td>Shrinivas Jorapur</td>
                        <td>40002527</td>
                        <td>Offshore</td>
                        <td>32.8</td>
                        <td >180</td>
                        <td>5904.0</td>
                        <td>9%</td>
                        <td>5372.6</td>
                      </tr>
                      <tr>
                        <td><strong>Total</strong></td>
                      </tr>
                    </tbody>
                  </Table>

                  
                </CardBody>
               
              </Card>
            </Col>
          </Row>}

          {val==2 && <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Projection</CardTitle>
                </CardHeader>
                <CardBody>
                <Row>
                          
                          <Col xs="3">
                          <p>Please select the year</p>
                          <Dropdown2 />
                          </Col>
                        </Row>
                        <br />
                        <Table className="text-center">
                    <thead>
                      <tr>
                        <th>Months</th>
                        <th>No. Of Resource</th>
                        <th>Rate</th>
                        <th>Hours</th>
                        <th>Leave Count per Resource</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>January</td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        
                      </tr>
                      <tr>
                        <td>February</td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                      <td>March</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                    
                      </tr>
                      <tr>
                      <td>April</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      
                      </tr>
                      <tr>
                      <td>May</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      
                      </tr>
                      <tr>
                      <td>June</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                      <td>July</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                      <td>August</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                      <td>September</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                      <td>October</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                      <td>November</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                      <td>December</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                    </tbody>
                  </Table>
               
                  
                </CardBody>
               
              </Card>
            </Col>
          </Row>}

          {val==3 && <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Resource Details</CardTitle>
                </CardHeader>
                <CardBody>
                <CardTitle tag="p">Search for a resource</CardTitle>
                 <Resource />

                  
                </CardBody>
               
              </Card>
            </Col>
          </Row>}
         
          {val==4 && <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Public Holidays</CardTitle>
                </CardHeader>
                <CardBody>
                <Row>
                          
                          <Col xs="3">
                          <p>Please select the year</p>
                          <Dropdown2 />
                          </Col>
                        </Row>
                        <br />
                        <Table className="text-center">
                    <thead>
                      <tr>
                        <th>Months</th>
                        <th>Onshore</th>
                        <th>Offshore</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>January</td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      
                        
                      </tr>
                      <tr>
                        <td>February</td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                       
                      </tr>
                      <tr>
                      <td>March</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                       
                    
                      </tr>
                      <tr>
                      <td>April</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                       
                      
                      </tr>
                      <tr>
                      <td>May</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                       
                      
                      </tr>
                      <tr>
                      <td>June</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                      <td>July</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                      <td>August</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                      <td>September</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                      <td>October</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                      <td>November</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                      <tr>
                      <td>December</td>
                      <td><input type="number" /></td>
                        <td><input type="number" /></td>
                      </tr>
                    </tbody>
                  </Table>
               
                  
                </CardBody>
               
              </Card>
            </Col>
          </Row>}
        </div>
      </>
    );
}

export default Dashboard;

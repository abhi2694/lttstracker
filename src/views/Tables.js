
import React, {Component} from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Button,
  Row,
  Col,
} from "reactstrap";
import Pqgrid from "./Pqgrid";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";


function Tables(){

  

    return (
      <>
        <div className="content">

          <Row>
            <Col xs="12">
            <Card>
                     
                      <CardBody>
                        <Row>
                          
                          <Col xs="3">
                          <p>Please select the year</p>
                          <Dropdown2 />
                          </Col>

                          <Col xs="3">
                            <p>Please select the month</p>
                          <Dropdown />
                          </Col>

                        </Row>
                        <br />
                      </CardBody>
                    </Card>
            </Col>
          </Row>

        
                  <Row>
                  <Col md="12">
                    <Card>
                      <CardHeader>
                        <CardTitle tag="h4">Detailed Plan</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Pqgrid />
                        <br/>
                        <Button className="bg-primary">Save</Button>
                      </CardBody>
                    </Card>
                  </Col>
                  
                </Row>
               
        
          
        </div>
      </>
    );
  }

export default Tables;

import React from "react";
import {Row, Col} from "reactstrap";

class Pqgrid extends React.Component {
    componentDidMount() {
      this.options = this.props.options;
      window.pq.grid(this.refs.grid, this.options);
    }
    componentDidUpdate(prevProps) {
      
      Object.assign(this.options, this.props.options);
    }
    render() {
      return <div ref='grid'></div>
    }
  }
  
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this);
      this.columns1 = [
        { title: "Date", width: 100, dataType: "date", dataIndx: "rank" },
        { title: "Day", width: 200, dataType: "string", dataIndx: "company" },
        { title: "Work Hours", width: 150, dataType: "integer", dataIndx: "revenues", format: '#.0' },
        { title: "Remarks", width: 150, dataType: "string", dataIndx: "profits", format: '#.0' }
      ]
      this.data1 = [
        { rank: "01/10/2020", company: 'Thursday', revenues: 0, profits:"" },
        { rank: "02/10/2020", company: 'Friday', revenues: 0, profits:"" },
        { rank: "03/10/2020", company: 'Saturday', revenues: 0, profits: "" },
        { rank: "04/10/2020", company: 'Sunday', revenues: 0, profits: "" },
        { rank: "05/10/2020", company: 'Monday', revenues: 0, profits: "" },
        { rank: "06/10/2020", company: 'Tuesday', revenues: 0, profits: "" },
        { rank: "07/10/2020", company: 'Wednesday', revenues: 0, profits: "" },
        { rank: "08/10/2020", company: 'Thursday', revenues: 0, profits:"" },
        { rank: "09/10/2020", company: 'Friday', revenues: 0, profits: "" },
        { rank: "10/10/2020", company: 'Saturday', revenues:0, profits: "" },
        { rank: "11/10/2020", company: 'Sunday', revenues: 0, profits:"" },
        { rank: "12/10/2020", company: 'Monday', revenues: 0, profits: "" },
        { rank: "13/10/2020", company: 'Tuesday', revenues: 0, profits: "" },
        { rank: "14/10/2020", company: 'Wednesday', revenues: 0, profits: "" },
        { rank: "15/10/2020", company: 'Thursday', revenues: 0, profits:"" },
        { rank: "16/10/2020", company: 'Friday', revenues: 0, profits:"" },
        { rank: "17/10/2020", company: 'Saturday', revenues: 0, profits: "" },
        { rank: "18/10/2020", company: 'Sunday', revenues: 0, profits: "" },
        { rank: "19/10/2020", company: 'Monday', revenues: 0, profits: "" },
        { rank: "20/10/2020", company: 'Tuesday', revenues: 0, profits: "" }
      ]
      this.state = {
        showTitle: false,
        reactive: true,
        locale: 'tr',
        height: "flex",
        numberCell: {
          show: false
        },
        columnTemplate: { width: 100 },
        pageModel: {
          type: 'local',
          rPP: 5,
          rPPOptions: [3, 5, 10],
          layout: ["strDisplay", "|", "prev", "next"]
        },
        colModel: this.columns1,
        animModel: {
          on: true
        },
        dataModel: {
          data: this.data1
        }
  
      }
    }
    handleChange(event) {
      
      this.setState({ locale: event.target.value });
    }
    render() {
      return( 
          <Row>
              <Col xs="6">
      <div>
        <div style={{ margin: 20 }}>
          <label>Change locale:</label>
          <select value={this.state.locale} onChange={this.handleChange}>
            <option value="en">English</option>
            <option value="ja">Japanese</option>
            <option value="tr">Turkish</option>
          </select>
        </div>
  
        <Pqgrid options={this.state} />
      </div>
      </Col>
      </Row>);
    }
  }
  
  
export default App;
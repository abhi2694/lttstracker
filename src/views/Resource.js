import React from "react";
import { Table, Button, Row, InputGroup, Form } from "reactstrap";

class Products extends React.Component {

    constructor(props) {
      super(props);
  
      //  this.state.products = [];
      this.state = {};
      this.state.filterText = "";
      this.state.products = [
        {
          id: 1,
          name: 'Punit Kumar Jha'
        }, {
          id: 2,
          name: 'Kajal Kiran Jha'
        }
      ];
  
    }
    handleUserInput(filterText) {
      this.setState({filterText: filterText});
    };
    handleRowDel(product) {
      var index = this.state.products.indexOf(product);
      this.state.products.splice(index, 1);
      this.setState(this.state.products);
    };
  
    handleAddEvent(evt) {
      var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
      var product = {
        id: id,
        name: "",
        psno: "",
        team: "",
        poc: 0,
        role: "",
        rate: "",
        psl:"",
        access:"",
        stdate: "",
        enddate:""
      }
      this.state.products.push(product);
      this.setState(this.state.products);
  
    }
  
    handleProductTable(evt) {
      var item = {
        id: evt.target.id,
        name: evt.target.name,
        value: evt.target.value
      };
  var products = this.state.products.slice();
    var newProducts = products.map(function(product) {
  
      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          product[key] = item.value;
  
        }
      }
      return product;
    });
      this.setState({products:newProducts});
    //  console.log(this.state.products);
    };
    render() {
  
      return (
        <div>
          <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
          <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
        </div>
      );
  
    }
  
  }
  class SearchBar extends React.Component {
    handleChange() {
      this.props.onUserInput(this.refs.filterTextInput.value);
    }
    render() {
      return (
        <div>
           
          <input type="text" placeholder="Search by Name..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
           
        </div>
  
      );
    }
  
  }
  
  class ProductTable extends React.Component {
  
    render() {
      var onProductTableUpdate = this.props.onProductTableUpdate;
      var rowDel = this.props.onRowDel;
      var filterText = this.props.filterText;
      var product = this.props.products.map(function(product) {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
      });
      return (
        <div>
  
  
        <Button type="button" onClick={this.props.onRowAdd} className="bg-primary pull-right text-dark">Add Resource</Button>
        
          <Table className="table table-bordered" responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>PS No.</th>
                <th>Team</th>
                <th>POC</th>
                <th>Role</th>
                <th>Rate</th>
                <th>PSL</th>
                <th>Access</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
  
            <tbody>
              {product}
  
            </tbody>
  
          </Table>
          
        </div>
      );
  
    }
  
  }
  
  class ProductRow extends React.Component {
    onDelEvent() {
      this.props.onDelEvent(this.props.product);
  
    }
    render() {
  
      return (
          
        <tr className="eachRow">
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            "type": "name",
            value: this.props.product.name,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "psno",
            value: this.props.product.psno,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "team",
            value: this.props.product.team,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "poc",
            value: this.props.product.poc,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "role",
            value: this.props.product.role,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "rate",
            value: this.props.product.rate,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "psl",
            value: this.props.product.psl,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "access",
            value: this.props.product.access,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "stdate",
            value: this.props.product.stdate,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "enddate",
            value: this.props.product.enddate,
            id: this.props.product.id
          }}/>
          <td className="del-cell">
            <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
          </td>
        </tr>
        
      );
  
    }
  
  }
  class EditableCell extends React.Component {
  
    render() {
      return (
        <td>
          <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
        </td>
      );
  
    }
  
  }

  export default Products;
  
 
  
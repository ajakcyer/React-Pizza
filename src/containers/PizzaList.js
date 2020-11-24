import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  // state = {
  //   pizzas: []
  // }

  renderPizzas = () =>{
    return this.props.pizzas.map(pizzaObj => <Pizza pizzaToEdit={this.props.pizzaToEdit} key={pizzaObj.id} pizza={pizzaObj} />)
  }

  // componentDidMount = () =>{
  //   fetch("http://localhost:3000/pizzas")
  //   .then(r=>r.json())
  //   .then(data => this.setState(prevState => ({pizzas: data})))
  // }

  render() {
    // console.log(this.state.pizzas)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          { this.props.pizzas.length === 0 ? null : this.renderPizzas()
            //render Pizza here
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;

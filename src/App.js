import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzaId: "",
    editPizzaValues: {
      topping: "",
      size: "",
      vegetarian: null
    },
    pizzas: []
  }

  componentDidMount = () =>{
    fetch("http://localhost:3000/pizzas")
    .then(r=>r.json())
    .then(data => this.setState(prevState => ({pizzas: data})))
  }

  pizzaToEdit = (pizzaObj) =>{
    this.setState(prevState => ({editPizzaValues: {...prevState.editPizzaValues, topping: pizzaObj.topping, size: pizzaObj.size, vegetarian: pizzaObj.vegetarian}, pizzaId: pizzaObj.id}))
    // console.log("in App", pizzaObj)
  }

  changeHandler = (e) =>{
    e.persist()
    console.log("hi from app", e.target.name, e.target.value)
    this.setState(prevState=>({
      editPizzaValues: {...prevState.editPizzaValues, [e.target.name]: e.target.value}
    }))
  }

  veggieChangeHandler = (e) =>{
    e.persist()
    console.log("hi from app", e.target.value, e.target.checked)

    if (e.target.value === "Vegetarian"){
      this.setState(prevState=>({
        editPizzaValues: {...prevState.editPizzaValues, [e.target.name]: e.target.checked}
      }))
      return
    }

    this.setState(prevState=>({
      editPizzaValues: {...prevState.editPizzaValues, vegetarian: false}
    }))
  }

  submitHandler = (pizzaObj) =>{
    // console.log("in app", pizzaObj, this.state.pizzaId)
    const pizzaObjConfig = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(pizzaObj)
    }
    fetch(`http://localhost:3000/pizzas/${this.state.pizzaId}`, pizzaObjConfig)
    .then(r=>r.json())
    .then(updatedPizza => {
      let copiedArray = [...this.state.pizzas]

      let thisPizza = copiedArray.findIndex(pizza => pizza.id === updatedPizza.id)
      // console.log(thisPizza)

      // let indexOfPizza = copiedArray.indexOf(thisPizza)

      copiedArray[thisPizza] = updatedPizza

      this.setState(prevState => ({
        pizzas: copiedArray
      }))
    })
    .catch(console.log)

  }

  render() {
    console.log("state in app:", this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm submitHandler={this.submitHandler} veggieChangeHandler={this.veggieChangeHandler} changeHandler={this.changeHandler} pizza={this.state.editPizzaValues} />
        <PizzaList pizzas={this.state.pizzas} pizzaToEdit={this.pizzaToEdit} />
      </Fragment>
    );
  }
}

export default App;

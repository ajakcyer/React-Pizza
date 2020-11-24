import React from "react"

const PizzaForm = (props) => {

  console.log(props.pizza)

  const localSubmitHandler = (e) =>{
    // e.preventDefault()
    props.submitHandler(props.pizza)
  }
  
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={props.changeHandler} name="topping" type="text" className="form-control" placeholder="Pizza Topping" value={
                props.pizza.topping
              }/>
        </div>
        <div className="col">
          <select onChange={props.changeHandler} value={props.pizza.size} name="size" className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">

            <input
            onChange={props.veggieChangeHandler} name="vegetarian"
            className="form-check-input"
            type="radio"
            value="Vegetarian"
            checked={props.pizza.vegetarian !== null ? (props.pizza.vegetarian ? true : false) : false}
            />

            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">

            <input
            onChange={props.veggieChangeHandler}
            name="vegetarian"
            className="form-check-input"
            type="radio"
            value="Not Vegetarian"
            checked={props.pizza.vegetarian !== null ? (props.pizza.vegetarian ? false : true) : false }
            />

            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={localSubmitHandler}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm

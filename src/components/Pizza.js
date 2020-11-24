import React from "react"

const Pizza = (props) => {

  const clickHandler = () =>{
    props.pizzaToEdit(pizza)
  }
  
  let {pizza} = props
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Yes" : "No"}</td>
      <td><button onClick={clickHandler} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza

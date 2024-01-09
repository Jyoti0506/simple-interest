import React from 'react'
import { NavLink } from 'react-router-dom'

 function Menu() {
  return (
        <header>
            <nav>
                <NavLink className="logo" to={`/`} >React Calculator</NavLink>
                
                <div className="container">
                    <NavLink className="link" to={`/simple/interest`} >Simple Interest</NavLink>
                    <NavLink className="link" to={`/compound/interest`} >Compound Interest</NavLink>
                    <NavLink className="link" to={`/bmi`} >BMI</NavLink>
                    <NavLink className="link" to={`/loan/interest`} >Loan Interest</NavLink>
                </div>
            </nav>
        </header>
  )
}
export default Menu

import React, { Component } from "react";

class Simple extends Component {
    constructor(props){
        super(props)
        this.state ={
            pr:0 ,
            du :0,
            int :0,
            n: 0,
            total: 0,
            sInt :0,
            compound: 0
        }
    }   

    //state = {}  state is not bultin it is property

    // A = P (1 + rt)

    // change handler
    readValue(e) {
        console.log(e.target.value); // e.target => targets whole input element
        const { name, value } = e.target;
        console.log(`name =`, name, 'value =', value)
        this.setState({
            [name]: value
        })
    }

   

    calculate(e) {
        e.preventDefault();
        let si = (this.state.pr * this.state.int * this.state.du) / 100;
        let amount = this.state.pr * (1 + ((this.state.int/100) * this.state.du));

        let coi =  this.state.pr * Math.pow((1 + ((this.state.int) / 100), this.state.n )) - this.state.pr;

        this.setState({
            total : amount,
            sInt : si,
            compound: coi
        })
    }

    render() {
       
        
        return (
            <div className="home">
                <div className="title">
                    <h1>Simple Interest(Class)</h1>
                </div>
                <div className="container1">
                   <form autoComplete="off" onSubmit={(e) => this.calculate(e)} >
                   <div className="group"  >
                        <label htmlFor="pr"> Principal Amount (&#8377;) : </label>
                        <input type="number" name="pr" value={this.state.pr} onChange={(e) => this.readValue(e)} id="pr" required />
                    </div>
                    <div className="group">
                        <label htmlFor="int"> Interest Rate (%) : </label>
                        <input type="number"  name="int"  value={this.state.in} onChange={(e) => this.readValue(e)} id="int" required />
                    </div>
                    <div className="group">
                        <label htmlFor="du"> Duration : </label>
                        <input type="number" value={this.state.du} onChange={(e) => this.setState({du: e.target.value})} name="du" id="du" required />
                    </div>
                    <div className="group">
                        <label htmlFor="n"> Number of times : </label>
                        <input type="number" value={this.state.n} onChange={(e) => this.setState({n: e.target.value})} name="n" id="n" required />
                    </div>
                    <div className="group">
                       <input type="submit" className="btn" value="calculate" />
                    </div>
                   </form>
                
                <div>
                        <div className="result">
                        <h1>Simple Interest = {this.state.sInt} </h1>
                        <h1>Final amount = {this.state.total} </h1>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Simple
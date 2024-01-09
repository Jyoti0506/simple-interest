
import React, {Component} from "react";

class ComponentInt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            p :0,
            r: 0,
            t :0,
            A:0,
            ci:0
        }
        this.calculate = this.calculate.bind(this)
    }


calculate(e) {
    e.preventDefault()
    let x = Math.pow((1 + (this.state.r/100)), this.state.t);
    let res = (this.state.p * x) - this.state.p;

    let y = Math.pow((1 + this.state.r), this.state.t);
    let amount = this.state.p * y;
    this.setState({
        ci :res,
        A : amount
    })
}

render() {
    return (
        <div className="home">
            <div className="title">
                <h1>Compound Interest</h1>
            </div>
            <div className="container1">
                <form autoComplete="off" onSubmit={this.calculate}>
                    <div className="form-item">
                        <label htmlFor="p">Principle :</label>
                        <input type="number" name="p" value={this.state.p} onChange={(e) => this.setState({p : e.target.value})} id="p" required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="r">Rate of Interest :</label>
                        <input type="number"  name="r" value={this.state.r} onChange={(e) => this.setState({r: e.target.value})} id="r" required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="t">Time duration :</label>
                        <input type="number"  name="t" value={this.state.t} onChange={(e) => this.setState({t: e.target.value})} id="t" required />
                    </div>
                    <div className="form-item">
                        <input type="submit" className="btn" value="calculate" />
                    </div>
                </form>
            
            <div className="container">
            <h1>Compound Interest = {this.state.ci}</h1>
                <h1>Amount = {this.state.A} </h1>   
            </div>
            </div>
        </div>

        )
    }

}
export default ComponentInt

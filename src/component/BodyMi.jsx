import React, {Component} from "react";

class Bmi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            h :0,
            w: 0,
            bmi:0
        }
    }

    readValue(e) {
        const {name, value} = e.target;
        console.log("name=", name, "value =", value);
        this.setState({
            [name] : value
        })
    }

    calculate(e) {
        e.preventDefault()
        let x = this.state.h /100;
        let res = (this.state.w / (x * x)).toFixed(2);
        this.setState({
            bmi: res
        })
    }


    render() {
        return (
            <div className="home">
                    <div className="title">
                        <h1>Body Mass Index</h1>
                    </div>
                    <div className="container1">
                        <form autoComplete="off" onSubmit={(e) => this.calculate(e)} >
                            <div className="form-item">
                                <label htmlFor="w">Weight :</label>
                                <input type="number" name="w" value={this.state.w} onChange={(e) => this.readValue(e)} id="w" required/>
                            </div>
                            <div className="form-item">
                                <label htmlFor="h">Height :</label>
                                <input type="number" name="h" value={this.state.h} onChange={(e) => this.readValue(e)} id="h" required/>
                            </div>
                            <div className="form-item">
                                <input type="submit" className="btn" value="calculate" />
                            </div>
                        </form>
                    
                    <div className="container">
                        <h1>Body Mass Index ={this.state.bmi} </h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default Bmi


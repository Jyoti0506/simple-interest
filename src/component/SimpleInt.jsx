import React, { useState } from "react";
 //function calculate() {}


function SimpleInt() {
    const [p,setP] = useState(0);
    const [r,setR] = useState(0);
    const [t,setT] = useState(0);

    const [si,setSi] = useState(0);
    const [total, setTotal] = useState(0);

    const calculate = function(e) {
        e.preventDefault();
        let x1 = ( p * t * r) /100;
        setSi(x1) 
        let x2 = p * (1 + (r/100) * t);
        setTotal(x2)
    }


    return (
        <div>
            <div className="title">
            <h1>Forms In functional component</h1>
            </div>

            <div className="container">
                <form autoComplete="off" onSubmit={(e) => calculate(e)}>
                    <div className="form-item">
                        <label htmlFor="p">Principle</label>
                        <input type="number" name="p" value={p} onChange={(e) => setP(e.target.value)} id="p" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="r">Rate of Interest</label>
                        <input type="number" name="r" value={r} onChange={(e) => setR(e.target.value)} id="r" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="t">Time duration</label>
                        <input type="number" name="t" value={t} onChange={(e) => setT(e.target.value)} id="t" />
                    </div>
                    <div className="form-item">
                        <input type="submit" value="calculate" />
                    </div>
                </form>
            </div>

            <div className="container">
                <h1>Simple Interet = {si} </h1>
                <h1>Total amount = {total} </h1>
            </div>
        </div>
    )
}

export default SimpleInt
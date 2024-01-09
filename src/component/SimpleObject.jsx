import React, { useState } from "react";

function SimpleObject() {
    const [inp,setInp] = useState({
        p: 0,
        t:0,
        r:0
    })

    const [si,setSi] = useState(0);
    const [total,setTotal] = useState(0)

    const readInput = (e) => {
        const { name, value} = e.target;
        setInp({...inp, [name]:value})
    }

    const calculate = function(e) {
        e.preventDefault();
        let x1 = ( inp.p * inp.t * inp.r) /100;
        setSi(x1) 
        let x2 = inp.p * (1 + (inp.r/100) * inp.t);
        setTotal(x2)
    }

    return(
        <div>
        <div className="title">
        <h1>Forms In functional component</h1>
        </div>

        <div className="container">
            <form autoComplete="off" onSubmit={calculate}>
                <div className="form-item">
                    <label htmlFor="p">Principle</label>
                    <input type="number" name="p" value={inp.p} onChange={(e) => readInput(e)} id="p" />
                </div>
                <div className="form-item">
                    <label htmlFor="r">Rate of Interest</label>
                    <input type="number" name="r" value={inp.r} onChange={readInput} id="r" />
                </div>
                <div className="form-item">
                    <label htmlFor="t">Time duration</label>
                    <input type="number" name="t" value={inp.t} onChange={readInput} id="t" />
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
export default SimpleObject
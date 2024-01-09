import React, {useState} from 'react'

function LoanInt() {
        const [p,setP] = useState(0)
        const [r,setR] = useState(0)
        const [n,setN] = useState(0)

        const [emi,setE] =useState(0)

        const calculate = function(e) {
            e.preventDefault()

           let R = r / 12 /100;
           let x = Math.pow((1 + R),n)
            let EMI = p * R *((x) / (x-1)); 
            setE(EMI)
        }

  return (
    <div className='home'>
        <div className="title">
            <h1>Equated Monthly Instalment</h1>
        </div>
        <div className="container1">
            <form autoComplete='off' onSubmit={calculate} >
                <div className="group">
                    <label htmlFor="p">Principal amount :</label>
                    <input type="text" name="p" value={p} onChange={(e) => setP(e.target.value)} id="p" required />
                </div>
                <div className="group">
                    <label htmlFor="r">Rate of Interest :</label>
                    <input type="text" name="r" value={r} onChange={(e) => setR(e.target.value)} id="r" required />
                </div>
                <div className="group">
                    <label htmlFor="n">Total Monts :</label>
                    <input type="text" name="n" value={n} onChange={(e) => setN(e.target.value)} id="n" required />
                </div>
                <div className="group">
                    <input type="submit" className='btn' value="calculate" />
                </div>
                
            </form>

            <div className="container">
                <h1>EMI = {emi}</h1>
            </div>
        </div>
    </div>
  )
}

export default LoanInt

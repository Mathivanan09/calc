import React, { useState } from 'react'
import '../../styles/Styles.css';
import labels from '../../constants/default';

const Calc = () => {

  const [inputs, setInputs] = useState('6 + 8');
  const [result, setResult] = useState(6 + 8);

  const inputSymbols = labels.inputSymbols;

  return (
    <div className='calc-container'>
      <div className='row calc-head justify-content-center'>
        CALCULATOR JS
      </div>
      <div className='row justify-content-center'>
        <div className='col col-6 border border-secondary border-3'>
          <div className='row input-container justify-content-end'>
            {inputs}
            <br />

          </div>
          <div className='row result-container justify-content-end'>
            {`= ${result}`}
          </div>
          {inputSymbols?.map((lineSymbol, idx) => (
            <div className='row p-1' key={idx}>
              {lineSymbol?.map((symbols, sdx) => (
                <div className='d-grid gap-2 col-3 mx-auto' key={sdx}>
                  <button className='btn btn-outline-secondary'>{symbols}</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calc
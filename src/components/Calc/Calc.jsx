import React, { useState } from 'react'
import '../../styles/Styles.css';
import labels from '../../constants/default';

const Calc = () => {

  const [inputs, setInputs] = useState('0');
  const [result, setResult] = useState(0);

  const inputSymbols = labels.inputSymbols;
  const specialChar = ['%', 'X', '+', '-', '/', '='];
  const handleResponse = (e) => {
    // console.log(inputs.length);
    if (e.target.value === 'AC') {
      setInputs('0');
      setResult(0);
    } else {
      let content = '';
      if ((inputs.length === 1) && (inputs === '0')) {
        content += e.target.value;
      } else {
        content = inputs + e.target.value;
      }
      setInputs(content);
      console.log(content);
      if (!specialChar.includes(e.target.value)) {
        const evaluvatedData = eval(content);
        setResult(evaluvatedData);
      }
    }

  }
  // console.log(inputs);

  return (
    <div className='calc-container'>
      <div className='row calc-head justify-content-center'>
        CALCULATOR JS
      </div>
      <div className='row justify-content-center'>
        <div className='col col-5 border border-secondary border-3'>
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
                  <button onClick={handleResponse} value={symbols} className='btn btn-outline-secondary'>{symbols}</button>
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
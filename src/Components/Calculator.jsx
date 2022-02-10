import React, { useState } from 'react';
import Pads from './Pads';
import Display from './Display';
import calculate from '../logic/calculate';

function Calculator() {
  const [operations, setOperations] = useState({ total: null, next: null, operation: null });

  const handleClick = (e) => {
    setOperations(calculate(operations, e.target.value));
  };

  const { total, next, operation } = operations;
  const data = next || operation || total || 0;

  return (
    <div className="calculator">
      <Display data={data} />
      <Pads handleClick={handleClick} />
    </div>
  );
}

export default Calculator;

'use client'
import { useState } from "react";

export default function Home(){
  const [result, setResult] = useState('')
  const [expression, setExpression] = useState('')

  const handleButtonClick = (value) => {
    if (value=== '='){
      try{
        const evalResult= eval(expression).toString();
        setResult(evalResult);
        setExpression(evalResult);
      } catch (error){
        setResult ('Error');
      }
      }else if (value=== 'C'){
        setResult('');
        setExpression('');
      }else {
        setExpression((prevExpression)=> prevExpression + value)
      }
  };

  const buttons =[
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-10 color:rgb(252 165 165)">Calculator</h1>
      <h2 className="text-l font-bold">made by lezaanalberts on GitHub</h2>
      <div className=" bg-white p-6 rounded-lg shadow-lg">
        <input 
        type="text"
        className="w-full mb-2 text-3xl border-b-2 border-color:rgb(252 165 165) border-width:400 focus:outline-none"
        value={expression}
        readOnly
        />
        <input 
        type="text"
        className="w-full text-4xl font-bold mb-4 focus-outline"
        value={result}
        readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn)=> (
            <button
              key={btn}
              onClick= {()=> handleButtonClick(btn)}
              className="text-4xl bg-pink-300 hover:bg-pink
              -400 p-2 rounded-lg"
              >
                {btn}
              </button>
          ))}
        </div>
      </div>
    </main>
  );
 };
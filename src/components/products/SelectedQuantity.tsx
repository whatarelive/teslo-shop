"use client";

import { useState, type FC } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
    quantity: number;
}

const SelectedQuantity: FC<Props> = ({ quantity }) => {
    const [count, setCount] = useState(quantity);
  
    const handleClick = ( value: number ) => {
        if (count + value < 1) return;

        setCount(count + value);
    }

  return (
    <div className='flex'>
        <button onClick={() => handleClick(-1)}> 
            <IoRemoveCircleOutline size={30}/>
        </button>

        <span className='w-20 mx-3 px-5 text-center rounded bg-gray-100'>
            { count }
        </span>

        <button onClick={() => handleClick(+1)}>
            <IoAddCircleOutline size={30}/>
        </button>
    </div>
  )
}

export default SelectedQuantity
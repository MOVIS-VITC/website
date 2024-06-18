import React from 'react'
import './style.css';

const InfiniteScroller = () => {   

  const List = ['Lorem Ipsum Dolor1','Lorem Ipsum Dolor2','Lorem Ipsum Dolor3','Lorem Ipsum Dolor4','Lorem Ipsum Dolor5','Lorem Ipsum Dolor6','Lorem Ipsum Dolor7','Lorem Ipsum Dolor8','Lorem Ipsum Dolor9','Lorem Ipsum Dolor10','Lorem Ipsum Dolor11'];

  return (
    <div className='scroller flex flex-col items-end justify-end w-[100vw] overflow-hidden'>
      <div>
        <div className='scroller__inner__reverse flex py-2 gap-4 whitespace-nowrap w-full overflow-hidden'>
          {List.map((text, index) => {
            return <div className='w-full text-2xl font-poppins font-semibold text-text' key={index}>{text}</div>
          })}
          {List.map((text, index) => {
            return <div className="w-full text-2xl font-poppins font-semibold text-text" key={index}>{text}</div>
          })}
        </div>
      </div>   
    </div>
  )
}

export default InfiniteScroller
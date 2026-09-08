import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import list from '../data/list.json'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const Courses = () => {
  return (
    <>
     <Navbar/>
    <div className='max-w-screen-2xl mx-auto px-4 md:px-16'>
    
     <div className='flex flex-col items-center'>
     <h1 className='text-2xl md:text-4xl font-semibold text-center mt-12'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1> 
     <p className='text-center mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi dignissimos perspiciatis voluptate optio mollitia fuga porro ullam consequatur nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium quia possimus et! Consectetur, sequi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, nulla?</p>
     <Link to={'/'} className='bg-pink-500 hover:bg-pink-700 text-white transition-all duration-200 px-3 py-2 mt-4 rounded-md'>Back</Link>
     </div>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-y-4 mb-6'>
        {list.map((item)=> <Card item={item} key={item.id}/>)}
     </div>
     </div>
     <Footer/>
    </>
  )
}

export default Courses

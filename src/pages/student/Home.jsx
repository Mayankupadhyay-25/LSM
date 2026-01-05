import React from 'react'
import Hero from '../../Components/student/Hero'
import SearchBar from '../../Components/student/SearchBar'
import Companies from '../../Components/student/Companies'
import CoursesSection from '../../Components/student/CoursesSection'
import TestimonialSection from '../../Components/student/TestimonialSection'
import CallToAction from '../../Components/student/CallToAction'
import Footer from '../../Components/student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
        <Hero/>
        <SearchBar/>
         <Companies/>
        <CoursesSection/>
        <TestimonialSection/>
        <CallToAction/>
        <Footer/>

    </div>
  )
}

export default Home
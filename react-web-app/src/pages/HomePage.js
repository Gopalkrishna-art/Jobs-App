import React from 'react'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import HomeCards from '../components/HomeCards'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero  />
    <HomeCards />
    <JobListing isHome={true}/>
    <ViewAllJobs /></>
  )
}

export default HomePage
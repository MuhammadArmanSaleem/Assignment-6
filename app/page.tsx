import React from 'react'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Company from './components/companies/company'
import Category from './components/category/category'
import Acheive from './components/acheive/acheive'
import Courses from './components/courses/courses'
import Team from './components/team/team'
import Custom from './components/custom/custom'
import Footer from './components/footer/footer'
const Home = () => {
  return (
    <div>
    
    <Header>
    </Header>
    <Banner></Banner>
    <Company></Company>
    <Category></Category>
    <Acheive></Acheive>
    <Courses></Courses>
    <Team></Team>
    <Custom></Custom>
    <Footer></Footer>
    </div>
  )
}

export default Home

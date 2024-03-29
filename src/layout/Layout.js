import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Svg from './svg'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <Svg/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
